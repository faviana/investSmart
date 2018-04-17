const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Investor = new Schema({
  userNameId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  name: { type: String, required: false },
  budget: { type: Number, min: 0 , max: 10000000, required: false },
  percentage: {type: Number, min: 0, max: 100, required: false}, 

  propertiesID: [
    {
      type: Schema.Types.ObjectId,
      ref: "Properties"
    }
  ]
});

module.exports = mongoose.model("Investor", Investor);