const express= require('express');
const router= express.Router();
const jwt= require('jsonwebtoken');

exports.requireSignin= (req,res,next)=> {      // "Middleware" used in ".post('/profile',requireSignin) in the file "/routes/auth.js"
    // const token = req.headers.authorization;     // "req.headers" accesses the "headers" section (you can check the headers section in postman)
    // console.log(token);

    if(req.headers.authorization)
    {
        const token = req.headers.authorization.split(" ")[1];      // "authorization" has two values [Bearer token] in the form of array, 
        // so here we are accessing the second part i.e. "token" which is at index-1 in the array
        
        // verifying a jwb
        const user= jwt.verify(token,process.env.JWT_SECRET);
        // console.log(user);
        req.user= user;      //  we are attaching the user to request (req)
        next();
    }
    else
    { return res.status(400).json({message: "Authorization required"}); }
}

exports.userMiddleware = (req,res,next) => {
    if(req.user.role!='user')
    {
        return res.status(400).json({
            message: 'User access denied'
        });
    }
    next();
}

exports.adminMiddleware = (req,res,next) => {
    if(req.user.role!='admin')
    {
        return res.status(400).json({
            message: 'Access denied'
        });
    }
    next();
}