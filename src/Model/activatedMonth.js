const mongoose = require("mongoose");
const database = "mongodb://localhost:27017/yip";

mongoose.connect(database, (err) => {
  if (err) {
    console.error("Error! " + err);
  } else {
    console.log("Connected to Database Successfully");
  }
});
// const connect = () => {
//     return mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost:27017/yip', { useNewUrlParser: true, useUnifiedTopology: true });
// };

const activemonth = new mongoose.Schema({
  month: String,
  activated: Boolean,
});
const Activemonth = mongoose.model("activemonth", activemonth);

module.exports = Activemonth;
//********
//'activemonths' collection stores all months and specifies whether admin 'activated'(true) or not(false)
//*********