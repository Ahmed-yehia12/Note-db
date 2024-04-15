import mongoose from "mongoose";
import bcrypt from "bcryptjs"
const schema = new mongoose.Schema({

    userName:{
        type:String,
        required:true,
        trim: true
    },

    email:{
        type: String ,
        trim: true ,
        required: true , 
        unique:true
    },

    password:{
        type: String ,
        required:true 
    },
    role:{
        type:String,
        enum:['user', 'admin'],
        default:'user'
    }




},{timestamps:true})

schema.pre("save", function(){
if(this.password) this.password = bcrypt.hashSync(this.password , 8) 
})

export const userModel = mongoose.model('user' , schema)