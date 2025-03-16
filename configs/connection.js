const mongoose = require('mongoose');

async function connectMongoDb(url) {
    try {
        await mongoose.connect(url);
        console.log("✅ Connected to MongoDB");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        process.exit(1); // Exit the process if connection fails
    }
}

module.exports = connectMongoDb;
