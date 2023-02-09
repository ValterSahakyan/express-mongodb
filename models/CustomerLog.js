import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CustomerLogSchema = new Schema({
        customer: {
            type: Schema.Types.ObjectId,
            ref: "Customer"
        },
        type: {
            type: Schema.Types.String,
        },
        text: {
            type: Schema.Types.String,
        },
        date: {
            type: Schema.Types.Date,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("CustomerLog", CustomerLogSchema);