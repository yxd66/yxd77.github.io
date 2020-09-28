var mongoose = require('mongoose')
var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/test',{useMongoclient:true})

var studentSchema = new Schema({
	name:{
		type : String,
		//必须的
		required : true
	},
	age:{
		type : String
	},
	chinese:{
		type : String
	},
	math:{
		type : String
	},
	English:{
		type : String
	}
})



module.exports = mongoose.model('Student',studentSchema)