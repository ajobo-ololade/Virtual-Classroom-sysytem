const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const userSchema = mongoose.Schema({
    fullName:{

    },
    email:{

    },
})
let studentModel = mongoose.model('student_tb',userSchema)
module.exports= studentModel