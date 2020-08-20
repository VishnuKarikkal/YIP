const mongoose = require("mongoose");

const game = new mongoose.Schema({
  teamName: String,
  activeMonth: Number, // index pointing to active month,
  playedMonths: [Number],
  gameMonths: [
    {
      input: String,
      amount: Number,
      isContribute: Boolean,
      isBonus: Boolean,
      bonusOrPenalty: Number,
    },
  ],
  totalBalance: String,
  totalBonus: String,
  totalPenalty: String,
});
const Game = mongoose.model("game", game);
module.exports = Game;
