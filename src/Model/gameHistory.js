const mongoose = require("mongoose");

const gameHistory = new mongoose.Schema({
  teamName: String,
  gamesPlayed: [String], //array of strings pointing to game's _id
});
const GameHistory = mongoose.model("gameHistory", gameHistory);
module.exports = GameHistory;
