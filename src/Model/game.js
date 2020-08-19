const mongoose=require("mongoose")

const game=new mongoose.Schema({
    teamName:String,
    month:[{input:String,amount:Number,isBonus:Boolean,isActive:Boolean,bonusOrPenalty:Number}],
    totalBalance:String,
    totalBonus:String,
    totalPenalty:String

})
const Game=mongoose.model('game',game);
module.exports=Game;

