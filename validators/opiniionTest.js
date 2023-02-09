import Joi from "joi";
import Location from "../models/Location.js";

export default Joi.object({
    locationId: Joi.string().external(async (value) => {
        const location = await Location.findById(value);
        if(!location){
            throw new Error('Not found');
        }
    }),
    startDate: Joi.date(),
    endDate: Joi.date(),
})