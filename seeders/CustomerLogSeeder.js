import Customer from "../models/Customer.js";
import CustomerLog from "../models/CustomerLog.js";

export default async function CustomerLogSeeder(){
    if(!await CustomerLog.find().count()){
        for (let i = 1; i <= 10; i++) {
            const date = new Date();
            const customer = await Customer.findOne({email: `test${i}@gmail.com`});
            const customerLog = await CustomerLog.create({
                customer: customer._id,
                type: `type ${i}`,
                text: `text ${i}`,
                date: date.setDate(date.getDate() - i - 1)
            });
            await customer.updateOne(
                {email: `test${i}@gmail.com`},
                { $push: { customers: customerLog._id } },
            );
            console.log(`Created customer log ${i}`);
        }
    }else{
        console.log('Customer Logs already added');
    }
}