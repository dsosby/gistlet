var express = require('express');
var process = require('process');

var port = process.env['PORT'] || 8020;

var app = express();
app.use(express.static('public'));
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});