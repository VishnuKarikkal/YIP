const express = require("express");
const gameRouter = express.Router();
const activatedMonth = require("../Model/activatedMonth");
const gameHistory = require("../Model/gameHistory");
const teamSummary = require("../Model/teamSummary");
var activeGameStatus = false;

gameRouter.get("/activeGame", function (req, res) {
  //to get all months that admin set to 'active' : from 'activemonths' collection
  const activatedMonths = []; //to hold all months activated

  activatedMonth
    .find()
    .then((months) => {
      months.forEach((month) => {
        if (month.activated) {
          //getting all 'activated' months
          activatedMonths.push(month.month);
        }
      });
      return activatedMonths;
    })
    .then((activatedMonths) => {
      if (activatedMonths.length > 0) {
        //if any months activated
        res.status(200).json({ message: "active", games: activatedMonths });
      } else {
        res.status(200).json({ message: "none" });
        //if none is active
      }
    });
});
gameRouter.get("/activeGameChange", function (req, res) {
  res.json({ reload: activeGameStatus });
});
gameRouter.get("/teamGameHistory", (req, res) => {
  let name = req.query.name; //team name

  gameHistory.find({ teamName: name }).then((data) => {
    if (data) {
      res.status(200).json({ message: "found", history: data });
    } else {
      res.status(200).json({ message: "none" });
    }
  });
});

gameRouter.post("/activate", (req, res) => {
  console.log(req.body.activateMonths);
  let months = req.body.activateMonths; // array of months
  months.forEach((month) => {
    activatedMonth.updateOne(
      { month: month },
      { $set: { activated: true } },
      (err, doc) => {
        console.log(doc);
      }
    );
  });
  activeGameStatus = true;
  setTimeout(function () {
    activeGameStatus = false;
  }, 5000);
  res.send({ message: "months activated!" });
  //to activate the months selected by the admin while clicking 'activate' btn
});
gameRouter.post("/vote", function (req, res) {
  teamSummary.findOne({ teamName: req.body.teamName }).then(
    (
      team //fetching finalBalance of the team
    ) => {
      let data = {
        teamName: req.body.teamName,
        vote: req.body.vote,
        month: req.body.month,
        totalBalance: team.balance,
      };
      gameHistory(data)
        .save()
        .then((value) =>
          activatedMonth.find({}).then(function (data) {
            res.json({
              activateMonths: data.activateMonths,
              message: "successfull",
            });
          })
        );
      //saving
    }
  );

  //to save the vote of a team into the database : to 'gameHistorys' collection
});
gameRouter.post("/publish", (req, res) => {
  gameHistory
    .findOneAndUpdate({ month: req.body.month }, req.body)
    .then((value) =>
      res.status(200).json({ message: "successfully published!" })
    );
  //to publish the votes of the teams to calculate the results {determines whether contribution or gain}
  //changes 'gameHistorys' collection(amount,isContribute,totalBalance) + 'teamSummary' collection(balance)
});
gameRouter.post("/addRemarks", (req, res) => {
  // console.log("reached here");
  console.log(req.body);
  const remarksArray = req.body.remarks;
  const bonus = req.body.bonus;
  const penalty = req.body.penalty;
  remarksArray.forEach((month) => {
      let northRemark = month.north ? bonus : penalty;
      let southRemark = month.south ? bonus : penalty;
      let eastRemark = month.east ? bonus : penalty;
      let westRemark = month.west ? bonus : penalty;
      //north
      updateRemarks('NORTH', month.month, northRemark).then(value => {
          //north
          updateRemarks('SOUTH', month.month, southRemark).then(value => {
              //south
              updateRemarks('WEST', month.month, westRemark).then(value => {
                  //west
                  updateRemarks('EAST', month.month, eastRemark).then(value => {
                      //east
                      console.log('all updated properly');
                  })
              })
          })

      });
  });
});

async function updateRemarks(team,month,remark){

  await gameHistory
      .findOneAndUpdate(
          { month: month, teamName: team },
          {
            remarks: remark,
          }
      )
      .then((value) =>  teamSummary.findOne({ teamName: team }).then((value) => {
        let balance = Number(value.balance);
        balance += Number(remark);
         updateTeamSummary(team,balance);

      } ));

}
async function updateTeamSummary(team,balance){
    await teamSummary.findOneAndUpdate(
        { teamName: team },
        { $set: { balance:balance } }
    )
        .then((value) => {
            console.log(value);
        });
}
gameRouter.get("/endGame", (req, res) => {
  //ends all games
  //clears gamedatas (removes all documents) ,
  //activatemonths gets resetted (activated is set to false) ,
  //teamsummary gets updated(balance is set to 200)
  gameHistory.deleteMany(
    { teamName: { $ne: null } },
    (
      err,
      data //clearing gamedatas
    ) => {
      if (err) {
        //if error - aborting
        res.json({ message: "none" });
      } else {
        console.log(data);
        console.log("gamedatas cleared!");
      }
    }
  );
  activatedMonth.updateMany(
    { activated: true },
    { $set: { activated: false } },
    (err, data) => {
      // resetting activatedmonths
      if (err) {
        res.json({ message: "none" });
      } else {
        console.log(data);
        console.log("activated months resetted!");
      }
    }
  );
  teamSummary.updateMany(
    { teamName: { $ne: null } },
    { $set: { balance: 200 } },
    (err, data) => {
      //resetting teamsummary
      if (err) {
        res.json({ message: "none" });
      } else {
        console.log(data);
        console.log("teamsummary resetted!");
      }
    }
  );

  activeGameStatus = true;
  setTimeout(function () {
    activeGameStatus = false;
  }, 5000);

});

module.exports = gameRouter;
