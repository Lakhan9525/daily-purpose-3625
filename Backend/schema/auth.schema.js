const mongoose = require("mongoose");

const userAuthRoute = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String },
  data: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userProject",
    },
  ],
});

const userAuth = mongoose.model("userauth", userAuthRoute);

module.exports = userAuth;