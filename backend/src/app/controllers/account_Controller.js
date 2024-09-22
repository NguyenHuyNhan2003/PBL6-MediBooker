const User = require('../models/user_Acc')
const Doctor = require('../models/doc_Acc')

const express = require('express')
const multer = require('multer')
const jwt = require('jsonwebtoken')

require('dotenv').config()

const storage = multer.memoryStorage()

const upload = multer({
  storage: storage,
  fileFilter: (res, file, cb) =>{
    if(file.mimetype === 'application/pdf'){
      cb(null, true)
    }else{
      cb(new Error('Only PDF files are allowed'));
    }
  }
}).single('proof')

class user_Controller{
    create_Token = (_id) => {
        return jwt.sign({_id}, process.env.SECRET, {expiresIn: '1d'})
    }

    acc_Login = async(req, res) =>{
        // get info from body
        const {email, password} = req.body
        // get account
        try{
            const acc = User.login(email, password)

            const token = this.create_Token(acc._id)
            const role = acc.role
            
            if(acc instanceof doc_Acc){
                const verified = acc.verified
                res.status(200).json({email, token, role, verified})
            }else{
                res.status(200).json({email, token, role})
            }
        }catch(error){
            console.log(error.message)
            res.status(400).json({error: error.message})
        }
    }

    acc_Signup = async(req, res) =>{
        // get info from body
        const { email, password, username, phone, is_doc} = req.body
        const proof = req.file ? req.file.buffer : null
        const role = 'user'
        // add account
        try{
            if(is_doc){ //if doctor account
                const acc = Doctor.add_Doctor(email, password, username, phone, proof)
                res.status(200).json({email, token, role})
            }else{
                const acc = User.add_User(email, password, username, phone)
                res.status(200).json({email, token, role})
            }
        }catch(error){ //if user account
            console.log(error.message)
            res.status(400).json({error: error.message})
        }
    }
}

module.exports = new user_Controller