const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const testDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected. Database Name:", mongoose.connection.name);
        
        const collections = await mongoose.connection.db.listCollections().toArray();
        console.log("Collections in this DB:", collections.map(c => c.name));

        const count = await mongoose.connection.db.collection('heritagesites').countDocuments();
        console.log("Count in 'heritagesites':", count);
        
        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}
testDb();
