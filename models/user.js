const mogoose = require('mongoose');

const userSchema = new mogoose.Schema({
    email:String,
    username: String,
    age: Number
})

module.exports = mogoose.model('User', userSchema)