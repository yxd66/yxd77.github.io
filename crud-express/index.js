
var express = require('express')

var router = require('./router.js')

var app = express()

var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.engine('html',require('express-art-template'))
app.use('/public/',express.static('./public/'))


app.use(router)

app.listen(8081,function(){
	console.log('running...')
})