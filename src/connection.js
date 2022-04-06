
const mysql = require('mysql')

const { mydatabase } = require('./config')

const connection = mysql.createConnection(mydatabase)


connection.connect((err, conn)=>{
//    console.log(err)
//    console.log(conn)
    if(err){
        console.log(err)
    }else{
            console.log('Conexion exitosa')
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
        
        return conn
    }
})

// insert = connection.query(`INSERT into Posts VALUES ('2','NodeJs Blog','Facts you should know about NodeJS','20220221')`)
// if(insert){
//     console.log("Tabla cargada con exito")
// }else{
//     console.log("Ha ocurrido un error")
// }


module.exports = connection
