
var fs = require('fs')
var Student = require('./student.js')

var express = require('express')

var router = express.Router()


//初始化界面
router.get('/index', function (req,res) {
	Student.find(function (err,student) {
		if (err){
			return res.status(500).send('server error.')
		}
		res.render('index.html',{
			student:student
		})
	})
})

//添加学生
router.get('/index/add',function (req,res) {
	res.render('add.html')
})

router.post('/index/add',function (req,res) {
	new Student(req.body).save(function (err) {
		if(err) {
			return res.status(500).send('server error.')
		}
		res.redirect('/index')
	})

})

//修改
router.get('/index/change',function (req,res) {
	Student.findById(req.query.id.replace(/"/g,''),function (err,student) {
		if(err) {
			return res.status(500).send('server error.')
		}
		res.render('change.html',{
			student:student
		})
	})
})

router.post('/index/change',function (req,res) {
	var id = req.body.id.replace(/"/g,'')
	console.log(typeof(id))
	Student.findByIdAndUpdate(id,req.body,function (err) {
		if(err){
			return res.status(500).send('server eroor.')
		}
		res.redirect('/index')
	})
})

//删除
router.get('/index/delete',function (req,res) {
	var id = req.query.id.replace(/"/g,'')
	Student.findByIdAndRemove(id,function (err) {
		if(err){
			return res.status(500).send('server eroor.')
		}
		res.redirect('/index')
	})
})

module.exports = router
