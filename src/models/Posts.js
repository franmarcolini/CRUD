const { query } = require('express')
const connection = require('../connection')
const {mydatabase} = require('../config')



const Posts = (req, res)=>{   
    
    const sql = 'select * from `posts`'
    connection.query(sql, async(err, result)=>{
        if(err){
            console.log('Ha ocurrido un error')
        }else{
            console.log(result)       
            res.send(result)
            // res.render('posts', {posts: result})   
        }       
    })  
}



const idPost = (req, res)=>{
   
    // const param = req.params.idPost
    res.render('posts')
    const param = req.params.idPost
    const sql = `select * from 'posts'where idPost = '${param}'`
    connection.query(sql, async(err, result)=>{
        if(err){
            console.log(err)
        }else{
            console.log('Redireccionando al posteo')
            res.send('/posts/' + param)
        }
    })
}

const create = (req,res)=>{
//console.log(req.body)
        res.render('create-post')
        const data = req.body
        const sql = 'insert into `posts` SET ?'
        
        connection.query(sql, data, async(err, result)=>{
            if(err){
                console.log('Ha ocurrido un error')
            }else{
               
                console.log('Posteo cargado')
            //    res.send(result)
                res.redirect('/posts/all', {posts:result})
            }
        })
    }

const update = (req,res)=>{
    res.render('update-post')
    
    const sql = `update 'posts' SET 'idPost='${req.params.idPost} title='${req.params.title}', summary='${req.params.summary}', 
    created_at='${req.params.created_at}', updated_at='${req.params.updated_at}' where id='${req.params.idPost}' `
    connection.query(sql, async(err, result)=>{
        if(err){
            console.log('Ha ocurrido un error')
        }else{
            console.log('Posteo modificado')
            res.send(result)
            res.redirect('/posts/all')
        }
    })
   
}
const deleteP = (req,res)=>{
    res.render('delete-post')
    const param = req.params.idPost
    const sql = `delete from 'posts' where 'idPost'=${param}`
    connection.query(sql, async(err, result)=>{
        if(err){
            console.log('Ha ocurrido un error' +err)
        }else{
            console.log('Posteo Eliminado')
            res.send(result)
            res.redirect('/posts/all')
        }
    })
}

module.exports = {
    Posts,
    idPost,
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
