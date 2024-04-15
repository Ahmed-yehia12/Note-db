import { Router } from "express";
import * as noteController from './note.controller.js';
import { asyncHandler } from "../../utlis/asyncHandler.js";
import { protectedRoute } from "../../middleWare/protectedRoutes.js";
import { allowedTo } from "../../middleWare/roles.js";
import { validation } from "../../middleWare/validation.js";
import { addNoteSchema, noteIdSchema, updateNoteSchema } from "./note.schema.js";
const noteRouter = Router()




noteRouter.post('/',protectedRoute,validation(addNoteSchema), asyncHandler(noteController.addNote) );
noteRouter.get('/',protectedRoute, asyncHandler(noteController.getLoggedUserNote));
noteRouter.get('/allNotes',protectedRoute,allowedTo("admin"), asyncHandler(noteController.getAllNotes));
noteRouter.put('/:id', protectedRoute,validation(updateNoteSchema) ,asyncHandler(noteController.updateNote));
noteRouter.delete('/:id',protectedRoute,validation(noteIdSchema) , asyncHandler(noteController.deleteNote));











export default noteRouter