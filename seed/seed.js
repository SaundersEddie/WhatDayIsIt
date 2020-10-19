// Our seed file for making the database
// Edwyn Saunders edwyn.saunders@outlook.com
// 12th October 2020

let mongoose = require("mongoose");
// let db = require ("../models");

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

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