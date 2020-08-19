const mongoose=require("mongoose")

const game=new mongoose.Schema({
    teamName:String,
    activeMonth:Number,// index pointing to active month
    gameMonths:[{input:String,amount:Number,isBonus:Boolean,bonusOrPenalty:Number}],
    totalBalance:String,
    totalBonus:String,
    totalPenalty:String

})
const Game=mongoose.model('game',game);
module.exports=Game;

