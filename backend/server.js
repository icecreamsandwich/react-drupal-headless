var http = require('http');
var request = require('request');
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var dotenv = require('dotenv').config();

const port = 3002;
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//App entry point
app.get('/', function(req, res) {
  res.send(`app is listening on port ${port}`);
});

//Camunda API's //
//get all process instances
app.post('/camunda/getProcessInstances', function(req, res) {
  var host = process.env.REACT_APP_CAMUNDA_URL + ':8080';
  var options = {
    method: 'GET',
    uri: host + '/engine-rest/process-instance',
    headers: {
      'Content-type': 'application/json',
    },
  };
  request(options, function(err, response, body) {
    if (err) console.log(err);
    else res.send(body);
  });
});
// camunda process definitions
app.post('/camunda/getProcessDefinitions', function(req, res) {
  var host = process.env.REACT_APP_CAMUNDA_URL + ':8080';
  var options = {
    method: 'GET',
    uri: host + '/engine-rest/process-definition',
    headers: {
      'Content-type': 'application/json',
    },
  };
  request(options, function(err, response, body) {
    if (err) console.log(err);
    else res.send(body);
  });
});

// camunda tasks
app.post('/camunda/tasks', function(req, res) {
  var host = process.env.REACT_APP_CAMUNDA_URL + ':8080';
  var options = {
    method: 'GET',
    uri: host + '/engine-rest/task',
    headers: {
      'Content-type': 'application/json',
    },
  };
  request(options, function(err, response, body) {
    if (err) console.log(err);
    else res.send(body);
  });
});

//camunda tasks variables
app.post('/camunda/task_details/:task_id', function(req, res) {
  var task_id = req.params.task_id;
  //console.log(task_id);
  var host = process.env.REACT_APP_CAMUNDA_URL + ':8080';
  var options = {
    method: 'GET',
    uri: host + '/engine-rest/task/' + task_id + '/variables',
    headers: {
      'Content-type': 'application/json',
    },
  };
  request(options, function(err, response, body) {
    if (err) console.log(err);
    else res.send(body);
  });
});

//Resolve camunda task variables
app.post('/camunda/task/resolve/:task_id', function(req, res) {
  var task_id = req.params.task_id;
  var jsonVars = JSON.parse(req.body.json);
  var camundaVars = {
    variables: {},
  };
  jsonVars.map((item, index) => {
    var splitted = item.split(':');
    var key = splitted[0];
    var value = splitted[1];

    camundaVars.variables[key] = {
      value: value,
      type: 'String',
    };
  });

  var host = process.env.REACT_APP_CAMUNDA_URL + ':8080';
  auth =
    'Basic ' +
    new Buffer(
      process.env.REACT_APP_CAMUNDA_USER +
        ':' +
        process.env.REACT_APP_CAMUNDA_PASS
    ).toString('base64');
  var options = {
    method: 'POST',
    uri: host + '/engine-rest/task/' + task_id + '/resolve',
    headers: {
      'Content-type': 'application/json',
      Authorization: auth,
    },
    json: camundaVars,
  };
  request(options, function(err, response, body) {
    if (err) console.log(err);
    else res.send(body);
  });
});

//  Drupal APIs //
//Api to get all service names from drupal
app.post('/drupal/api/getAllServiceNames', function(req, res) {
  var host = process.env.REACT_APP_DRUPAL_URL;
  var options = {
    method: 'POST',
    uri: host + '/gasf/getAllServiceNames',
    headers: {
      'Content-type': 'application/json',
    },
  };
  request(options, function(err, response, body) {
    if (err) console.log(err);
    else res.send(body);
  });
});

//Api to get all proxy requests
app.post('/drupal/api/getAllProxyRequests', function(req, res) {
  var host = process.env.REACT_APP_DRUPAL_URL;
  var options = {
    method: 'POST',
    uri: host + '/gasf/getAllProxyRequests',
    headers: {
      'Content-type': 'application/json',
    },
  };
  request(options, function(err, response, body) {
    if (err) console.log(err);
    else res.send(body);
  });
});

//IP ranges overview api
app.post('/drupal/api/getAllIpRangesDetails', function(req, res) {
  var host = process.env.REACT_APP_DRUPAL_URL;
  var options = {
    method: 'POST',
    uri: host + '/gasf/getAllIpRangesDetails',
    headers: {
      'Content-type': 'application/json',
    },
  };
  request(options, function(err, response, body) {
    if (err) console.log(err);
    else res.send(body);
  });
});

// Vcenter details API
app.post('/drupal/api/getAllVcenters', function(req, res) {
  var host = process.env.REACT_APP_DRUPAL_ADMIN_URL;

  var auth =
    'Basic ' +
    new Buffer(
      process.env.REACT_APP_DRUPAL_USERNAME +
        ':' +
        process.env.REACT_APP_DRUPAL_PASS
    ).toString('base64');
  var options = {
    method: 'POST',
    uri: host + '/getAllVcenters',
    headers: {
      'Content-type': 'application/json',
      Authorization: auth,
    },
  };
  request(options, function(err, response, body) {
    if (err){
      console.log(err);
      alert(response);
      alert(err)
    } 
    else res.send(body);
  });
});

app.listen(port, function(req, res) {
  console.log(`app is listening on port ${port}`);
});
