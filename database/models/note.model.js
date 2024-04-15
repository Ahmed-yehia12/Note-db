import mongoose, { Types } from "mongoose";

const schema = new mongoose.Schema({

    title:{
        type: String ,
        required:true,
        minLength:[3 ,'too short title'],
        trim:true
        
    },
    note:{
        type: String ,
        required: true,
        minLength:[3 ,'too short Desc']

    },
    user:{
        type:Types.ObjectId,
        required:true
    }
})


export const noteModel = mongoose.model('note' , schema)