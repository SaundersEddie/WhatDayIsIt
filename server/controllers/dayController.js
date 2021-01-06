// controller for our days info, this should probably be changed to a far simpler name
// such as routes and follow best practice/

// const router = require ("express").Router();
// const MyDayInfo = require ("../models/daySchema");

import DayInfo from '../models/daySchema.js'

//  console.log ("In days_controller");



// router.post ('/addday', async (req, res) => {
//     try {
//         console.log (req.data);
//         res.status(200).json({msg: "Add Day"});
//     } catch (err) {
//         res.status(500).json({error: err.message})
//     }
// });


// // Get all days that meet the criteris met in :day
// router.get ('/day:day', async (req,res) => {
//     try {
//         console.log (req.data)
//         res.status(200).json({msg: "List Day"});
//     } catch (err) {
//         res.status(500).json({error: err.message})
//     }
// });

export const getDay = async (req, res) => {
    try {
        res.status(200).json({"msg": req.body})
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}

export const getAllDays = async (req, res) => {
    try {
        res.status(200).json({"msg": req.body})
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}

export const addDay = async (req, res) => {
    try {
        res.status(200).json({"msg": req.body})
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}




// List all dates
// router.route ("/").get ((req, res) => {
//     MyDayInfo.find()
//         .then((daysInfo) => res.json(daysInfo))
//         .catch((err) => res.status(400).json("Error: "+err));
// });

// // Add new date
// router.route("/add").post((req, res) => {
//     // console.log ("my Req: ", req.body);
//     const day = req.body.day;
//     const name = req.body.name;
//     const newDay = new MyDayInfo ({day, name});
//     newDay 
//         .save()
//         .then(() => res.json("Date Added"))
//         .catch((err) => res.status(400).json("Error: " + err));
// });

// router.route("/find").get((req,res) => {
//     console.log (req.body.day);
//     MyDayInfo
//         .find({day: req.body.day})
//         .then((daysInfo) => res.json(daysInfo))
//         .catch((err) => res.status(400).json("Error: Data Not Found " + err));
//         });

            
// module.exports = router;
