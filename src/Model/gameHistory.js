const mongoose = require("mongoose");

const game = new mongoose.Schema({
  teamName: String,
  month: String,
      vote: String,
      amount: Number,
      isContribute: Boolean,
      remarks: Number,
  totalBalance: String
});
const Game = mongoose.model("gamedatas", game,"gamedatas");
module.exports = Game;
//********
//'gamedatas' collection stores each team's month wise game data ( or game history data)
//'totalBalance' is determined using fetching 'balance' from 'teamSummary' collection and vote_results+remarks
//*********