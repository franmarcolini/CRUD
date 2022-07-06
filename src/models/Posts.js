const { query } = require('express')
const connection = require('../connection')




class data {
    idPost = Number;
    Title = String;
    Summary = String;
    Created_at = Date;
    Updated_at = Date;
}


const renderBlog = (req, res)=>{
    res.render('index');
}

const Posts =  (req, res)=>{    
    
    const sql = 'select * from posts'
    connection.query(sql, function(err, result){
        if(err){
            console.log('Ha ocurrido un error')
        }else{
            console.log(result)       
           
            res.render('posts', {data: result})   
        }       
    })  
}


const idPost = (req, res)=>{ 
   
    const data = req.params.idPost
    data = {        
        Title,
        Summary,
        Created_at,
        Updated_at
     }
    connection.query('select * from posts where idPost = ?', [data],(err, result)=>{
        if(err){
            console.log(err)
        }else{
            console.log('Redireccionando al posteo')
            res.render('update-post', {data : result[0]})
          //  res.send('/' + result)
        }
    })
}

const create = (req,res)=>{    
    res.render('create-post');
}

const save = (req,res)=>{

       // console.log(req.body)
        
       const {Title, Summary, Created_at, Updated_at} = req.body;
       data = {
           
           Title,
           Summary,
           Created_at,
           Updated_at
        }
               
     connection.query('INSERT INTO posts set ?', [data]);
        //res.send('received')
        res.redirect('/posts')

     }


const getUpdate = (req, res)=>{
   // const {Title, Summary, Created_at, Updated_at} = req.body;
       data = {           
           Title : req.body.Title,
           Summary : req.body.Summary,
           Created_at : req.body.Created_at,
           Updated_at : req.body.Updated_at
        }
        res.render('update-post');

}     
const update = (req,res)=>{
    res.render('update-post')
    // const data = req.body;
    const {Title, Summary, Created_at, Updated_at} = req.body;
       data = {           
           Title,
           Summary,
           Created_at,
           Updated_at
        }

    connection.query(`update 'posts' SET (idPost, Title, Summmary,Created_at, Updated_at)  where ID= ?`, [data.idPost],[data.Title],[data.Summary],[data.Created_at],[data.Updated_at] , (err, result)=>{
        if(err){
            console.log('Ha ocurrido un error')
        }else{
            console.log('Posteo modificado')
            res.send(result)
            res.redirect('/posts', {data : result})
        }
    })
   
}
 
const Gdelete = (req, res)=>{ 
     const sql = 'DELETE FROM posts WHERE idPost = ?';
     const id = req.params.idPost;
     console.log(idPost);
     connection.query(sql, [id],function(err, result){
         if(err) throw err;
         console.log(result);
        // if(err){
        //     console.log('Ha ocurrido un error ' + err)
        // }else{
            //console.log('Posteo Eliminado')
            res.redirect('/posts')
            
        // }
    })
    //  connection.query('delete from posts where id=?', [param],(err, result)=>{
    //     res.redirect('/posts', {data : result})
    // })
}

const deleteP = (req,res)=>{  
    const data = req.params.idPost;
     console.log(idPost);
  //  const sql = 'delete from posts where idPost=?'
    //     connection.query('delete from posts where idPost = ?', [idPost],(err, result)=>{
    //     if(err){
    //         console.log('Ha ocurrido un error ' + err)
    //     }else{
    //         console.log('Posteo Eliminado')
    //        res.send(result)
    //         res.redirect('/posts', {idPost : result})
    //     }
    // })
}

module.exports = {
    renderBlog,
    Posts,
    idPost,
    create,
    save,
    getUpdate,
    update, 
    Gdelete
   // deleteP
}



