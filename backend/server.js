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

//Camunda API's
app.post('/camunda/getProcessInstances',function(req, res){
    var host = 'http://192.168.1.203:8080';
    var options ={
        method : 'GET',
        uri : host + '/engine-rest/process-instance',
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