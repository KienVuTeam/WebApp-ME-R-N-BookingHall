const mongoose = require('mongoose')
const instance = mongoose.Schema

//constructor--------------
// constructor() 
const account = new instance({
    fullname: { type: 'string', required: true },
    username: { type: 'string' },
    password: { type: 'string' },
    roles: { type: 'string' },
    // create_at: { type: Date, default: Date.now }
},{
    timestamps: true,
})

module.exports = mongoose.model('account',  account )