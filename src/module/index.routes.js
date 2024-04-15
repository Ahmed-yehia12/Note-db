import authRouter from "./auth/auth.routes.js"
import noteRouter from "./note/note.routes.js"

export const bootstrap = (app)=>{
app.use('/api/v1/note' , noteRouter)
app.use('/api/v1/auth' , authRouter)


}