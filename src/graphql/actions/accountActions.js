import jwt from 'jsonwebtoken';
import { accountsModel } from '../../database/models';
import bcrypt from 'bcrypt'

//Esto sirve para agregar expiracion a los token...
Date.prototype.addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

const createToken = (userData) => {
    const exp = new Date().addDays(5).getTime();
    const payload = {
      _id: userData.id,
      email: userData.email,
      user: userData.user,
      exp,
    }
  
    const token = jwt.sign(payload, process.env.JWT);
    return token;
}

const addAccountAction = async (accountData) => {
  try {
    const newAccount = await accountsModel.create(accountData)
    console.log(newAccount)
    const token = createToken(newAccount);
    return {token};
  } catch (error) {
    console.log("TCL: error", error)
  }
};

const updateAccountAction = async (filter, update) => {
  try {
    return await accountsModel.findOneAndUpdate(filter, update, { new: true } );
  } catch (error) {
    console.log("TCL: updateAccountAction -> error", error)
  }
}

const showAccounts = async () =>{
  try {
    return await accountsModel.find().populate('comments');
  } catch (error) {
    console.log("TCL: showAccounts -> error", error)
  }
}

const findAccountAction = async (filter) => {
  try {
    return await accountsModel.findOne(filter)
  } catch (error) {
    console.log("TCL: findAccountAction -> error", error)
  }
}

const loginAccountAction = async (email, password) => {
  try {
    const filter = { email: email };
    try {
      const account = await findAccountAction(filter)
      const valid = await bcrypt.compare(password, account.password)
      if (valid) {
        const token = createToken(account);
        return {token};
      }
    } catch (error) {
      return error
    }
  } catch (error) {
    console.log("TCL: loginAccountAction -> error", error)
  }
}

export {
  addAccountAction,
  updateAccountAction,
  findAccountAction,
  showAccounts,
  loginAccountAction
}