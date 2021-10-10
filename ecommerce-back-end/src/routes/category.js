const express= require('express');
const router= express.Router();
const Category = require('../models/category');
const {requireSignin,adminMiddleware}= require('../common-middleware/index');
const {addCategory,getCategories} = require('../controllers/category');
const shortid= require('shortid');                  // "shortid" is used to generate a unique and random set of alphabets. We are going to use it to give a unique name to the uploaded file
const multer= require('multer');                    // It is used for uploading files
const path= require('path');                 // "path" is used to determine the paths of the folders in which you are working in or something like that


// The "storage" variable is copied from the documentation website of "multer"
// It is used to store the files (in "uploads" folder) that are being uploaded by user in a readable format
// If "multer.diskStroage()" is not applied, then all the uploaded files will get stored in a binary format which will be unreadable
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, path.join(path.dirname(__dirname),'uploads') );         // "uploads" is the name of the folder where I want to store the uploaded files
    },
    filename: function (req,file,cb){
        cb(null, shortid.generate() + '-' + file.originalname);
    }
});

const upload = multer({storage});

router.post('/category/create',requireSignin,adminMiddleware,upload.single('categoryImg'),addCategory);     // "requireSignin" middleware is used for verifying token and assigning "user" to "req" (req.user=user)
router.get('/category/getcategories',getCategories);

module.exports = router;