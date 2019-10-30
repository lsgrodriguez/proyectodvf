import mongoose from 'mongoose';
import bcrypt from 'bcrypt'
const schema = mongoose.Schema;
const accountSchema = new schema (
    {
        user: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role:{
            type:String,
            enum: ['admin', 'user'],
            required: true
        },
        gender: {
            type: String,
            enum: ['H', 'M'],
        },
        subscription: {
            type: String,
            enum: ['30', '60', '120']
        }
    },
    { timestamps: true}
)

mongoose.Types.ObjectId.prototype.valueOf = function () {
    return this.toString();
}

accountSchema.pre("save", function(next) {
    let account = this
    bcrypt.genSalt(10, function(error, salt){
        bcrypt.hash(account.password, salt, function(error, hash){
            if (error) return next(error)
            account.password = hash
            next()
        })
    })
})

export default accountSchema;