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

const user = new mongoose.Schema({
  username: String,
  password: String,
});
const User = mongoose.model("user", user);

connect()
  .then(console.log("db connected"))
  .catch((e) => console.log(e));

module.exports = User;
