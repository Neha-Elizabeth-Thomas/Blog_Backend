// app.js
const express = require('express');
const mongoose = require('mongoose');
const Blog=require('./Models/blog')
const cors=require('cors')

const app = express();

const PORT = process.env.PORT || 3000;
require('dotenv').config()
console.log(process.env.MONGODB_URL)

main()
.then(()=>console.log("DB connected"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors())

app.get('/',async(req,res)=>{
    try{
        const blogs=await Blog.find()
        return res.status(200).json(blogs)
    }catch(error){
        return res.status(500).json({error:error.message})
    }
})

app.post('/',async(req,res)=>{
    try{
        if(!req.body){
            return res.status(400).json({error:"No blog details found"})
        }
        const {title,content,author}=req.body

        const blog=new Blog({title,content,author})
        await blog.save()
        res.status(200).json({message:"blog added",blog:{blog}})
    }catch(error){
        return res.status(500).json({error:error.message})
    }
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})
