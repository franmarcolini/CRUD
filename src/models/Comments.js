const { query } = require('express')
const connection = require('../connection')


const createComment = (req,res)=>{
    //    console.log(req.body)
        const data = req.body
        const sql = `insert into comments SET ? `[data]
        
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
    createComment, 
    updateComment, 
    deleteComment
}







