const express = require('express');
const path = require('path');
const mainRouter = require('./routes/main.js');

const server = express();

server.use(express.static(path.join(__dirname, 'public')))

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.use('/', mainRouter);

server.listen('8000');