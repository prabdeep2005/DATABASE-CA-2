import mongoose from 'mongoose'
const { title, availableMemory } = require('process')

const schema=new mongoose.Schema({
    title:{
        type:String,
        required:[true, "movie title is required"],
        trim:true
    },
    director:{
        type:String,
        required:[true, "  name of the director is required"],
        unique:true,
        trim: true
    },
    genre:{
        type:String,
        required:[true, "genre is required"],
        unique:true,
        trim:true
    },
    releaseYear:{
        type:number,
    },
    availableCopies:{
        type:String,
        required:[true, "availableCopies is required"],
        trim:true
    },
})

const mongoSchema=mongoose.model('schema', schema)
module.exports=mongoSchema