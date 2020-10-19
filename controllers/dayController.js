// controller for our days info, this should probably be changed to a far simpler name
// such as routes and follow best practice/

const router = require ("express").Router();
const MyDayInfo = require ("../schema/days_schema");

//  console.log ("In days_controller");

// List all dates
router.route ("/").get ((req, res) => {
    MyDayInfo.find()
        .then((daysInfo) => res.json(daysInfo))
        .catch((err) => res.status(400).json("Error: "+err));
});

// Add new date
router.route("/add").post((req, res) => {
    // console.log ("my Req: ", req.body);
    const day = req.body.day;
    const name = req.body.name;
    const newDay = new MyDayInfo ({day, name});
    newDay 
        .save()
        .then(() => res.json("Date Added"))
        .catch((err) => res.status(400).json("Error: " + err));
});


module.exports = router;