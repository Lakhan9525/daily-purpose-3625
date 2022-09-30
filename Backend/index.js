const cookieSession = require('cookie-session');
const express=require('express');
const passport = require('passport');
const passportSetup=require('./passport');
const authRoute=require('./routes/auth.route');
const cors=require('cors');
const app=express();

app.use(cookieSession(
    {
        name:'timecamp',
        keys:['key_timecamp-1'],
        maxAge:24*60*60*100
    }
))
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
    origin:'http://localhost:3000',
    methods:'GET,POST,PUT,PATCH,DELETE',
    credentials:true
}))
app.use('/auth',authRoute);
app.listen('8080',()=>{
    console.log('Server is running at http://localhost:8080');
})