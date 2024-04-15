import joi from 'joi';
import { objectIdValidation } from '../../middleWare/validation.js';


export const addNoteSchema = joi.object({
    title:joi.string().min(2).max(15).trim().required(),
    note:joi.string().required()
}).required()


export const noteIdSchema = joi.object({
    id:joi.custom(objectIdValidation)
})


export const updateNoteSchema = joi.object({
    id:joi.custom(objectIdValidation).required(),
    title:joi.string().min(2).max(15).trim(),
    note:joi.string()
}).required()