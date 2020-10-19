// Our seed file for making the database
// Edwyn Saunders edwyn.saunders@outlook.com
// 12th October 2020

let mongoose = require("mongoose");
const { stringify } = require("querystring");
let db = require ("../models");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
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