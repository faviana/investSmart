const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Form = new Schema({
  rent: { type: Number, min: 20 , max: 10000000, required: true  },
  hoa: { type: Number, min: 20, max: 10000000, required: true },
  propertyTax: {type: Number, min: 20, max: 10000000, required: true }, 
  
});

module.exports = mongoose.model("Investor", Investor);