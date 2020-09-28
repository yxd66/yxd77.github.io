var express = require('express')
var app = express()
var template = require('art-template')
app.engine('html',require('express-art-template'))
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.set('views','homeHtml')
var math=[
	{
		name:'serber',
		pinlun:'土狼,午饭吃啥'
	}
]
app.get('/',function(req,res){
	res.render('homePage.html',{
		math:math
	})
})
app.get('/write',function(req,res){
	res.render('write.html')
})
app.post('/pinlun',function(req,res){
	var message = req.body
	math.unshift(message)
	res.redirect('/')

})
app.listen(8081,function(){
	console.log('server is running')
})



// http.createServer(function(req,res){
// 	var parseObj = url.parse(req.url, true)
// 		parsename = parseObj.pathname
// 	if (parsename === '/') {
// 		fs.readFile('./homeHtml/homePage.html',function (err,data) {
// 			if (err) {
// 				return res.end('<h1>请求路径出错</h1>')
// 			}
// 		var aa = template.render(data.toString(),{
// 				math:math
// 			})
// 			res.end(aa)
// 		})
// 		} else if (parsename === '/write') {
// 			fs.readFile('./homeHtml/write.html',function (err,data) {
// 				if (err) {
// 				return res.end('<h1>请求路径出错</h1>')
// 			}
// 				res.end(data)
// 			})
// 		} else if (parsename === '/pinlun') {
// 			var message = parseObj.query
// 			math.unshift(message)
// 			res.statusCode = 302
// 			res.setHeader('Location','/')
// 			res.end()
// 		} else {
// 			return res.end('<h1>请求路径出错</h1>')
// 		}
	

// }).listen(8081,function(){
// 	console.log('server is running')
// })