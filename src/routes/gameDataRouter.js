// router for all data fetch operations from the game db
const express = require("express");
const gameDataRouter = express.Router();
const activatedMonth=require('../Model/activatedMonth')
const gameHistory = require("../Model/gameHistory");
const teamSummary=require("../Model/teamSummary");
const { json } = require("body-parser");

gameDataRouter.get("/teamStats", function (req, res) {
    //to get the stats of a team : from 'teamSummary' + 'gameHistory' collection
  console.log("team stats");
  let name=req.query.name;
  console.log(name);//team name : which team's data to be fetched
  let balance;   //team summary data : balance availabale
  let teamGame;  //game history data : array of objects [each month's game data]
  teamSummary.findOne({teamName:name}).then((data)=>  //getting balance
    {
        if(data)
        {
            console.log(data.balance);
            balance=data.balance;
        }
//fetching gamedata
        gameHistory.find({teamName:name}).then((data)=>
            {console.log(data)
                if(data!=null)
                {
                    res.send({message:"found!",balance:balance,history:data});
                }
                else
                {
                    res.send({message:"none",balance:balance});
                }
            });
    });
    
    
  });
gameDataRouter.get('/gameStats',(req,res)=>
{
    //fetching gamedata
    gameHistory.find().then((data)=>
    {   console.log(data)
        if(data!=null)
        {
            res.send({message:"found!",games:data});
        }
        else
        {
            res.send({message:"none"});
        }
    });
})
module.exports =gameDataRouter;
