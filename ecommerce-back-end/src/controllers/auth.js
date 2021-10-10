const express= require('express');
const router= express.Router();
const User= require('../models/user');
// const { validationResult } = require('express-validator');       //  for validation
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');
const saltRounds= 10;

exports.signup= (req,res)=>{   

    User.findOne({ email: req.body.email})
    .exec((error,user)=>{
        if(user)
        {
             return res.status(400).json({
                message: 'User already registered'
            });
        }
        else
        {
            const newUser = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,       // writing "password" will call the function inside "user.virtual.set()" method in file "models/user.js"
                userName: Math.random().toString()
            });
                
            newUser.save((error,data)=> {
                if(error)
                {
                    console.log(error);
                    return res.status(400).json({
                        message: 'Something went wrong'
                    });
                }
                if(data)
                { 
                    // res.send(data); 
                    res.status(201).json({
                        user: data
                    });
                }
            });
        }
    });
}


exports.signin = (req,res)=>{
    User.findOne({email: req.body.email})
    .exec((err,user)=>{
        if(err)
        { return res.status(400).json({err}); }

        if(user)
        {
            if(user.authenticate(req.body.password))            // writing "authenticate" calls the function inside "authenticate" method in file "models/user.js" and "req.body.password" is passed as an argument
            {
                const token= jwt.sign({_id: user._id, role: user.role},process.env.JWT_SECRET,{expiresIn: '1h'});    // jwt.sign(payload,secretKey,expiry time)
                const { _id, firstName, lastName , email, role, fullName }=  user;          // writing "fullName" will call the function inside "user.virtual.get()" method in file "models/user.js"
                res.status(200).json({
                    token,
                    user:{ _id, firstName, lastName , email, role, fullName }
                });
            }
            else
            {
                return res.status(400).json({
                    message:'Invalid password'
                });
            }
        }else{
            return res.status(400).json({message: "Email not registered with us/ Something went wrong" });
        }
    });
}


