import {
  addAccountAction,
  updateAccountAction,
  loginAccountAction,
  showAccounts
} from './actions/accountActions';

import {
  addMusicAction,
  showMusic
} from './actions/musicActions';

import { addCommentAction } from './actions/commentActions'

import {storeUpload} from './actions/utils/uploader'

const accounts = [
    {
    user: 'lrodriguez',
    email: 'lrodriguez@sysvirtuales.com',
    gender: 'H'
    },
    {    
    user: 'anerenee',
    email: 'anarenee@sysvirtuales.com',
    gender: 'M'
    },
    {
    user: 'develop',
    email: 'development@sysvirtuales.com',
    gender: 'H'
    },
    {
    user: 'marketing',
    email: 'marketing@sysvirtuales.com',
    gender: 'H'
    }
]

const resolvers = {
    Query: {
      accounts: () => showAccounts(),
      music: () => showMusic(),
    },
    Mutation: {
      addAccount: async (parent, data, context, info) => {
        try {
          // sube el archivo
          const { createReadStream } = await data.data.profileImage
          const stream = createReadStream()
          const { url } = await storeUpload(stream, 'image')

          // registra usario
          const userInfo = {
            ...data.data,
            profileImage: url,
          }

          return await addAccountAction(userInfo)          
        } catch (error){
          console.log("TCL: error", error)
        }
      },
      loginAccount: async (parent, data, context, info) => {
        try {
          const { email, password } = data
          return await loginAccountAction(email, password)          
        } catch (error) {
          console.log("TCL: error", error)
        }
      },
      addMusic: async (parent, data, context, info) => {
        try {
          // sube el archivo
          const { musicData } = data;
          const { createReadStream } = await musicData.path
          const stream = createReadStream()
          const { url } = await storeUpload(stream, 'video')

          const musicInfo = {
            ...musicData,
            path: url,
          }
          return await addMusicAction(musicInfo)
        } catch (error) {
          console.log("TCL: addMusic error", error)
        }
      },
      addComment: async (parent, data, context, info) => {
        try {
          const { commentData } = data
          const { user } = context
          const newComment = await addCommentAction(commentData, user._id)
          const filter = { _id: user._id }
          const update = { $push: { comments: newComment._id } }
          await updateAccountAction(filter, update)
          return newComment
        } catch (error) {
          console.log("TCL: addComment error", error)
        }
      }
    }
  };

export default resolvers;