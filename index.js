//Server Settings
const port = 8080;
const staticDir = __dirname + '/static';

//Initialize Express Requirements
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(staticDir + '/index.html');
});

app.listen(port, () => {
    console.log('Server has been started on ' + port);
});