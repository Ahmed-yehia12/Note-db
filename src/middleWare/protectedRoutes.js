import { userModel } from "../../database/models/use.model.js";
import { asyncHandler } from "../utlis/asyncHandler.js";
import jwt from "jsonwebtoken";

export const protectedRoute = asyncHandler(
    async (req ,res ,next )=>{

        let {token} =req.headers
        if(!token) return next(new Error("token not provided" , {cause:401}));

        let decoded = jwt.verify(token , process.env.TOKEN_SECRET)
        
        const user = await userModel.findById(decoded._id)
        if(!user) return next(new Error("user not found", {cause:404}))

        req.user= user
        next()
    }
)