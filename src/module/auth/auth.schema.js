import joi from 'joi';


export const signUpSchema = joi.object({
    userName:joi.string().min(3).max(15) .required(),
    email:joi.string().email().required(),
    password:joi.string().pattern(new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")).required(),
    rePassword: joi.string().valid(joi.ref("password")).required()
}).required()


export const signInSchema = joi.object({

 email:joi.string().email().required(),
    password:joi.string().pattern(new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")).required()
}).required()



export const changePasswordSchema = joi.object({
    currentPassword: joi.string().required(),
    newPassword: joi.string().pattern(new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")).required()
}).required()