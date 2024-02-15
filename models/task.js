const mogoose = require('mongoose');

const taskSchema = new mogoose.Schema({
    taskName:String
})

module.exports = mogoose.model('Tasks', taskSchema)