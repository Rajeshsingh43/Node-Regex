const express=require("express");
const mongoose=require("mongoose");
const app=express()
const port=3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}))

const mongoUrl='mongodb+srv://rajesh:1234@cluster0.homys1y.mongodb.net/files'

mongoose.connect(mongoUrl)
.then(()=>{
    console.log("database connection is suucessfully");
})
.catch((err)=>{
    console.log("connection failed")
})

const userRoutes=require('./routers/user')
app.use('/users',userRoutes)


app.listen(port,()=>{
    console.log(`server is running on Port ${port}`)
})