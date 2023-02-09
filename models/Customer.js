import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Customer = mongoose.model("Customer", new Schema({
        location: {
            type: Schema.Types.ObjectId,
            ref: "Location"
        },
        customerLogs: [{
            type: Schema.Types.ObjectId,
            ref: "CustomerLogs"
        }],
        firstName: {
            type: Schema.Types.String,
        },
        lastName: {
            type: Schema.Types.String,
        },
        email: {
            type: Schema.Types.String,
            unique: true
        },
        phone: {
            type: Schema.Types.String,
        },
    },
    {
        timestamps: true,
    }
));

export default Customer;