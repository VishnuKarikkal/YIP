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
gameRouter.post("/activate",(req,res)=>
{
  //to activate the months selected by the admin while clicking 'activate' btn
  
});
gameRouter.post("/vote", function (req, res) {
    //to save the vote of a team into the database : to 'gameHistorys' collection
});
gameRouter.post("/publish",(req,res)=>
{
  //to publish the votes of the teams to calculate the results {determines whether contribution or gain}
  //changes 'gameHistorys' collection(amount,isContribute,totalBalance) + 'teamSummary' collection(balance)

});
gameRouter.post("/addRemarks",(req,res)=>
{
  //to add bonus/penalty to the balances of each team whose votes are published
  //changes 'gameHistorys' collection(ramarks) + 'teamSummary' collection(balance)

})
module.exports = gameRouter;
