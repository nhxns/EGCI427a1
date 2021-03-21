'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    id: {
        type: String,
        Required: 'Please enter'
    },
    firstName: {
        type: String,
        Required: 'Please enter'
    },
    lastName: {
        type: String,
        Required: 'Please enter'
    },
    mobileNum: {
        type: String,
        Required: 'Please enter'
    },
    //missed left last_name
    email: {
        type: String,
    },
    facebook: {
        type: String,
    },
    imgUrl: {
        type: String,
    }
})

var LoginSchema = new Schema({
    username: {
        type: String,
        Required: 'Please enter'
    },
    password: {
        type: String,
        Required: 'Please enter'
    }
})

module.exports = mongoose.model('Contacts', UserSchema)
module.exports = mongoose.model('LoginUser', LoginSchema)