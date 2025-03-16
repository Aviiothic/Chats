const Chat = require('../models/chat'); // Import Chat model

// Get all chats
async function getAllChats(req, res) {
    let chats = await Chat.find();
    res.render("AllChats", { chats });
}

// Render form to create a new chat
function renderNewChatForm(req, res) {
    res.render('newChat');
}

// Handle new chat creation
async function createNewChat(req, res) {
    let newChat = new Chat({
        sender: req.body.sender,
        receiver: req.body.receiver,
        message: req.body.message
    });
    await newChat.save();
    res.redirect('/chats');
}

//Handle editing of a chat
function editChat(req, res) {
    let chatId = req.params.id;
    let updatedChat = {
        sender: req.body.sender,
        receiver: req.body.receiver,
        message: req.body.message
    };
    res.render('editChat', { chatId, updatedChat });
}


module.exports = { getAllChats, renderNewChatForm, createNewChat, editChat };
