const { MongoClient } = require('mongodb');
const faker = require("faker");

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'blogs_app';

async function main() {
    await client.connect();
    console.log('Mongodb connected...');

    const db = client.db(dbName);
    const collection = db.collection('users');






    // add some data in blogs_app databases
    // const userArray = []
    // for (var i = 0; i < 30; i++) {
    //     userArray.push({
    //         name: faker.name.findName(),
    //         email: faker.internet.email(),
    //         age: Math.ceil(Math.random() * 100),
    //         password: faker.datatype.string()
    //     })
    // }

    // await collection.insertMany(userArray);
    // const user = await collection.find({}).toArray();
    // console.log(user);


    // Filter user wrt age > 20
    // const ans = await collection.find({ age: { $gt: 20 } }).toArray()
    // console.log(ans);


    // Update user with age less than 18 to be minor
    // const minorAge = await collection.updateMany({ age: { $lt: 18 } }, { $set: { minor: true } });
    // console.log(minorAge);


    // Show all user whose age is less than 18
    // const displayAge = await collection.find({ age: { $lt: 18 } }).toArray()
    // console.log(displayAge);


    // show user above 18 and below 60(to achieve this delete below 18and delete above 60)
    // const deleteMinorAndSenior = await collection.deleteMany({
    //     $or: [
    //         { age: { $gt: 60 } },
    //         { age: { $lt: 18 } }
    //     ]
    // });


    // Display again
    // const displayAge = await collection.find({ age: { $lt: 18 } }).toArray()
    // console.log(displayAge);


    // Display All
    const ans = await collection.find({}).toArray()
    console.log(ans);


    return 'We are done successfully...';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());