const express = require("express");
const path = require("path");
const checkAuth=require('./src/middleware/check-auth')
const bodyParser = require('body-parser')
const app = new express();
app.use(express.urlencoded({extended:true}))
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json());
app.set("view engine", "html");
app.set("views", "./src/views");




const port=process.env.PORT||5000;
