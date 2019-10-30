import {
  addAccountAction,
  updateAccountAction,
  loginAccountAction,
  showAccounts
} from './actions/accountActions';

import {
  addMusicAction,
} from './actions/musicActions';

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
    },
    Mutation: {
      addAccount: async (parent, data, context, info) => {
        try {
          return await addAccountAction(data.data)          
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
          console.log(data)
          const { musicData } = data;
          return await addMusicAction(musicData)
        } catch (error) {
          console.log("TCL: addMusic error", error)
        }
      },
    }
  };

export default resolvers;