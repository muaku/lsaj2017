var mongoose = require('mongoose')
var Schema = mongoose.Schema

//student schema
var memberSchema = new Schema({
	name:String,
	grade:String,
	schoolname:String,
	email:String,
	phone: String,
	youth_day: String,
	unions_day: String,
	unions_women_day:String
})

module.exports.memberModel = mongoose.model('memberModel',memberSchema)