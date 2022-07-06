// const express = require('express')



const connection = require('../connection')
const config = require('../config')


// const router = express.Router();
const post = require('../models/Posts');


const getBlog = (req,res)=>{
    return post.renderBlog(req,res);
}

const getAll = (req,res)=>{
   return post.Posts(req, res);  
}

const getPost = (req,res)=>{
   return post.idPost(req,res);    
}

const createPost = (req,res)=>{
     return post.create(req, res);
}

const SavePost = (req,res)=>{  
   // res.render('create-post');
    return post.save(req, res);
    
}

const getIDUpdate = (req, res)=>{
    return post.getUpdate(req, res)
}

const UpdatePost = (req,res)=>{
   // res.render('update-post')
    return post.update(req,res);    
}

const getDelete = (req, res)=>{
    return post.Gdelete(req, res);
}

const DeletePost = (req, res)=>{
   
    return post.deleteP(req,res);
}

module.exports = {
    getBlog,
    getAll,
    getPost,
    createPost,
    SavePost,
    getIDUpdate,
    UpdatePost, 
    getDelete
   // DeletePost
}