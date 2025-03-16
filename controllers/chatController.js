const Chat = require('/home/user/Chats/models/chat'); // Import Chat model

// Get all chats
async function getAllChats(req, res) {
    let chats = await Chat.find();
    res.render("allChats", { chats });
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
async function editChat(req, res) {
    let chatId = req.params.id;
    let chat = await Chat.findById(chatId);
    if (!chat) {
        return res.status(404).send('Chat not found');
    }   
    res.render('editChat', {chat});
}

//handle updation of chat
async function updateChat(req, res) {
    let chatId = req.params.id;
    let updatedChat = req.body;
    await Chat.findByIdAndUpdate(chatId, updatedChat);
    res.redirect('/chats');
}

//handle deletion on chat
async function deleteChat(req, res) {
    let chatId = req.params.id;
    await Chat.findByIdAndDelete(chatId);
    res.redirect('/chats');
}


module.exports = { getAllChats, renderNewChatForm, createNewChat, editChat, updateChat, deleteChat};
