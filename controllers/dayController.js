// controller for our days code

// const express=require("express");
const router = require ("express").Router();

const MyDayInfo = require ("../schema/days_schema");

console.log ("In days_controller");

// router.get ('/:id', (req,res) => {
//     console.log ("Here");
//     let condition = 'id =' + req.params.id;
    
// })

router.route("/add").post((req, res) => {
    console.log ("my Req: ", req.body);
    const day = req.body.day;
    const name = req.body.name;

    const newDay = new MyDayInfo ({day, name});

    newDay 
        .save()
        .then(() => res.json("Date Added"))
        .catch((err) => res.status(400).json("Error: " + err));
});


module.exports = router;