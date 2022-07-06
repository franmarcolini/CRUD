const express = require('express')
const app = express()
const path = require('path')
const connection = require('./connection') 
const postedMiddleware = require('./middlewares/posted') //para consultar datos en tabla posts
 const { execPath } = require('process')
const { mydatabase } = require('./config')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

//settings
app.set('title', 'posteo')
app.set('port', process.env.PORT || 4000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
//middleware
//app.use(postedMiddleware.isPosted)
app.use(express.static(path.join(__dirname, 'routes')));
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(morgan('dev'))
app.use(cors())

//rutas 
app.use(require('./routes/posts'));
app.listen(app.get('port'), ()=>{
            console.log('Mi ' + app.get('title')+' esta corriendo en el puerto ' + app.get('port'))
        })    


