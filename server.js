import dbConnection from './db_connection/index.js';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { server_config } from "./config/index.js";
import LocationSeeder from "./seeders/LocationSeeder.js";
import CustomerSeeder from "./seeders/CustomerSeeder.js";
import CustomerLogSeeder from "./seeders/CustomerLogSeeder.js";
import opiniionTest from "./validators/opiniionTest.js";
import CustomerLog from "./models/CustomerLog.js";

dbConnection().then(() => {
    console.log('db connected');
    LocationSeeder().then(() => {
        CustomerSeeder().then(() => {
            CustomerLogSeeder();
        })
    })
});
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/opiniionTest',async (req, res) => {
    try {
        const {locationId, startDate, endDate} = req.body;
        const data = await opiniionTest.validateAsync({ locationId, startDate, endDate });
        const customerLogs = await CustomerLog.find({ date: { $gte: data.startDate, $lte: data.endDate } } ).populate({
            path: "customer",
            match: {location: locationId}
        }).exec((e, logs) => {
            const data = logs.filter(el => el.customer)
            res.send(data);
        });
    }catch (e) {
        res.send(e.message).status(400);
    }

})

app.listen(server_config.PORT, () => {
    console.log(`Example app listening on port ${server_config.PORT}`)
})