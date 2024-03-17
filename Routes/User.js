import express from 'express'
import User from '../Models/user.js'

let router=express()


router.post('/register',async(req,res)=>{
    try{
        console.log(req.body)
        let newUser=new User(req.body)
        console.log(newUser,'new user');
        let response=await newUser.save()
        res.json(response)
    }
    catch(e){
        res.json(e.message)
    }
})

router.post('/login',async (req,res)=>{
    console.log(req.body);
    let user=await User.findOne(req.body)
    console.log(user);
    res.json(user)
})


export default router