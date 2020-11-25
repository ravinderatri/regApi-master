const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const userSchama = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email is Already Axist"],
        validator(value) {
            if (!validate.isEmail.apply(value)) {
                throw new Error("Invalid Email");
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        unique: [true, "Password is Already Axist"],
        validator(value) {
            if (!validate.isPassword.apply(value)) {
                throw new Error("Invalid Password");
            }
        }
    },
    confirmpassword: {
        type: String,
        required: true,
        minlength: 8,
        unique: [true, "Password is Already Axist"],
        validator(value) {
            if (!validate.is.apply(value)) {
                throw new Error("Invalid Password");
            }
        }
    },
    date: {
        type: Date,
        default: Date.now
    },
});
userSchama.pre('save', async function(next) {
if(this.password.isModified("password")){
    console.log(`the current password is ${this.password}`)
    this.password = await bcrypt.hash(this.password, 10);
    console.log(`the current password is ${this.password}`);
    this.confirmpassword=undefined;
}
    
    next();
});
module.exports = mongoose.model("User", userSchama);