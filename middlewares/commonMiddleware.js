const express = require('express');
const path = require('path');
const methodOverride = require('method-override')

function applyMiddlewares(app) {
    app.set('views', path.join(__dirname, "../views"));
    app.set('view engine', 'ejs');
    app.use(express.urlencoded({ extended: true }));
    app.use(methodOverride("_method"));
}

module.exports = applyMiddlewares;
