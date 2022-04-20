const { query } = require('express')
const connection = require('../connection')
const {mydatabase} = require('../config')



const Posts = (req, res)=>{   
    
    const sql = 'select * from `posts`'
    connection.query(sql, function(err, result){
        if(err){
            console.log('Ha ocurrido un error')
        }else{
            console.log(result)       
           // res.send(result)
            res.render('posts', {posts: result})   
        }       
    })  
}



const idPost = (req, res)=>{
   
    // const param = req.params.idPost
    res.render('posts')
    const param = req.params.idPost
    const sql = 'select * from posts where idPost = ?'
    connection.query(sql, [param],(err, result)=>{
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
       const data = req.body;
        const sql = 'insert into `posts` (Title, Summary, Created_at, Updated_at) VALUES (?,?,?,?)'
        
        connection.query(sql, [data.Title, data.Summary, data.Created_at, data.Updated_at], (err, result)=>{
            if(err){
                console.log('Ha ocurrido un error')
            }else{
               
                console.log('Posteo cargado')
                res.send(data)
                res.redirect('posts/all', {posts:result})
            }
        })
    }

const update = (req,res)=>{
    res.render('update-post')
    const param = req.params.idPost
    const sql = `update 'posts' SET (idPost, Title, Summmary,Created_at, Updated_at)  where ID='${param}' `
    connection.query(sql,  (err, result)=>{
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
    const sql = `delete from 'posts' where idPost=?`
    connection.query(sql, [param],(err, result)=>{
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



