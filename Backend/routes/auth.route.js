const router=require('express').Router();
const passport=require('passport');
router.get('/login/success',(req,res)=>{
    if(req.user){
        res.status(200).json({
            success:true,
            message:'Authentication successful',
            user:req.user,
            cookies:req.cookies
        })
    }
})
router.get('/login/failed',(req,res)=>{
    res.status(401).json({
        success:false,
        message:'Authentication failed'
    })
})
router.get('/logout',(req,res)=>{
    req.logout();
    res.redirect('http://localhost:3000/')
})
router.get('/google',passport.authenticate('google',{scope:['profile']}));
router.get('/google/callback',passport.authenticate('google',{
    successRedirect:'http://localhost:3000/timesheet',
    failureRedirect:'/login/failed'
}))
router.get('/facebook',passport.authenticate('facebook',{scope:['profile']}));
router.get('/facebook/callback',passport.authenticate('facebook',{
    successRedirect:'http://localhost:3000/timesheet',
    failureRedirect:'/login/failed'
}))
module.exports=router;