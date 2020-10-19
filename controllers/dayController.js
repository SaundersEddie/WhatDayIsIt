// controller for our days code

const express=require("express");
const router = express.Router();

const theDay = require ("../seed/seed.js");

console.log ("In days_controller");

router.get ('/:id', (req,res) => {
    console.log ("Here");
    let condition = 'id =' + req.params.id;
    
})


module.exports = router;