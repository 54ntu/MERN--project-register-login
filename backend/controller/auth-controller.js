const {usermodel} = require('../models/user.models')
const bcrypt = require('bcrypt');

const register = async(req,res)=>{
    try {
        console.log("value we are getting from request is: ",req.body);
        const {firstname, lastname,email, password}= req.body
        if(!(firstname&&lastname&&email&&password)){
            return res.status(400).json({
                success:false,
                error:'all fields are required!!',
            })
        }

        const existingUser = await usermodel.findOne({email:email});
        
        if(existingUser){
            return res.status(400).json({
                success:false,
                error:'user already exists!!',
                
            })
        }
        
        const salt = await bcrypt.genSalt(12);
        const hashPassword = await bcrypt.hash(password,salt);
        const newUser = await usermodel.create({
            firstname:firstname,
            lastname:lastname,
            email:email,
            password:hashPassword,
        })
        return res.status(200).json({
            success:true,
            message:'new user created successfully.....',
            user: newUser,
            
        })


    } catch (error) {
        return res.status(500).json({
            success:false,
            error:"internal server error"
        })
        
    }
}




//signin function



const login= async(req,res)=>{
    try {
        const {email,password} = req.body
        if(!(email && password)){
            return res.status(400).json({
                success:false,
                error:'all fields are required!!'
            })
        }

        const existingUser = await usermodel.findOne({email:email})
        if(!existingUser){
            return res.status(400).json({
                success:false,
                error:'users not found!',
            })
        }

        const isMatched = await bcrypt.compare(password,existingUser.password);
       if(!isMatched){
                return res.status(400).json({
                    success:false,
                    error:'credentials not matched'
                })
        }

        return res.status(200).json({
            success:true,
            message:'user logged in successfully'
        });
        
    } catch (error) {
        return res.status(400).json({
            success:false,
            error:'internal server error'

        })
        
    }

}


module.exports = {
    register,
    login
}