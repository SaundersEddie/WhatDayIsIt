import mongoose from 'mongoose';

const dayOfSchema = mongoose.Schema (
    {
        day: {
            type: String,
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
