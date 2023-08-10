import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name : String,
    age : Number,
    address : String
})

const userModel = mongoose.model('user', userSchema)

export default userModel