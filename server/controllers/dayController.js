import DayInfo from '../models/daySchema.js'

export const getDay = async (req, res) => {
    try {
        res.status(200).json({"msg": req.body})
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}

export const getAllDays = async (req, res) => {
    try {
        DayInfo.find()
        .then ((daysInfo) => res.status(200).json(daysInfo));
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}

export const addDay = async (req, res) => {
    try {
        console.log (req.body);
        const { day, name } = req.body;
        const newDay = new DayInfo ({day, name})
        newDay
            .save()
            .then (() => res.status(200).json({msg: "Date has been added"}));
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
