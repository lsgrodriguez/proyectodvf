import mongoose from 'mongoose';
const schema = mongoose.Schema;
const musicSchema = new schema (
    {
        title: {
            type: String,
            required: true
        },
        format: {
            type: String,
            required: true
        },
        path: {
            type:String,
            required: true
        }
    }
)
mongoose.Types.ObjectId.prototype.valueOf = function () {
    return this.toString();
}
export default musicSchema;