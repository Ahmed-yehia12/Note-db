import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import { bootstrap } from "./src/module/index.routes.js";
import dotenv from "dotenv";
import cors from "cors"
const app = express()
const port = 3000

dotenv.config()

await dbConnection()
app.use(cors())
app.use(express.json())

bootstrap(app)


app.get('/', (req ,res ,next)=>{
   res.json({success:true , message:"hello world"}) 
    
})

app.use((error , req , res , next)=>{
    const statusCode = error.cause
    return res.json({
        success:false,
        message:error.message,
        stack:error.stack
    })
})

app.listen( process.env.PORT || port ,()=> console.log('server is running'))