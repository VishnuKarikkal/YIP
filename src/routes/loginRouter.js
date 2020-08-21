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
  let username=req.body.username;
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
          console.log('here',password,user[0].password);
         if(password===user[0].password){
            const token = jwt.sign(
              {
                username: user[0].name,
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
            });
          } else {
            console.log("failed")
            console.log(user[0].password)
            return res.status(401).json({
              message: "Auth failed wrong password",
            });
          }
        }})


        });

/*---------------------code to handle password change request------------------------*/
loginRouter.post("/changePassword", function (req, res) {
  user
    .find({ id: req.body._id })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth failed user not present in database",
        });
      } else {
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
          if (err) {
            return res.status(401).json({
              message: "Auth failed",
            });
          } else if (result) {
            const token = jwt.sign(
              {
                userId: user[0]._id,
                username: user[0].name,
              },
              process.env.JWT_KEY,
              {
                expiresIn: "1hr",
              }
            );
            console.log("authsuccessful");
            return res.status(200).json({
              message: "Auth successful",
              redirect: true,
              token: token,
            });
          } else {
            return res.status(401).json({
              message: "Auth failed wrong password",
            });
          }
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
module.exports = loginRouter;
