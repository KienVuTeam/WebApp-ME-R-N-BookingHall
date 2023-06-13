const express = require('express')
const AdminAccount = require('../app/controllers/AdminAccount')
const router = express.Router()

router.get('/login/:slug', new AdminAccount().index)

router.get('/login', new AdminAccount().FormLogin)
router.post('/login', new AdminAccount().Login)
router.get('/register', new AdminAccount().CreateAccount)
router.post('/register', new AdminAccount().SaveAccount)

//default
router.get('/', function (req, res) {
    res.send('success')
})

module.exports = router