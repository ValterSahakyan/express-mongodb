import Location from "../models/Location.js";

export default async function LocationSeeder(){
    if(!await Location.find().count()){
        for (let i = 1; i <= 10; i++) {
            await Location.create({
                name: `location ${i}`
            });
            console.log(`Created location ${i}`);
        }
    }else{
        console.log('Locations already added');
    }
}