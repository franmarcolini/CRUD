const { query } = require('express')
const connection = require('../connection')
const {mydatabase} = require('../config')



const allPosts = (req, res)=>{   
    
    const sql = `select * from posts`
    connection.query(sql, (err, result)=>{
        if(err){
            console.log('Ha ocurrido un error')
        }else{
            console.log(result)       
            res.render('posts', {posts: result})   
        }       
    })  
}

const create = (req,res)=>{
    //    console.log(req.body)
        res.render('create-post')
        const data = req.body
        const sql = `insert into posts SET ${data}`
        
        connection.query(sql, data, (err, result)=>{
            if(err){
                console.log('Ha ocurrido un error')
            }else{
               
                console.log('Posteo cargado')
               
                res.redirect('/posts/all', {posts:result})
            }
        })
    }

const update = (req,res)=>{
    res.render('update-post')
    const param = req.params.id
    const sql = `update posts SET title='${req.param.title}', summary='${req.param.summary}', 
    created_at='${req.param.created_at}', updated_at='${req.param.updated_at}' where id='${param}' `
    connection.query(sql, (err, result)=>{
        if(err){
            console.log('Ha ocurrido un error')
        }else{
            console.log('Posteo modificado')
            res.redirect('/posts/all')
        }
    })
   
}
const deleteP = (req,res)=>{
    res.render('delete-post')
    const param = req.params.id
    const sql = `delete from posts where id=${param}`
    connection.query(sql, (err, result)=>{
        if(err){
            console.log('Ha ocurrido un error' +err)
        }else{
            console.log('Posteo Eliminado')
            res.redirect('/posts/all')
        }
    })
}

module.exports = {
    allPosts,
    create, 
    update, 
    deleteP
}



// router.update('select posts.title AS post, images.url AS img FROM posts JOIN images ON posts.id = images.idPost', (err, result)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(result);
//         res.redirect('/post', {posts:result})
//     }
// })

// const express = require("express")
// const router = express.Router()
// const Controller = require('../controllers/posts')
// const mysql = require('mysql')
// const { mydatabase } = require('./config')
// const res = require("express/lib/response")

// const connection = mysql.createConnection(mydatabase)

// router.get(Controller.getPosts, (req, res, next)=>{
//    res.render('/all')
// })

// router.get(Controller.getPost, (req, res, next)=>{
//     res.redirect('/posts/post')
// })

// router.post(Controller.getCreatePost, (err, result)=>{
//     const sql = 'INSERT INTO posts SET ?'
//     if(err){
//         console.log(err)
//     }else{
//         console.log('Posteo cargado con exito' + result)
//         res.render('/posts/create', {post: result})
//     }
// })

// router.put(Controller.getUpdatePost, (err, result)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(result)
//         res.redirect('/posts/update', {posts:result})
//     }
// })

// router.delete(Controller.getDeletePost, (err, result)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(result)
//         res.redirect('/posts/delete', {post: result})
//     }
// })
