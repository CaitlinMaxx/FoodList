const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mealType: {
    type: String,
    required: true
  },
  foodGroup: [String],
  cooked: {
    type: String,
  },
  
  ingredients: [String]
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
