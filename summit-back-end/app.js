const express = require('express');
const bodyParser = require('body-parser');

const summitsRoutes = require('./routes/summits-routes')
const HttpError = require('./models/http-error');

const app = express();

app.use(bodyParser.json());

app.use('/api/summits', summitsRoutes);

app.use((req, res,  next) => {
    const error = new HttpError('Could not find this route.', 404);
    return next(error);
});

app.use((error, req, res, next) => {
    if(res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message: error.message || 'An unknown error has occured.'})
});

app.listen(5000);