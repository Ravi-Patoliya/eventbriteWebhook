const app = require('express')();

// // app.use('/', require('./avatars'));
app.use('/webhook', require('./webhook'));

module.exports = app;
