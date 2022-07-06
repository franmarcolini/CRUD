const { query } = require('express')
const connection = require('../connection')

class data {
    idImage = Number;
    URL = Blob;
    idPost = Number;    
}


const Images =  (req, res)=>{    
    
    const sql = 'select * from images'
    connection.query(sql, function(err, result){
        if(err){
            console.log('Ha ocurrido un error')
        }else{
            console.log(result)       
           
            res.render('images', {data: result})   
        }       
    })  
}


const createImage = (req,res)=>{
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

const updateImage = (req,res)=>{
    const param = req.params.id
    const sql = `update comments SET url='${req.param.url}'
    where idPost='${param}' `
    connection.query(sql, (err, result)=>{
        if(err){
            console.log('Ha ocurrido un error')
        }else{
            console.log('Posteo modificado')
            res.redirect('/posts/all')
        }
    })
   
}
const deleteImage = (req,res)=>{
    const param = req.params.idImages
    const sql = `delete from images where id=${param}`
    connection.query(sql, (err, result)=>{
        if(err){
            console.log('Ha ocurrido un error' +err)
        }else{
            console.log('Posteo Eliminado')
            res.redirect('/posts/all')
        }
    })
}





// const express = require("express")
// const router = express.Router()
// const Controller = require('../controllers/posts')
// const mysql = require('mysql')
// const { mydatabase } = require('./config')
// const res = require("express/lib/response")

// const connection = mysql.createConnection(mydatabase)



// router.delete(Controller.deletePost, (req, res, next)=>{
//     const param = req.params.idPost
//     const sql = 'delete from posts where id=?'
//     connection.query(sql, (err,result)=>{
//         if(err){
//             console.log('Ha ocurrido un error')
//         }else{
//             console.log('Posteo Eliminado')
//             res.redirect('/post', {posts: result})
//         }
//     })
// })


