const mongoose = require("mongoose");
const database = "mongodb://localhost:27017/yip";
mongoose.connect(database, (err) => {
  if (err) {
    console.error("Error! " + err);
  } else {
    console.log("Connected to Database Successfully");
  }
});

const game = new mongoose.Schema({
  teamName: String,
  month: String,
      vote: String,
      amount: Number,
      isContribute: Boolean,
      remarks: Number,
  totalBalance: String
});
const Game = mongoose.model("gameHistory", game);
module.exports = Game;
//********
//'gameHistorys' collection stores each team's month wise game data ( or game history data)
//'totalBalance' is determined using fetching 'balance' from 'teamSummary' collection and vote_results+remarks
//*********