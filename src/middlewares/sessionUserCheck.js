module.exports = function sessionUserCheck(req,res,next){
    if(req.session.user){
        next()
    }else{
        res.redirect('/users/login')
    }
}