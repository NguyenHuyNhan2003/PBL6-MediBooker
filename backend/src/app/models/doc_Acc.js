const User = require('./user_Acc')

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Doctor_Schema = new Schema({
    verified:{
        type: Boolean,
        default: false
    },
    working_hour: {
        type: String
    },
    region: {
        type: String
    }
})

const Doctor = User.discriminator('Doctor', Doctor_Schema)

module.exports = Doctor