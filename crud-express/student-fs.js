
var fs = require('fs')

var path = './public/students.json'

//获取学生信息
exports.find = function (callback){
	fs.readFile(path,'utf8', function (err, data) {
		if (err) {
			return callback(err)
		}
		callback(null,JSON.parse(data).student)
	})
}

//id获取学生
exports.idGet = function (ID,callback) {
	fs.readFile(path,'utf8', function (err, data) {
		if (err) {
			return callback(err)
		}
		var student = JSON.parse(data).student
		var idStu = student.find(function (num) {
			return num.id == ID
		})
		callback(null,idStu)
	})
}


//添加学生
exports.add = function (reqBody,callback){
	fs.readFile(path,'utf8', function (err, data) {
		if (err) {
			return callback(err)
		}
		//判断是否填入了数据
		if (reqBody.name == ''){
			return callback(null)
		}
		//将添加的数据保存到JSON文件中
		student = JSON.parse(data).student
		//判断json文件中是否有数据
		if (student.length == 0) {
			student[0] = reqBody
			student[0].id = 1
		} else{
			reqBody.id = student[student.length-1].id + 1
			student.push(reqBody)
		}
		
		var newData = JSON.stringify({
			student:student
		})
		//将JSON文件重新渲染到页面
		fs.writeFile(path, newData, function(err) {
			if(err) {
				return callback(err)
			}
			return callback(null)
		})
	})
}

//修改学生
exports.change = function (student,callback) {
	fs.readFile(path, 'utf8',function (err,data) {
		if(err){
			return callback(err)
		}
		var students = JSON.parse(data).student
		var idStu = students.find(function (num) {
			return num.id == parseInt(student.id)
		})
		for(var i in idStu) {
			idStu[i] = student[i]
		}
		var strData = JSON.stringify({
			student:students
		})
		fs.writeFile(path,strData,function(err) {
			if(err) {
				callback(err)
			}
			callback(null)
		})
	})
}

//删除学生
exports.delete = function(student,callback) {
	fs.readFile(path, 'utf8',function (err,data) {
		if(err){
			return callback(err)
		}
		student = parseInt(student.id)
		var students = JSON.parse(data).student
		var idStu = students.findIndex(function (num) {
			return num.id === student
		})
		students.splice(idStu,1)
		var strData = JSON.stringify({
			student:students
		})
		fs.writeFile(path,strData,function(err) {
			if(err) {
				callback(err)
			}
			callback(null)
		})
	})
}