const route_web = require('./web')
const route_admin = require('./admin')
//Dinh nghia ra ham function tiep nhan cac route tu URL
function router(app) {
    //mapping routes with file web.js
    app.use('/client', route_web)
    app.use('/admin', route_admin)
    
    //route default !!! must put down
    app.use('/', (req, res) => {
        // res.send('route index first')
        res.render('client/listRoom', {title: 'ListRoom'})
        // res.render('client/temp')
    })
}

//return a function with param 'app'
module.exports = router


