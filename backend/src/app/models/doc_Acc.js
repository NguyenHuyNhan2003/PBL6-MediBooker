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
    },
    proof: {
        type: Buffer,
        required: false
    }
})

Doctor_Schema.statics.add_Doctor = async function(email, password, username, phone, proof) {
    //validation
    if(!email || !password){
        throw Error('Email and password is required!')
    }
    
    if(!validator.isEmail(email)){
        throw Error('Invalid email!')
    }

    // if(!validator.isStrongPassword(password)){
    //     throw Error('Password not strong enough!')
    // }

    // if(!validator.isMobilePhone(phone, 'vi-VN')){
    //     throw Error('Invalid phone number!')
    // }

    const exists = await this.findOne({email})

    if(exists){
        throw Error('Email already in use!')
    }
    //hassing password
    const salt = await bcrypt.genSalt(10)
    const hass = await bcrypt.hash(password, salt)

    const doctor = await this.create({email, password: hass, username, phone, role: 'user', is_deleted: false,
                                     verified: false, working_hour: 'unknown', region: 'unknown', proof})

    return doctor
}

const Doctor = User.discriminator('Doctor', Doctor_Schema)

module.exports = Doctor