const express= require('express');
const router= express.Router();
const Category = require('../models/category');
const {requireSignin,userMiddleware}= require('../common-middleware/index');
const {addItemToCart} = require('../controllers/cart');

router.post('/user/cart/addtocart',requireSignin,userMiddleware,addItemToCart);     // "requireSignin" middleware is used for verifying token and assigning "user" to "req" (req.user=user)
// router.get('/user/cart/getcarts',getCarts);

module.exports = router;