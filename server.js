'use strict'

const express = require("express")
const app = express()
var mongoose = require("mongoose")
var bodyParser = require("body-parser")
const validator = require('validator')
var config = require("./config")
var memberModel = require("./model").memberModel
var port = Number(process.env.PORT || 7000)


mongoose.Promise = global.Promise

// mongoose.connect("mongodb://localhost/snsDB")
mongoose.connect(config.mongoDBUri)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// CORSを許可する
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET", "PUT", "POST", "DELETE")
  next();
});

app.use(express.static('public'))

app.get("/", function(req, res){
	res.sendFile(__dirname + "/index.html")
})

app.post("/register", function(req, res){


	if(!validator.isEmail(req.body.email)){
		res.send('Your email is invalid')
	}else{
		var member = new memberModel({
			name :req.body.name,
			degree:req.body.degree,
			grade:req.body.grade,
			schoolname:req.body.schoolname,
			email:req.body.email,
			phone:req.body.phone,
			youth_day:req.body.youth_day,
			union_day:req.body.union_day,
			union_women_day:req.body.union_women_day
		})
		memberModel.findOne({email:req.body.email},function(err,data){
			if(err){
				return console.error(String(err))
			}
			if(!data){
				member.save(function(err,users){
					res.status(200).send("OK")
				})
			}else{
				res.send('Your Email is already existed!')
			}
		})
	}

})

app.listen(port, function(){
	console.log("Running on 7000")
})