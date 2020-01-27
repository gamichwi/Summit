const express = require('express');
const bodyParser = require('body-parser');

const summitsRoutes = require('./routes/summits-routes')

const app = express();

app.use(summitsRoutes);

app.listen(5000);
