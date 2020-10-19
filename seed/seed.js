// Our seed file for making the database
// Edwyn Saunders edwyn.saunders@outlook.com
// 12th October 2020

let mongoose = require("mongoose");
let db = require("../models/dayType");
require('dotenv').config();

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// console.log (uri);
console.log (db.DayInfo);

let myDaySeed = [
    {
        day: "Jan1",
        name: "New Years Day"

    },
    {
        day: "Aug20",
        name: "Coders Birthday"
    }
]

console.log (myDaySeed);

db.DayInfo.deleteMany({})
  .then(() => db.DayInfo.collection.insertMany(myDaySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
