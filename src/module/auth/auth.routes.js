import { Router } from "express";
import { asyncHandler } from "../../utlis/asyncHandler.js";
import * as authController from './auth.controller.js'
import { validation } from "../../middleWare/validation.js";
import { changePasswordSchema, signInSchema, signUpSchema } from "./auth.schema.js";
import { protectedRoute } from './../../middleWare/protectedRoutes.js';
const authRouter = Router()


authRouter.post('/signUp' , validation(signUpSchema), asyncHandler(authController.signUp))
authRouter.post('/logIn' , validation(signInSchema), asyncHandler(authController.logIn))
authRouter.put('/changePassword' ,protectedRoute , validation(changePasswordSchema), asyncHandler(authController.updatePassword))




 






export default authRouter