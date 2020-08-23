const mongoose = require("mongoose");
const database = "mongodb+srv://yamuni:yamuni@justinj.6njuj.gcp.mongodb.net/YIP_Yamuni?retryWrites=true&w=majority";

mongoose.connect(database, (err) => {
  if (err) {
    console.error("Error! " + err);
  } else {
    console.log("Connected to Database Successfully");
  }
});

const user = new mongoose.Schema({
  username: String,
  password: String,
});
const User = mongoose.model("user", user);
module.exports = User;
//********
//'users' collection stores each team's credentials which is "PRESET" by admin
//*********