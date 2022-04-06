const { query } = require('express')
const connection = require('../connection')


const createComment = (req,res)=>{
    //    console.log(req.body)
        const data = req.body
        const sql = `insert into comments SET ${data} `
        
        connection.query(sql, data, (err, result)=>{
            if(err){
                console.log('Ha ocurrido un error')
            }else{
                console.log('Posteo cargado')
                res.redirect('/posts/all', {posts:result})
            }
        })
    }

const updateComment = (req,res)=>{
    const param = req.params.id
    const sql = `update comments SET title='${req.param.title}', message='${req.param.message}', 
    image_url='${req.param.image_url}' where idPost='${param}' `
    connection.query(sql, (err, result)=>{
        if(err){
            console.log('Ha ocurrido un error')
        }else{
            console.log('Posteo modificado')
            res.redirect('/posts/all')
        }
    })
   
}
const deleteComment = (req,res)=>{
    const param = req.params.idComment
    const sql = `delete from comments where idComment=${param}`
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
    // getPosts,
    // getPost,
    // getCreatePost,
    // getUpdatePost, 
    // getDeletePost,
    createComment, 
    updateComment, 
    deleteComment
}







// const express = require("express")
// const router = express.Router()
// const Controller = require('../controllers/posts')
// const mysql = require('mysql')
// const { mydatabase } = require('./config')
// const res = require("express/lib/response")

// const connection = mysql.createConnection(mydatabase)

// router.get(Controller.getPost, (req, res, next)=>{
//    res.render('/posts')
// })

// router.post(Controller.getPost, (req, res, next)=>{
//     const param = req.params.idPost
//     const sql = 'select * from posts where id = ?'
//     connection.query(sql, (err,result)=>{
//         if(err){
//             console.log('Ha ocurrido un error')
//         }else{
//             console.log('Posteo cargado')
//             res.redirect('/post', {posts: result})
//         }
//     })
// })





// router.get(Controller.getUpdatePost, (req, res, next)=>{
//     var sql = 'UPDATE post SET '
//     res.render('/posts')
//  })
// router.post('select posts.title AS post, images.url AS img FROM posts JOIN images ON posts.id = images.idPost', (err, result)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(result);
//         res.redirect('/post', {posts:result})
//     }
// })