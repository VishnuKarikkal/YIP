const express = require("express");
const gameRouter = express.Router();
const gameHistory = require("../Model/gameHistory");
const teamSummary=require("../Model/teamSummary");
const activatedMonth=require("../Model/activatedMonth");

gameRouter.get("/activeGame", function (req, res) {
    //to get all months that admin set to 'active' : from 'activemonths' collection
  console.log("active games")  
  
  res.send({message:"none"})    //if none is active
});

gameRouter.post("/vote", function (req, res) {
    //to save the vote of a team into the database : to 'gameHistorys' collection
});
module.exports = gameRouter;
