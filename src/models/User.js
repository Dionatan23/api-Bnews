const mongoose = require("mongoose")
// Criando o Schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})
// defenindo o schema e setando ao uma var
const User = mongoose.Schema("User", UserSchema)
module.exports = User;