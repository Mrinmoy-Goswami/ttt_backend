const mongoose = require("mongoose")

const UserSchema  = new mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    occupation:{
        type:String
    },
    site:{
        type:String
    },
    followers:{
        type:Number
    },
    following:{
        type:Number
    },
    profilePic:{
        type:String
    },
    coverPic:{
        type:String
    }

})
module.exports = mongoose.model("User",UserSchema) 