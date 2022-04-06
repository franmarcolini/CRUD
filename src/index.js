const express = require('express')
const app = express()
const post = require('./routes/posts')
const path = require('path')
const connection = require('./connection') 
const postedMiddleware = require('./middlewares/posted') //para consultar datos en tabla posts
// const { engine } = require('express/lib/application')
 const { execPath } = require('process')
const { mydatabase } = require('./config')
const bodyParser = require('body-parser')
// const posts = connection.get('posts');
//settings
app.set('title', 'posteo')
app.set('port', 4000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
//middleware
//app.use(postedMiddleware.isPosted)
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:false}))


//rutas 
app.get('/', (req,res)=>{ //ruta inicial 
    res.render('index')
})
 
app.use('/posts', (post))

app.listen(app.get('port'), ()=>{
    console.log('Mi ' + app.get('title')+' esta corriendo en el puerto ' + app.get('port'))
})
