const mongoose = require('mongoose')
const room_schema = mongoose.Schema

const room = new room_schema({
    room_name: {type: 'string'},
    status:{type: 'string'},
    desc: {type: 'string'},
    // max_seat: {type: 'string'}
})

module.exports = mongoose.model('room', room)