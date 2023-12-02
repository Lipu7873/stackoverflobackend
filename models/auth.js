import mongoose from "mongoose";

const userSchema =  mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true },
    password: {type: String, required: true},
    about: {type: String },
    tags: {type: [String] },
    joinedOn: {type: Date, default: Date.now }
},{timestamps: true})

export default mongoose.model("User", userSchema)

// const User = mongoose.model('User', userSchema)
// module.exports = User;