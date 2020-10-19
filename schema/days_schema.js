// Our seed file for making the database
// Edwyn Saunders edwyn.saunders@outlook.com
// 12th October 2020

let mongoose = require("mongoose");
const Schema = mongoose.Schema;
// let db = require("../models/dayType");
// require('dotenv').config();

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// });

// console.log (uri);
//  console.log (db.DayInfo);

const myDaySeed = new Schema (
    {
        day:  {
          type: String,
          required: true,
          trim: true,
        },
        name: {
          type: String,
          required: true,
          trim: true,
        },
    },
    {
      timestamps: true,
    }
);

console.log (myDaySeed);

const MyDayInfo = mongoose.model("MyDayInfo", myDaySeed);
module.exports = MyDayInfo;
