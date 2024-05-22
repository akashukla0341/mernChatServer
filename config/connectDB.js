const mongoose = require('mongoose')

const DATABASE_URL = process.env.DATABASE_URL_MONGODB_URI;
const DATABASE_NAME = process.env.DATABASE_NAME;

const connectionDB = async () => {
    try {
        await mongoose.connect(`${DATABASE_URL}/${DATABASE_NAME}`);
        console.log("Database Connected...");
    } catch (error) {
        console.log(" Data Base Connection Error :: ", error);
    }
}

module.exports = connectionDB