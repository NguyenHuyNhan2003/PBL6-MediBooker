const user_Acc = require('../models/user_Acc')
const doc_Acc = require('../models/doc_Acc')

const express = require('express')
const jwt = require('jsonwebtoken')

require('dotenv').config()

class user_Controller{
    createToken = (_id) => {
        return jwt.sign({_id}, process.env.SECRET, {expiresIn: '1d'})
    }

    acc_Login = async(req, res) =>{
        console.log('Logged in')
    }

    acc_Signup = async(req, res) =>{
        console.log('Signed up')
    }
}

module.exports = new user_Controller