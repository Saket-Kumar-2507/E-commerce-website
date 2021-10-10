const express= require('express');
const {signup,signin} = require("../controllers/auth");
const { validateSignupRequest , validateSigninRequest , isRequestValidated } = require('../validators/auth');
const router= express.Router();


router.get('/signin',validateSigninRequest,isRequestValidated,signin);
router.post("/signup",validateSignupRequest,isRequestValidated,signup);          // results of this validation will be sent as an API. Refer to "exports.signup()" in file "controllers/auth.js"

// router.post('/profile',requireSignin,(req,res)=>{
//     res.status(200).json({
//         user: 'profile'
//     })
// });

module.exports = router;