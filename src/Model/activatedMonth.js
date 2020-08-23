const mongoose = require("mongoose");

const activemonth = new mongoose.Schema({
  month: String,
  activated: Boolean
});
const Activemonth = mongoose.model("activemonth", activemonth,'activemonths');

module.exports = Activemonth;
//********
//'activemonths' collection stores all months and specifies whether admin 'activated'(true) or not(false)
//*********
