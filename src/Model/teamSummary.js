const mongoose = require("mongoose");
const database = "mongodb://localhost:27017/yip";
mongoose.connect(database, (err) => {
  if (err) {
    console.error("Error! " + err);
  } else {
    console.log("Connected to Database Successfully");
  }
});

const teamSummary = new mongoose.Schema({
  teamName: String,
  balance:Number
});
const TeamSummary = mongoose.model("teamdata", teamSummary);
module.exports = TeamSummary;
//********
//'teamdatas' collection stores each team's game summary data ( team-name + balance-available )
//*********