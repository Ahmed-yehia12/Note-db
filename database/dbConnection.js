import mongoose from "mongoose";

export function dbConnection()
{
mongoose.connect(process.env.DATABASE_CONNECTION)
.then(()=>console.log('Mongo is running too ..'))
.catch((err)=>console.log("database error",err ))
}