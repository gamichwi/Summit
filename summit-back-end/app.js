const express = require('express');
const bodyParser = require('body-parser');

const summitsRoutes = require('./routes/summits-routes')

const app = express();

app.use('/api/summits', summitsRoutes);

app.use((error, req, res, next) => {
    if(res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message: error.message || 'An unknown error has occured.'})
});

app.listen(5000);
