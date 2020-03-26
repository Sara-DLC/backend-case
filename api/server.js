const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const usersRouter = require('../users/users-router');
const casesRouter = require('../cases/cases-router');
const agenciesRouter = require('../agencies/agencies-router');


const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/users', usersRouter);
server.use('/api/cases', casesRouter);
server.use('/api/agencies', agenciesRouter);




server.get('/', (req, res) => {
    res.json({ api: 'Up and running!'});
});

module.exports = server;