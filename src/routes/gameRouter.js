const express = require("express");
const gameRouter = express.Router();
const activatedMonth=require('../Model/activatedMonth')
const gameHistory = require("../Model/gameHistory");
const teamSummary=require("../Model/teamSummary");


gameRouter.get("/activeGame", function (req, res) {
    //to get all months that admin set to 'active' : from 'activemonths' collection
  console.log("active games")
  let activatedMonths=[];
  activatedMonth.find().then((months)=>{
    months.forEach(month=>{
      if(month.activated){
        activatedMonths.push(month);
      }
    })
    return activatedMonths;
  }).then(activatedMonths => {
    if(activatedMonths.length>0) {
      res.send(activatedMonths);
    }else{
      res.send({message: "none"})
    }
  })


  //if none is active
});

gameRouter.post("/vote", function (req, res) {
    //to save the vote of a team into the database : to 'gameHistorys' collection
});
module.exports = gameRouter;
