const express = require('express');
const app = express();
app.use(express.json());


app.get('/health', (req, res) => {
    res.send({sucess: true, message: 'Server is healthy'});
});

module.exports = app;


// sending the request at /health api to check the health of the server. It will return a json response with success true and message 'Server is healthy'.