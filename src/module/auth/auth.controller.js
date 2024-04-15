import { userModel } from "../../../database/models/use.model.js";
import bcrypt from "bcryptjs";
import  jwt  from 'jsonwebtoken';

export const signUp =async (req, res , next)=>{

    const emailExist = await userModel.findOne({email:req.body.email})
    if(emailExist) return next(new Error("this email is already used", {cause:401}));
    if(req.body.rePassword !== req.body.password) return next(new Error("password don't match",{cause:401}))

    const user = new userModel(req.body)
    await user.save()
    res.json({
        success:true,
        message:"User created successfuly"
    })

}



export const logIn = async (req,res,next)=>{

    const isUser = await userModel.findOne({email:req.body.email})
    if(!isUser) return next(new Error("invalid email",{cause:401}))

    const match = bcrypt.compareSync(  req.body.password ,isUser.password)
    if(!match) return next(new Error("invalid password",{cause:401}))

    const token = jwt.sign({_id:isUser._id , role: isUser.role},process.env.TOKEN_SECRET)

    res.json({success:true , token})

}



export const updatePassword = async (req ,res ,next)=>{

    const user = await userModel.findById(req.user._id);
    if(!user) return next(new Error("user not logged !",{cause:401}))
    const match = bcrypt.compareSync(req.body.currentPassword , user.password);
    if(!match) return next(new Error("invalid current password ",{cause:401}));
    
     user.password = req.body.newPassword
     await user.save()
     res.json({
        success:true,
        message:"password updated successfuly",
        user
    })

}