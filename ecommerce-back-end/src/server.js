const express= require('express');
const env= require('dotenv');
const app= express();
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');
const path= require('path');
const cors =require('cors');

// environment variable or constants
env.config();


// mongodb connection
// mongodb+srv://root:<password>@cluster0.v1uz4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.v1uz4.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}
).then(()=>{
    console.log("Database connected");
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());       // It is used to connect between "node" server and "react" server
app.use(express.json());
app.use('/public',express.static(path.join(__dirname,'uploads')));


app.use('/api',authRoutes);
app.use('/api',adminRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);
app.use('/api',cartRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`Server is runnning on port ${process.env.PORT}`);
});