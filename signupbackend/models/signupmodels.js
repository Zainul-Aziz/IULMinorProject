const mongoose = require("mongoose");
const signupData = new  mongoose.Schema({
    username:
    {
    type:String,
    required:true
    },
    email:
    {
    type:String,
    required:true,
    // unique:true
    },
    mob:
    {
    type:Number,
    required:true,
    // unique:true
    },
    pass:
    {
    type:String,
    required:true
    },
    cpass:
    {
    type:String,
    required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});
module.exports = mongoose.model("mytable",signupData);