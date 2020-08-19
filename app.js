const express = require("express");
const path = require("path");
const cors = require('cors');
const checkAuth = require('./src/middleware/check-auth')
const bodyParser = require('body-parser');
const login=require('./src/routes/loginRouter')
const app = new express();
app.use(express.urlencoded({extended: true}))
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.set("view engine", "html");
app.set("views", "./src/views");

//app.set('views', __dirname + "/src/views");
app.use(cors());

//app.use('',api);
app.use(login,loginRouter)

app.listen(3232, () => {
    console.log("Server Listening On Port:3232");
});

//const port=process.env.PORT||5000;
