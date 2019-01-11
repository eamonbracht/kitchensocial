const mongoose = require("mongoose");
const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./data");

const API_PORT = process.env.PORT || 5000;

const app = express();
const router = express.Router();

// this is our MongoDB database
const dbRoute = "mongodb://eamonbracht:Smokebomb1@ds243054.mlab.com:43054/kitchensocial";

// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

// this is our get method
// this method fetches all available data in our database
router.get("/getData", (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// this is our update method
// this method overwrites existing data in our database
router.post("/updateData", (req, res) => {
  const { id, update } = req.body;
  Data.findOneAndUpdate(id, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// this is our delete method
// this method removes existing data in our database
router.delete("/deleteData", (req, res) => {
  const { id } = req.body;
  Data.findOneAndDelete(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// this is our create methid
// this method adds new data in our database
router.post("/putData", (req, res) => {
  let data = new Data();

  const { id, email
    , gender, age, student
    , dining_plan, income, 
    cook_per_week, delivery_per_week, buy_per_week, meal_of_day_restaurant,
  kind_meal_cooked_home, reason_dont_cook, reason_dont_cook_other, clean_ingred_cook_often,
cook_with_videos, cooking_social, pay_per_meal, spend_groceries
} = req.body;

  if ((!id && id !== 0) || !email) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.id= id;
  data.email= email;
  data.gender= gender;
  data.age= age;
  data.student= student;
  data.dining_plan= dining_plan;
  data.income= income;
  data.cook_per_week= cook_per_week;
  data.delivery_per_week= delivery_per_week;
  data.buy_per_week= buy_per_week; 
  data.meal_of_day_restaurant= meal_of_day_restaurant;
  data.kind_meal_cooked_home= kind_meal_cooked_home;
  data.reason_dont_cook= reason_dont_cook;
  data.reason_dont_cook_other= reason_dont_cook_other;
  data.clean_ingred_cook_often= clean_ingred_cook_often; 
  data.cook_with_videos= cook_with_videos;
  data.cooking_social= cooking_social;
  data.pay_per_meal= pay_per_meal;
  data.spend_groceries= spend_groceries;
  
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// append /api for our http requests
app.use("/api", router);

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));