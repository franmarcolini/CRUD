const isPosted = (req, res, next)=>{
    let posted = true
    if(posted){
        next()
    }else{
        res.send('Error en el posteo')
    }
 }

exports.isPosted = isPosted