import mongoose from "mongoose";
const Schema = mongoose.Schema;
const Location = mongoose.model("Location", new Schema({
        name: {
            type: Schema.Types.String,
            required: true
        },
        customers: [{
            type: Schema.Types.ObjectId,
            ref: "Customer"
        }]
    },
    {
        timestamps: true,
    }
));
export default Location;