//Server Settings
const port = 8080;
const staticDir = __dirname + '/static';

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

//Server Routes
app.get('/', (req, res) => {
    res.sendFile(staticDir + '/index.html');
});

app.post('/api', (req, res) => {

    let data = req.body;
    let light = new Control(data.ip);

    light.setColor(data.color.r, data.color.g, data.color.b).then(success => {
        if (success) {
            res.send('Success');
        } else {
            res.send('Failed');
        }
    });

})

app.listen(port, () => {
    console.log('Server has been started on ' + port);
});