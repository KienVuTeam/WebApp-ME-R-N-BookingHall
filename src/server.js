const express = require('express')
const app = express()
const port =8000
const http = require('http')
const path = require('path')
var favicon = require('serve-favicon');
const router = require('./routes')
const  template = require('express-handlebars')
const pug = require('pug')
const bodyParser = require('body-parser')
const logger =require('morgan')
const conn = require('./database/mongodb_config2')

//set up dependencies default ------------

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
//new syntax--------------
// const route = require('./routes') !!!ko dung
// [shift+ f5 => reload icon]
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));
//static
app.use(express.static(path.join(__dirname, 'public')))
console.log(path.join(__dirname, 'public'))
//chuyen instance app(app == express) vao function trong file index route
router(app)
//connect DB
// conn.getConnection()

//setup template engine 
app.engine('handlebars', template.engine())
app.set('view engine', 'handlebars')
app.set('views',path.join(__dirname, 'resources/views'))
// template engine pug
// app.set('views', path.join(__dirname, 'resources/views'))
// app.set('view engine', 'pug')


//setup dependencies
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(logger('dev'));

//default
// console.log('path default: '+path.join(__dirname, 'resources/views'))
app.use('/first', (req, res)=>{
    res.send('xay dung app booking room')
})

//run server
http.createServer(app).listen(port)
console.log(`app running om port: http://localhost:${port}`)