const express = require("express");
const path = require("path");
const cors = require('cors');
const checkAuth = require('./src/middleware/check-auth')
const bodyParser = require('body-parser');
//const loginRouter=require('./src/routes/loginRouter');
//const gameRouter = require('./src/routes/gameRouter')
const app = new express();
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.set("view engine", "html");
app.set("views", "./src/views");
app.use(cors());
app.use(express.static("./public"));

const port=process.env.PORT||5000;
//app.use('/login',loginRouter);        //loginRoutes
//app.use('/game',gameRouter);          //gameRoutes
app.get('/',function(req,res){
    // res.send('hi');
    res.sendFile(__dirname+'/src/views/welcome.html');
})

app.listen(port, () => {
    console.log(`Server Listening On Port:${port}`);
});


