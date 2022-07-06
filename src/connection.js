
const mysql = require('mysql')
const { promisify }= require('util')
const { mydatabase } = require('./config.js')

const connection = mysql.createPool(mydatabase)
    
 connection.getConnection((err, conn)=>{
        if(err){
            console.log(err)
        }else{
                console.log('Conexion exitosa')
                return conn
        //     //     connection.query('CREATE TABLE Images ('+ 
        //     //    'idImage int not null primary key auto_increment,'+
        //     //     'url longblob,'+
        //     //     'idPost int not null,'+                       
        //     //     'foreign key (idPost) references Posts(idPost)'+
        //     //     ')', (error, res)=>{
        //     //         if(error){
        //     //             console.log(error)
        //     //         }else{
        //     //             console.log("Tabla creada con exito" + res)
        //     //         }                
        //     //     })
            
            
        }
    })

    
    connection.query = promisify(connection.query);
// insert = connection.query(`INSERT into Posts VALUES ('2','NodeJs Blog','Facts you should know about NodeJS','20220221')`)
// if(insert){
//     console.log("Tabla cargada con exito")
// }else{
//     console.log("Ha ocurrido un error")
// }


module.exports = connection
