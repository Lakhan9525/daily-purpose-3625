const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  project: String,
  task: String,
  note: String,
  entrydate: String,
  startTime: {type:String,required:true},
  endTime: {type:String,required:true},
  auth:
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userauth",
  },
});

const userData = mongoose.model("userProject", userschema);

module.exports = userData;