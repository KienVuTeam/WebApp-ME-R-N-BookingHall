// const mongoose = require('mongoose');
const conn = require('../../database/mongodb_config')
const M_accountAdmin = require('../models/account_admin')
const account_admin2 = require('../models/account_admin2')
// const M_accountAdmin2 = require('../models/account_admin2')
const {mutipleMongooseToObject} = require('../utlils/mongoose')

module.exports = class account_adminDAO {
    
    // constructor() {

    // }
    //[Get] admin/register
    Create(req, res, next){
        res.render('admin/register_account', {layout: 'layout_admin', title: 'Register Account', success: false })
    }
    //
    Save(req, res, next){
        var conn_save = new conn()
        conn_save.getConnection()
        var M_account_admin = new account_admin2(req.body)
        M_account_admin.save()
        // var M_accountAdmin = new M_accountAdmin2(req.body)
        // M_accountAdmin.save()
        // res.redirect('/admin/register' )
        res.render('admin/register_account', {layout: 'layout_admin', success: true})

        //--------
        // const formData = req.body
        // var  doc = new M_accountAdmin2({username: 'kien', roles: 'admin', fullname: 'kien', password: 'pass', create_a: Date.now })
        // await doc.save(function (err) {
        //     if (err) return handleError(err);
        // })
        // console.log('in ra cai gi: '+formData)
        // res.send('Tao tai khoan thanh cong')
    }


    //method Show All
    Show(req, res, next) {
        var conn_show = new conn()
        conn_show.getConnection() //connect db
        M_accountAdmin.find({})
            .then(data => {
                res.render('admin/list_account', {
                    title: 'List Account',
                    data 
                })
            })
    }
    // ShowAll(req, res, next){
    //     var conn_showall = new conn()
    //     conn_showall.getConnection()
    //     // res.render('admin/list_account')
    //     M_accountAdmin2.find({})
    //     .then(data=>{
    //         res.render('admin/list_account', {
    //             title: 'List Account',
    //             data : mutipleMongooseToObject(data)
    //         })
            
    //     })
    //     .catch(next)
    // }
}