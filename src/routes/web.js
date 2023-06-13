const express = require('express')
const router = express.Router()
//import controllers define
const HomeController = require('../app/controllers/HomeController')
const RoomController = require('../app/controllers/RoomController')

//--------------------
//use controller from export class HomeController
router.get('/controller', new HomeController().run)
router.get('/list_room', new RoomController().index)

router.get('/booking_room', new RoomController().booking)

router.get('/', (req, res)=>{
    // res.render('admin/register_account', {layout : 'layout_admin.handlebars'})
    res.send('route web')
})


module.exports = router
