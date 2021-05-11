const express = require('express');
const morgan = require('morgan');

const apiRouter = require('./api');
const { client } = require('./db');

client.connect();
const PORT = 3000;

const server = express();

server.use(express.json());
server.use(morgan('dev'));
server.use('/api', apiRouter);

server.listen(PORT, () => {});