import { noteModel } from "../../../database/models/note.model.js"

export const addNote = async(req ,res ,next)=>{

    const note = new noteModel(req.body)
    note.user =req.user._id
    await note.save()
    
     res.json({
        success:true,
        message:"note add successfuly"
    })

}


export const getAllNotes= async (req , res, next)=>{
    const notes = await noteModel.find()
    if(!notes) return next(new Error("Notes not found",{cause:404}))
    res.json({success:true , notes})
}



export const updateNote = async (req,res,next)=>{
    const note = await noteModel.findByIdAndUpdate(req.params.id , req.body ,{new:true})
    if(!note) return next(new Error("note not found",{cause:404}));
    res.json({success:true , note})

}


export const deleteNote = async (req,res,next)=>{
const note = await noteModel.findByIdAndDelete(req.params.id)
if(!note) return next(new Error('note not found', {cause:404}))
res.json({
    success:true , note
})
}


export const getLoggedUserNote =async (req ,res , next)=>{
    const notes = await noteModel.find({user:req.user._id})
    if(!notes) return next(new Error("notes not found ", {cause:404}));
    res.json({success:true , notes})
}