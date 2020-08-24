const express = require("express");
const path = require("path");
const cors = require("cors");
const checkAuth = require("./src/middleware/check-auth");
const bodyParser = require("body-parser");
const loginRouter = require("./src/routes/loginRouter");
const port = process.env.PORT || 5000;
const app = new express();

// Routing
const gameRouter = require('./src/routes/gameRouter');
const gameDataRouter = require('./src/routes/gameDataRouter');

app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.set("view engine", "html");
app.set("views", "./src/views");
app.use(cors());
app.use(express.static("./public"));

app.use('/userLogin',loginRouter);        //loginRoutes
app.use('/game',gameRouter);          //gameRoutes
app.use('/gameData',gameDataRouter);

app.get("/",checkAuth, function (req, res) {
  if (req.userData.username.toUpperCase() == "ADMIN") {
    res.sendFile(__dirname + "/src/views/adminDashboard.html");
  } else {
    res.sendFile(__dirname + "/src/views/welcome.html");
  }
});

app.get("/login", function (req, res) {

    res.sendFile(__dirname + "/src/views/login.html");
});
app.get("/scoreboard",function (req, res) {
    res.sendFile(__dirname + "/src/views/index.html");
});
app.get("/gameTeam",checkAuth, function (req, res) {
  if(req.userData.username.toUpperCase()=="ADMIN") {
    res.sendFile(__dirname + "/src/views/adminDashboard.html");
  }else {
    res.sendFile(__dirname + "/src/views/team.html");
  }
});
app.get("/gameAdmin",checkAuth, function (req, res) {
  console.log(req.userData);
  if(req.userData.username.toUpperCase()=="ADMIN") {
    res.sendFile(__dirname + "/src/views/adminDashboard.html");
  }
  else{
    res.send({message:"you are not allowed to view this page"});
  }
});

app.listen(port, () => {
  console.log(`Server running in localhost:${port}`);
});
