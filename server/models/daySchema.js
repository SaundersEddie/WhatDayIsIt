import mongoose from 'mongoose';

const dayOfSchema = mongoose.Schema (
    {
        day: {
            type: Date,
            default: "",
            required: true
        },
        name: {
            type: String,
            default: "",
            required: true
        }
    }
)

const DayInfo = mongoose.model("DayInfo", dayOfSchema);
export default DayInfo;
// module.exports = DayInfo = mongoose.model("dayInfo", daysOfSchema)
