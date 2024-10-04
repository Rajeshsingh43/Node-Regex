const User=require("../models/user");

exports.createUser=async(req,res)=>{
    const data=req.body
    const {email}=req.body
    const existingUser=await User.findOne({email})
    if(existingUser){
        return res.status(400).json({message:"user already exists"})
    }
    console.log('>>>data>>..', data);
    const user=new User(data)
    await user.save();
    res.status(201).json(user)
}

exports.getAll=async(req,res)=>{
    const user=await User.find();
    res.status(201).json(user)
}