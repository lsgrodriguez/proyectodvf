import mongoose from 'mongoose';
const schema = mongoose.Schema;
const commentSchema = new schema (
    {
        comment: {
            type: String,
            required: true,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        musicID: {
            type: schema.Types.ObjectId,
            ref: 'music'
        },
        authorID: {
            type: schema.Types.ObjectId,
            ref: 'account'
        }
    },
    { timestamps: true }
)
mongoose.Types.ObjectId.prototype.valueOf = function () {
    return this.toString();
}

export default commentSchema;         