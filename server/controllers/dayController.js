import DayInfo from '../models/daySchema.js'

export const getDay = async (req, res) => {
    console.log ("In Get Day")
    try {
        console.log (req.params);
        await DayInfo
            .find ({_id: req.params.ourDay})
            .then ((daysInfo) => res.status(200).json(daysInfo));
        // res.status(200).json({"msg": req.params})
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}

export const getAllDays = async (req, res) => {
    console.log ("Get All Days");
    try {
        await DayInfo.find()
        .then ((daysInfo) => res.status(200).json(daysInfo));
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}

export const addDay = async (req, res) => {
    try {
        const { day, name } = req.body;
        const newDay = new DayInfo ({day, name})
        await newDay
            .save()
            .then (() => res.status(200).json({msg: "Date has been added"}));
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}
