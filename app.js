require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const playerRouter = require('./components/player/player.routes');
const teamRouter = require('./components/team/team.routes');

const app = express();

app.use(cors());
app.use(json());
app.use(morgan('dev'));

app.use('/api/player', playerRouter);
app.use('/api/team', teamRouter);

const port = process.env.EXPRESSPORT;
app.listen(port, () => {console.log(`App listening on port ${port}`)});