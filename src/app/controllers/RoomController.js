const roomDAO = require("../DAO/roomDAO")

module.exports = class RoomController{
    index(req, res, next){
        // res.render('client/listRoom', {layout: 'main.handlebars'})
        // res.send('hello')
        var dao = new roomDAO()
        dao.GetRoom(req, res, next)
        
    }
    booking(req, res){
        res.send('booking')
    }
}