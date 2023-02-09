import Customer from "../models/Customer.js";
import Location from "../models/Location.js";

export default async function CustomerSeeder(){
    if(!await Customer.find().count()){
        for (let i = 1; i <= 10; i++) {
            const location = await Location.findOne({name: `location ${i}`});
            const customer = await Customer.create({
                location: location._id,
                firstName: `firstName ${i}`,
                lastName: `lastName ${i}`,
                email: `test${i}@gmail.com`,
                phone: `phone ${i}`,
            });
            await location.updateOne(
                {name: `location ${i}`},
                { $push: { customers: customer._id } },
            );
            console.log(`Created customer ${i}`);
        }
    }else{
        console.log('Customers already added');
    }
}