const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const dayOfSchema = new Schema (
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

console.log ("Our Schema: ", dayOfSchema);

const DayInfo = mongoose.model('DayInfo', dayOfSchema)
module.exports = DayInfo