const mongoose=require('mongoose')

const blogSchema=new mongoose.Schema({
    title: String,
    content: String,
    author: String,
})

const Blog=mongoose.model('blogs',blogSchema)
module.exports=Blog