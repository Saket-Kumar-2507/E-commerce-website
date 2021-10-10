const mongoose= require ('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
        trim: true
    },
    slug: {
        type: String, 
        required: true, 
        unique: true
    },
    price:{
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    offer:{
        type: Number
    },
    productPictures: [
        { img: { type: String } }
    ],
    reviews: [                                  // relation
        {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},         // This is refering to the 'User' schema that we have defined in "/models/user.js" file
            review: String
        }
    ],
    category:{                                 // relation
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category',                               // ---This is refering to the 'Category' schema that we have defined in "/models/category.js" file
        required: true
    },
    createdBy: {                               // relation
        type: mongoose.Schema.Types.ObjectId, 
        ref:'User',                                   // ---This is refering to the 'User' schema that we have defined in "/models/user.js" file
        required: true
    },
    updatedAt: Date
},{ timestamps: true});

module.exports= mongoose.model('Product',productSchema);