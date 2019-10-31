import { gql } from 'apollo-server';

const typeDefs = gql`
  directive @AuthDirective on QUERY | FIELD_DEFINITION | FIELD
  scalar Date

  type Token {
    token: String
  }

  type Account {
    _id: ID
    user: String
    email: String
    gender: String
    role: String 
    profileImage: String
    comments: [Comment]
  }

  type Music {
    _id: ID
    title: String
    format: String
    path: String
  }

  type Comment {
    _id: ID
    comment: String
    isActive: Boolean
    musicID: ID
    authorID: ID
    createdAt: Date
    updatedAt: Date
  }

  input AccountInput {    
    user: String
    email: String
    password: String
    role: String
    gender: String
    profileImage: Upload
  }

  input MusicInput {
    title: String
    format: String
    path: Upload
  }

  input CommentInput {
    comment: String
    musicID: ID
  }

  type Query {
    accounts: [Account] @AuthDirective
    music: [Music] @AuthDirective
  }

  type Mutation {
    addAccount(data: AccountInput) : Token
    loginAccount(email: String, password: String) : Token
    addComment(commentData: CommentInput) : Comment @AuthDirective
    addMusic(musicData: MusicInput) : Music @AuthDirective
  }
`;
export default typeDefs;
