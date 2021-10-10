const express= require('express');
const router= express.Router();
const {requireSignin,adminMiddleware}= require('../common-middleware/index');
const { createProduct } = require('../controllers/product');
const shortid= require('shortid');                  // "shortid" is used to generate a unique and random set of alphabets. We are going to use it to give a unique name to the uploaded file
const multer= require('multer');                    // It is used for uploading files
const path= require('path');            // "path" is used to determine the paths of the folders in which you are working in or something like that

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

// upload.single(fieldname) => It stores the file (single file uploaded by the user) to the above defined location (i.e. "uploads/" folder).
// upload.array(fieldname) => It stores the files (multiple files uploaded by the user) to the above defined location (i.e. "uploads/" folder).
// "fieldname" => i.e. "productImage" acts as the "key" in postman
router.post('/product/create',requireSignin,adminMiddleware,upload.array('productImage'),createProduct);   


// router.get('/product/getcategories',getCategories);

module.exports = router;