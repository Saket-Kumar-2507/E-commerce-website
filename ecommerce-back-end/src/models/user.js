const mongoose= require('mongoose');
const bcrypt = require('bcrypt');
// const salt= 10;

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    lastName: {
        type:String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    userName: {
        type:String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type:String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    hash_password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user','admin'],
        default: 'user'
    },
    contactNumber: {
        type:String
    },
    profilePicture: {
        type:String
    },

},{timestamps: true });


// the string " 'password' " written inside ".virtual()" can be used to call the function inside ".set()" . So whenever, you use the statement
// while signing up, `password: req.body.pswd` , so the value of `req.body.pswd` will be passed in the function inside ".set()" and hence the
// field "hash_password" in the "userSchema" will automatically get updated.
userSchema.virtual('password')                
.set(function(password){
    this.hash_password=  bcrypt.hashSync(password,10);
});

// the string " 'password' " written inside ".virtual()" can be used to call the function inside ".get()" and instead of setting some value
// to a field, it simply returns some value. In this case `firstname lastName`
userSchema.virtual('fullName')
.get(function(){
    return `${this.firstName} ${this.lastName}`;
});

userSchema.methods = {
    authenticate: function(password){
        return bcrypt.compareSync(password,this.hash_password);
    }
}

module.exports = mongoose.model('User',userSchema);