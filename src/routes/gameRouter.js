const express = require("express");
const gameRouter = express.Router();
const activatedMonth=require('../Model/activatedMonth')
const gameHistory = require("../Model/gameHistory");
const teamSummary=require("../Model/teamSummary");

gameRouter.get("/activeGame", function (req, res) {
    //to get all months that admin set to 'active' : from 'activemonths' collection
  const activatedMonths=[]; //to hold all months activated

  activatedMonth.find().then((months)=>{
    months.forEach(month=>{
      if(month.activated){          //getting all 'activated' months
        activatedMonths.push(month.month);
      }
    })
    return activatedMonths;
  }).then(activatedMonths => {
    if(activatedMonths.length>0) {    //if any months activated
      res.status(200).json({message:"active",games:activatedMonths});
    }
    else
    {
      res.status(200).json({message: "none"})
      //if none is active
    }
  })
   
});
gameRouter.get("/teamGameHistory",(req,res)=>
{
  let name=req.query.name; //team name

  gameHistory.find({teamName:name}).then(data=>
    {
      if(data)
      {
        res.status(200).json({message:"found",history:data});
      }
      else
      {
        res.status(200).json({message:"none"});
      }
    })
})

gameRouter.post("/activate",(req,res)=>
{
  console.log(req.body.activateMonths);
  let months=req.body.activateMonths;// array of months
  months.forEach(month=>{
    activatedMonth.updateOne({month:month},{$set:{activated:true}},(err,doc)=>
    {
      console.log(doc);
    });
  })
  res.send({message:"months activated!"}); 
  //to activate the months selected by the admin while clicking 'activate' btn
});
gameRouter.post("/vote", function (req, res) {
   teamSummary.findOne({teamName:req.body.teamName}).then((team)=> //fetching finalBalance of the team
   {
     let data=
  {
    teamName:req.body.teamName,
    vote:req.body.vote,
    month:req.body.month,
    totalBalance:team.balance
  };
   gameHistory(data).save().then(value => res.status(200).json({message:'successfully voted!'}));
  //saving
   })
    //to save the vote of a team into the database : to 'gameHistorys' collection
});
gameRouter.post("/publish",(req,res)=>
{
  gameHistory.findOneAndUpdate({month:req.body.month},req.body).then(value => res.status(200).json({message:'successfully published!'}));
  //to publish the votes of the teams to calculate the results {determines whether contribution or gain}
  //changes 'gameHistorys' collection(amount,isContribute,totalBalance) + 'teamSummary' collection(balance)

});
gameRouter.post("/addRemarks",(req,res)=>
{

   console.log('reached here');
  console.log(req.body);
  const remarksArray=req.body.remarks;
  const bonus=req.body.bonus;
  const penalty=-(req.body.penalty);
  remarksArray.forEach(
      (month) => {
        let northRemark = (month.north) ? bonus : penalty;
        let southRemark = (month.south) ? bonus : penalty;
        let eastRemark = (month.east) ? bonus : penalty;
        let westRemark = (month.west) ? bonus : penalty;
        gameHistory.findOneAndUpdate({month: month.month, teamName: 'NORTH'}, {
          remarks: northRemark
        }).then(value => console.log(value));
          teamSummary.findOne({teamName: 'NORTH'}).then(value => {
              let northBalance = Number(value.balance);
                  northBalance += Number(northRemark);
              teamSummary.findOneAndUpdate({teamName: 'NORTH'}, {balance: northBalance})
                  .then(value => console.log('updated'));
          })
        gameHistory.findOneAndUpdate({month: month.month, teamName: 'SOUTH'}, {
          remarks: southRemark
        }).then(value => console.log(value));
              teamSummary.findOne({teamName: 'SOUTH'}).then(value => {
              let southBalance = Number(value.balance);
                  southBalance += Number(southRemark);
              teamSummary.findOneAndUpdate({teamName: 'SOUTH'}, {balance: southBalance})
                  .then(value => console.log('updated'));
          })
        gameHistory.findOneAndUpdate({month: month.month, teamName: 'WEST'}, {
          remarks: westRemark
        }).then(value => console.log(value));
          teamSummary.findOne({teamName: 'WEST'}).then(value => {
              let westBalance = Number(value.balance);
                  westBalance += Number(westRemark);
              teamSummary.findOneAndUpdate({teamName: 'WEST'}, {balance: westBalance})
                  .then(value => console.log(value));
          })
        gameHistory.findOneAndUpdate({month: month.month, teamName: 'EAST'}, {
          remarks: eastRemark
        }).then(value => console.log(value));
          teamSummary.findOne({teamName: 'EAST'}).then(value => {
              let eastBalance = Number(value.balance);
                  eastBalance += Number(eastRemark);
              teamSummary.findOneAndUpdate({teamName: 'EAST'}, {balance: eastBalance})
                  .then(value => console.log(value));
          })



      }
  );



  //to add bonus/penalty to the balances of each team whose votes are published
  //changes 'gameHistorys' collection(ramarks) + 'teamSummary' collection(balance)

})

module.exports = gameRouter;
