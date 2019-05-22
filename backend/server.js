var http = require('http');
var request = require('request');
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

const port = 3002;
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//App entry point 
app.get('/', function (req, res) {
    res.send(`app is listening on port ${port}`);
})

//api endpoint to node app slav1
app.post('/api', function (req, res) {
    let postData = {
        movie_title: 'Transcendence'
    }
    var host = 'http://localhost:5002';
    var options = {
        method: "POST",
        uri: host + "/api",
        body: JSON.stringify(postData),
        headers: {
            'Content-type': 'application/json'
        }
    }
    request(options, function (err, response, body) {
        if (err) {
            console.log(err)
        }
        else {
            //console.log('Response Headers :' + response && response.headers);
            res.send(body)
        }
    })
})

//api endpoint to node app slav2
app.post('/db/fetch', function (req, res) {
    var host = 'http://localhost:5003';
    var options = {
        method: 'POST',
        uri: host + '/db/fetch',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    request(options, function (error, response, body) {
        if (error) {
            console.error('error:', error);
        } else {
            //console.log('Response: Headers:', response && response.headers);
            // console.log(body);
            res.send(body);
            //res.json({success: true, data : body})
        }
    });
})

//api endpoint to node app slav2
app.post('/db/aggregate', function (req, res) {
    var host = 'http://localhost:5003';
    var options = {
        method: 'POST',
        uri: host + '/db/aggregate',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    request(options, function (error, response, body) {
        if (error) {
            console.error('error:', error);
        } else {
            //res.json({success: true, data : body})
            res.send(body)
        }
    });
})

//Api to recieve rest data from drupal
app.post('/drupal/api/getAllServiceNames',function(req, res){
    var host = 'http://192.168.1.202';
    var options ={
        method : 'POST',
        uri : host + '/gasf/getAllServiceNames',
        headers : {
            'Content-type' : 'application/json'
        }          
    }
    request(options, function(err, response, body){
        if(err) console.log(err);
        else res.send(body);
    })
    
});

app.listen(port, function (req, res) {
    console.log(`app is listening on port ${port}`);
});