const studentModel= require('../models/student.model')
const displaySignup=((req,res)=>{
    const newStudent = req.body
    studentModel.findOne({email:req.body.email},(err,result)=>{
        if (err) {
            console.log(`An error occured`,err)
            
        } else {
            if (result) {
                res.send({message:`Email already exist`,status:false})
                console.log('email already exist')
                
            } else {
                form.save((err)=>{
                    if (err) {
                        console.log(`an error occured in signing up`,err)
                        res.send({message:"Sign up failed, please try again later", status:false})
                        
                    } else {
                        res.send({message:`Registration Successful`,status:true})
                        
                    }
                })
                
            }
            
        }
    })
})
const displaySignin = ((req,res)=>{
    
})
module.exports={displaySignup,displaySignin}