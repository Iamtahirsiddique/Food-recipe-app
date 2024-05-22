import express from 'express'
import { PORT,MongoURL } from './config.js'
import cors from 'cors'
import mongoose from 'mongoose'
import { userRouter } from './routes/userRoute.js'
const app = express()

app.use(express.json())
app.use(cors());
app.use('/auth',userRouter);
app.listen(PORT,()=>{
    console.log(`Sever is litening at port ${PORT}`);
})

 mongoose.connect(MongoURL)
 .then(()=>{
    console.log("Connected to databae")
 }).catch((error)=>{
    console.log("Error connecting to database",error);
 })
