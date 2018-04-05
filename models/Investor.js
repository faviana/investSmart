const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Investor = new Schema({
  name: { type: String, required: true },
  budget: { type: Number, min: 20000 , max: 10000000, required: true },
  percentage: {type: Number, min: 0, max: 100, required: true}, 
});

module.exports = mongoose.model("Investor", Investor);