const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema(
    {
        name:{type:String,require: true},
        email:{type:String,require:true,unique:true},
        age:Number,
        favouriteFood:[String]
    }
)

module.exports = mongoose.model('Person',PersonSchema)

