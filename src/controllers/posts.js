// const express = require('express')
const { query } = require('express')
const connection = require('../connection')
// const router = express.Router();
const post = require('../models/Posts')


const getPosts = (req,res)=>{

    const sql = 'select * from posts'
    connection.query(sql, (err, result)=>{
        if(err){
            console.log('Ha ocurrido un error')
        }else{
            console.log(result)
            res.render('posts', {posts: result}) 
        }       
    })    
}

const getPost = (req,res)=>{
    const param = req.params.id
    const sql = 'select * from posts where id=?'
    connection.query(sql, (err, result)=>{
        if(err){
            console.log('Ha ocurrido un error')
        }else{
            console.log(result)
            res.render('/posts/:id', {posts: result}) 
        }       
    })    
}

const CreatePost = (req,res)=>{
    return post.create(req, res);
}


// const getUpdatePost = (req,res)=>{
//     const param = req.params.id
//     const sql = 'select * from posts where id=?'
//     connection.query(sql, param, (err, result)=>{

//         // var querySQL = sql.Where(c=> c.created_at == '20220218') 
//         if(err){
//             console.log('Ha ocurrido un error' + err)
//         }else{
//             console.log(result)
//             res.render('update-post', {posts :result})
//         }
//     })
    
// }



// const getDeletePost = (req,res)=>{
//     const param = req.params.id
//     const sql = 'select * from posts where id=?'
//     connection.query(sql, param, (err, result)=>{
//         if(err){
//             console.log('Ha ocurrido un error' +err)
//         }else{
//             console.log(result)
//             res.render('delete-post', {posts:result})
//         }
//     })
// }


// const createPost = (req,res)=>{
//     //    console.log(req.body)
//         const sql = 'insert into posts SET ?'
//         const data = req.body
//         connection.query(sql, data, (err, result)=>{
//             if(err){
//                 console.log('Ha ocurrido un error')
//             }else{
//                 console.log('Posteo cargado')
//                 res.redirect('/posts/all', {posts:result})
//             }
//         })
//     }

// const updatePost = (req,res)=>{
//     const param = req.params.id
//     const sql = `update posts SET title='${req.param.title}', summary='${req.param.summary}', 
//     created_at='${req.param.created_at}', updated_at='${req.param.updated_at}' where id='${param}' `
//     connection.query(sql, (err, result)=>{
//         if(err){
//             console.log('Ha ocurrido un error')
//         }else{
//             console.log('Posteo modificado')
//             res.redirect('/posts/all')
//         }
//     })
   
// }
// const deletePost = (req,res)=>{
//     const param = req.params.id
//     const sql = `delete from posts where id=${param}`
//     connection.query(sql, (err, result)=>{
//         if(err){
//             console.log('Ha ocurrido un error' +err)
//         }else{
//             console.log('Posteo Eliminado')
//             res.redirect('/posts/all')
//         }
//     })
// }



module.exports = {
    getPosts,
    getPost,
    CreatePost
    // getUpdatePost, 
    // getDeletePost,
    // createPost, 
    // updatePost, 
    // deletePost
}