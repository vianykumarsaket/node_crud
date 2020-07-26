const mongoose = require('mongoose')

const Schema = mongoose.Schema;

var Todos = new Schema({
    title:String,
    description:String
})

module.exports = mongoose.model('todo',Todos);