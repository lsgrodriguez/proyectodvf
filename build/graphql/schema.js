"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServer = require("apollo-server");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  directive @AuthDirective on QUERY | FIELD_DEFINITION | FIELD\n  scalar Date\n\n  type Token {\n    token: String\n  }\n\n  type Account {\n    _id: ID\n    user: String\n    email: String\n    gender: String\n    role: String \n    profileImage: String\n    comments: [Comment]\n  }\n\n  type Music {\n    _id: ID\n    title: String\n    format: String\n    path: String\n  }\n\n  type Comment {\n    _id: ID\n    comment: String\n    isActive: Boolean\n    musicID: ID\n    authorID: ID\n    createdAt: Date\n    updatedAt: Date\n  }\n\n  input AccountInput {    \n    user: String\n    email: String\n    password: String\n    role: String\n    gender: String\n    profileImage: Upload\n  }\n\n  input MusicInput {\n    title: String\n    format: String\n    path: Upload\n  }\n\n  input CommentInput {\n    comment: String\n    musicID: ID\n  }\n\n  type Query {\n    accounts: [Account] @AuthDirective\n    music: [Music] @AuthDirective\n  }\n\n  type Mutation {\n    addAccount(data: AccountInput) : Token\n    loginAccount(email: String, password: String) : Token\n    addComment(commentData: CommentInput) : Comment @AuthDirective\n    addMusic(musicData: MusicInput) : Music @AuthDirective\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var typeDefs = (0, _apolloServer.gql)(_templateObject());
var _default = typeDefs;
exports["default"] = _default;
//# sourceMappingURL=schema.js.map