'use strict'

const express = require("express")
const app = express()
var port = Number(process.env.PORT || 7000)

app.get("/", function(req, res){
	res.sendFile(__dirname + "/index.html")
})

app.listen(port, function(){
	console.log("Running on 7000")
})