//Server Settings
const port = 8080;
const staticDir = __dirname + '/static';
const lightIp = '192.168.1.2';

//Initialize Express Requirements
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

//Initialize Magic-Home
const {
    Control
} = require('magic-home');

let light = new Control(lightIp);

light.setColor(255, 10, 10).then(success => {
    if (success) {
        console.log('light is pink');
    } else {
        console.log('light is not pink');
    }
});
//Server Routes
app.get('/', (req, res) => {
    res.sendFile(staticDir + '/index.html');
});

app.listen(port, () => {
    console.log('Server has been started on ' + port);
});