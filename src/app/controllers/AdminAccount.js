//import libraries needly
//------
// const mongoose = require('mongoose')
// const M_accountAdmin2 = require('../models/account_admin2')
const mongodb_config = require('../../database/mongodb_config')
const account_adminDAO = require('../DAO/account_adminDAO')
module.exports = class AdminAccount {
    //temp
    index(req, res){
        res.render('admin/index', {layout: 'layout_admin', title: 'reload dashbaord'})
    }

    //[get] /admin/register
    CreateAccount(req, res, next) {
        var dao = new account_adminDAO
        dao.Create(req, res, next)
    }
    //[post] admin/register
    SaveAccount(req, res, next) {
        const conn = new mongodb_config
        conn.getConnection
        var dao = new account_adminDAO()
        dao.Save(req, res, next)
        // var dao = new DAO_accountAdmin()
        // console.log('in trong controller: '+req.body)
        // dao.Save(req, res, next)
    }
    //[POST]
    // Save2(req, res, next){
    //     // res.redirect('/admin/register')
    //     res.json(req.body)
    //     console.log('in ra: '+req.body)
    //     // var connect_save = new conn()
    //     // connect_save.getConnection
    //     // var conn_show = new conn()
    //     // conn_show.getConnection()
    //     // const account_craete = new M_accountAdmin2(req.body)
    //     // account_craete.save()
    //     res.send('save success')
    // }


    // async TestConnect(req, res, next) {
    //     // Schema = mongoose.Schema
    //     var uri = 'mongodb://127.0.0.1:27017/db_test_mongod'
    //     mongoose.connect(uri)
    //     //bay gio dung chema phai : mongoose.Schema
    //     const MyModel = mongoose.model('accounts', new mongoose.Schema({ fullname: String }        ))
    //     // MyModel.find(function(error, result){
    //     //     console.log(error)
    //     //     res.json(result)
    //     //----------------
    //     const Kienin4 = mongoose.model('kien', new mongoose.Schema({ fullname: String })  )

    //     const name = new Kienin4({fullname : 'kien vu lan 4'})
    //     name.save(function(err){
    //         if(err) return console.log('error!!!')
    //         // handleError(err)
    //         //save
    //     })
    //     // })
    //     // c2
    //     // await MyModel.createCollection()
    //     //---------end
    //     res.send('success')
    // }


    //[get] /admin/account
    GetAccount(req, res, next) {
        //
        var dao = new DAO_accountAdmin()
        dao.ShowAll(req, res, next)
    }

    //--------------------new 
    //Login system
    //[Get] admin/login
    FormLogin(req, res){
        res.render('admin/login', {layout: false, title:'login'})
    }
    //[post] admin/login
    Login(req, res){
        const user_check ='admin'
        const pass_check ='pass'
        const{username, password} = req.body
        console.log('username: '+req.body.username+ ' | password: '+req.body.password)
        if(user_check === username && pass_check === password){
            res.render('admin/index', {layout: 'layout_admin'})
        }else{
            return res.redirect(404,'/admin/login')
            // res.send('login fail | password or username fail')
            
        }
    }
}