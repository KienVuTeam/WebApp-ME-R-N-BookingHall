const conn = require('../../database/mongodb_config2')
const room = require('../models/room')

module.exports = class roomDAO{
    
    async GetRoom(req, res, next){
        var conn_get = conn
        await conn_get.getConnection
        // room.find({})
        // .then(data=>{
        //     res.json({data: data  })
        // })
        // .catch(next)

    }

}