//import libraries needly
const conn = require('../../database/mongodb_config')
const DAO_accountAdmin = require('../DAO/account_adminDAO')
const M_accountAdmin = require('../models/account_admin')

//------

const mongoose = require('mongoose')
const M_accountAdmin2 = require('../models/account_admin2')
class AdminAccount2 {
    //temp
    index(req, res){
        res.send('hello')
    }

    //[get] /admin/register
    CreateAccount(req, res, next) {
        var dao = new DAO_accountAdmin()
        dao.Create(req, res, next)
    }
    //[post] admin/register
    SaveAccount(req, res, next) {
        // res.json(req.body)
        var dao = new DAO_accountAdmin()
        dao.Save(req, res, next)
        // var dao = new DAO_accountAdmin()
        // console.log('in trong controller: '+req.body)
        // dao.Save(req, res, next)
    }
    //[POST]
    Save2(req, res, next){
        // res.redirect('/admin/register')
        // res.json(req.body)
        console.log('in ra: '+req.body)
        // var connect_save = new conn()
        // connect_save.getConnection
        // var conn_show = new conn()
        // conn_show.getConnection()
        // const account_craete = new M_accountAdmin2(req.body)
        // account_craete.save()
        res.send('save success')
    }


    async TestConnect(req, res, next) {
        // Schema = mongoose.Schema
        var uri = 'mongodb://127.0.0.1:27017/db_test_mongod'
        mongoose.connect(uri)
        //bay gio dung chema phai : mongoose.Schema
        const MyModel = mongoose.model('accounts', new mongoose.Schema({ fullname: String }        ))
        // MyModel.find(function(error, result){
        //     console.log(error)
        //     res.json(result)
        //----------------
        const Kienin4 = mongoose.model('kien', new mongoose.Schema({ fullname: String })  )

        const name = new Kienin4({fullname : 'kien vu lan 4'})
        name.save(function(err){
            if(err) return console.log('error!!!')
            // handleError(err)
            //save
        })
        // })
        // c2
        // await MyModel.createCollection()
        //---------end
        res.send('success')
    }


    //[get] /admin/account
    GetAccount(req, res, next) {
        //
        var dao = new DAO_accountAdmin()
        dao.ShowAll(req, res, next)
    }

}

module.exports = new AdminAccount2