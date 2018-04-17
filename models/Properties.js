const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Properties = new Schema({
  rent: { type: Number, min: 0 , max: 10000000, required: false  },
  hoa: { type: Number, min: 0, max: 10000000, required: false },
  propertyTax: {type: Number, min: 0, max: 10000000, required: false }, 
  miscellaneous: {type: Number, min: 0, max: 10000000, required: false }, 

  
});

module.exports = mongoose.model("Properties", Properties);