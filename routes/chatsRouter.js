const express = require('express');
const { getAllChats, renderNewChatForm, createNewChat, editChat, updateChat} = require('../controllers/chatController');

const router = express.Router();

// Routes using controllers
router.get('/', getAllChats);
router.get('/new', renderNewChatForm);
router.post('/', createNewChat);
router.get('/:id/edit', editChat);
router.put('/:id', updateChat);

//router.delete('/:id', deleteChat);

//router.route('/').get(getAllChats).post(createNewChat);
//can also use this syntax to write routes 
//if multiple methods are used on same route

module.exports = router;
