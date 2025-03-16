const express = require('express');
const port = 8080;

const chatRoutes = require('./routes/chat');
const connectMongoDb = require('./configs/connection'); // Import database connection
const applyMiddlewares = require('./middlewares/commonMiddleware'); // Middleware for common settings

const app = express();

// Apply Middlewares
applyMiddlewares(app);

// Connect to MongoDB
connectMongoDb('mongodb://localhost:27017/whatsapp');

// Home route
app.get('/', (req, res) => {
    res.send("Welcome to Home Page");
});

app.use('/chats', chatRoutes);

app.listen(port, () => {
    console.log(`🚀 Server is live on http://localhost:${port}`);
});
