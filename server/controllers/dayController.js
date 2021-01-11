import DayInfo from '../models/daySchema.js'

export const getDay = async (req, res) => {
    console.log ("In Get Day")
    try {
        console.log (req.params);
        await DayInfo
            .find ({_id: req.params.ourDay})
            .then ((daysInfo) => res.status(200).json(daysInfo));
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
    const ourMonths = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
    const { day, name } = req.body;
    try {
        if (ourMonths.includes(day.toLowerCase().substring(0,3))) {
            const newDay = new DayInfo ({day, name})
            await newDay
                .save()
                .then (() => res.status(200).json({msg: "Date has been added"}));
        }
        else {
            res.status(404).json({msg: "Invalid Month Name"});
        }
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}
