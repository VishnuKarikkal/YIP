const express = require("express");
const loginRouter = express.Router();
const user = require("../model/user");
const jwt = require("jsonwebtoken");
const jwtKey = "secret" || process.env.JWT_KEY;

loginRouter.get("/", function (req, res) {
  res.send('hi');
});
loginRouter.post("/", function (req, res) {
  console.log(req.body);
  console.log('here');
  let username=req.body.username.toUpperCase();
  let password=req.body.password;
  console.log(username)
  console.log(password)

  user
    .find({ username:username })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        //if user is not present in database
        console.log("not exits")
        return res.status(401).json({
          message: "Auth failed ",
        });
      } else {
       // checking wether password matches
          console.log('here',user[0]);
         if(password===user[0].password){
            const token = jwt.sign(
              {
                username: user[0].username,
              },
              jwtKey,
              {
                expiresIn: "1hr",
              }
            );
            console.log("authsuccessful");
            return res.status(200).json({
              message: "Auth successful",
              redirect: true,
              token: token,
                teamName:user[0].username,
            });
          } else {
            console.log(user[0].password)
            return res.status(401).json({
              message: "Auth failed wrong password",
            });
          }
        }})


        });


module.exports = loginRouter;
