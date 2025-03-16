const mongoose = require('mongoose');
const Chat = require('./models/chat');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
    console.log('Connected to DB');

    let allChats = [
        { sender: "Momtu", receiver: "Chirayu", message: "Maggi lete aana" },
        { sender: "Chirayu", receiver: "Momtu", message: "Thik Hai" },
        { sender: "Kalu", receiver: "Momtu", message: "Kal Class Aayega" },
        { sender: "Momtu", receiver: "Kalu", message: "Hmmmmmm" },
        { sender: "Anupam", receiver: "Momtu", message: "Ka re Motka" },
        { sender: "Anupam", receiver: "Chirayu", message: "Kaisan ba Chimrayu" }
    ];

    // Function to generate random date within the last 30 days
    function getRandomDate() {
        let daysAgo = Math.floor(Math.random() * 30); // Random number between 0 and 30
        let randomDate = new Date();
        randomDate.setDate(randomDate.getDate() - daysAgo);
        randomDate.setHours(Math.floor(Math.random() * 24)); // Random hour
        randomDate.setMinutes(Math.floor(Math.random() * 60)); // Random minutes
        randomDate.setSeconds(Math.floor(Math.random() * 60)); // Random seconds
        return randomDate;
    }

    // Add random timestamps to each chat
    allChats = allChats.map(chat => ({
        ...chat,
        createdAt: getRandomDate()
    }));

    // Insert chats with random timestamps
    await Chat.insertMany(allChats);
    console.log("Sample chats inserted with random timestamps!");

    mongoose.connection.close();
}

main().catch(err => console.log(err));
