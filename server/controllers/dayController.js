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
        const ourDays = [31,29,31,30,31,30,31,31,30,31,30,31]
        var thisDay = day.substring(4);
        var thisMonth = ourMonths.indexOf(day.toLowerCase().substring(0,3))
        console.log (thisMonth, ourDays[thisMonth]);

        // This code was to pad with 0 if day entered is below 10, future enhancement
        // console.log ('thisDay: ', thisDay);
        // if (thisDay < 10) {
        //     console.log ("Less than 10");
        //     thisDay.padStart(2,"0")
        //     console.log (thisDay);
        // };
        if (day.substring(4) <= ourDays[thisMonth]) {
            if (ourMonths.includes(day.toLowerCase().substring(0,3))) {
                const newDay = new DayInfo ({day: day.toLowerCase(), name})
                    await newDay
                    .save()
                    .then (() => res.status(200).json({msg: "Date has been added"}));
            }
         } else {
            console.log ("Invalid Day Info Entered");
            res.status(404).json({msg: "Invalid Day Credentials"});
        }
     } 
     catch (err) {
        res.status(404).json({msg: err.message});
    }
}
