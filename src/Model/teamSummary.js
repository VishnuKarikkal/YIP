const mongoose = require("mongoose");

const teamSummary = new mongoose.Schema({
  teamName: String,
  balance:Number
});
const TeamSummary = mongoose.model("teamdata", teamSummary);
module.exports = TeamSummary;
//********
//'teamdatas' collection stores each team's game summary data ( team-name + balance-available )
//*********