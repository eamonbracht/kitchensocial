const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    id: Number,
    email: String,
    gender: String,
    age: Number,
    student: String,
    dining_plan: String,
    income: String,
    cook_per_week: String,
    delivery_per_week: String,
    buy_per_week: String, 
    meal_of_day_restaurant: String,
    kind_meal_cooked_home: String,
    reason_dont_cook: String,
    reason_dont_cook_other: String,
    clean_ingred_cook_often: String, 
    cook_with_videos: String,
    cooking_social: String,
    pay_per_meal: String,
    spend_groceries: String,
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);