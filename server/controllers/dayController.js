import DayInfo from '../models/daySchema.js'

export const getDay = async (req, res) => {
    try {
        await DayInfo
            .find ({day: req.params.ourDay.toLowerCase()})
            .then ((daysInfo) => res.status(200).json(daysInfo));
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}

export const getAllDays = async (req, res) => {
    try {
        await DayInfo.find()
        .then ((daysInfo) => res.status(200).json(daysInfo));
    } catch (err) {
        res.status(404).json({msg: err.message});
    }
}

export const addDay = async (req, res) => {
    const { day, name } = req.body;
    try {
        const ourMonths = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
        if (ourMonths.includes(day.toLowerCase().substring(0,3))) {
            const newDay = new DayInfo ({day: day.toLowerCase(), name})
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
