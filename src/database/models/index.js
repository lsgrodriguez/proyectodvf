import mongoose from 'mongoose';
import accountSchema from '../schemas/accountSchema';
import musicSchema from '../schemas/musicSchema';
import commentSchema from '../schemas/commentSchema';

const accountsModel = mongoose.model('account', accountSchema);
const musicModel = mongoose.model('music', musicSchema);
const commentModel = mongoose.model('comment', commentSchema);

export {
    accountsModel,
    musicModel,
    commentModel
}