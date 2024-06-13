require('express-async-errors');

const express = require('express');
const path = require('path');

const app = express();

app.use(require('./middleware/request.logger'));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(require('cors')({ origin: '*' }));
app.use(express.json({}));
app.use(express.urlencoded({ extended: false }));
app.use(require('./routes'));

app.use((_req, res) =>
    require('./helpers').response.NOT_FOUND({
        res,
        message: require('./helpers/constant.helper').MESSAGE.INVALID_ROUTE,
    })
);

app.use(require('./middleware/error.handler'));

app.set('view engine', 'ejs');
app.set('views', 'views');

module.exports = app;
