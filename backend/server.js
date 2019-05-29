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
app.use(bodyParser.urlencoded({
    extended: true
}));

//App entry point 
app.get('/', function (req, res) {
    res.send(`app is listening on port ${port}`);
})

//Api to recieve rest data from drupal
app.post('/drupal/api/getAllServiceNames', function (req, res) {
    var host = process.env.REACT_APP_DRUPAL_URL;
    var options = {
        method: 'POST',
        uri: host + '/gasf/getAllServiceNames',
        headers: {
            'Content-type': 'application/json'
        }
    }
    request(options, function (err, response, body) {
        if (err) console.log(err);
        else res.send(body);
    })

});

//Camunda API's //
//get all process instances
app.post('/camunda/getProcessInstances', function (req, res) {
    var host = process.env.REACT_APP_CAMUNDA_URL + ':8080';
    var options = {
        method: 'GET',
        uri: host + '/engine-rest/process-instance',
        headers: {
            'Content-type': 'application/json'
        }
    }
    request(options, function (err, response, body) {
        if (err) console.log(err);
        else res.send(body);
    })

});
// camunda process definitions
app.post('/camunda/getProcessDefinitions', function (req, res) {
    var host = process.env.REACT_APP_CAMUNDA_URL + ':8080';
    var options = {
        method: 'GET',
        uri: host + '/engine-rest/process-definition',
        headers: {
            'Content-type': 'application/json'
        }
    }
    request(options, function (err, response, body) {
        if (err) console.log(err);
        else res.send(body);
    })

});

// camunda tasks
app.post('/camunda/tasks', function (req, res) {
    var host = process.env.REACT_APP_CAMUNDA_URL + ':8080';
    var options = {
        method: 'GET',
        uri: host + '/engine-rest/task',
        headers: {
            'Content-type': 'application/json'
        }
    }
    request(options, function (err, response, body) {
        if (err) console.log(err);
        else res.send(body);
    })

});

//camunda tasks variables
app.post('/camunda/task_details/:task_id', function (req, res) {
    var task_id = req.params.task_id;
    //console.log(task_id);
    var host = process.env.REACT_APP_CAMUNDA_URL + ':8080';
    var options = {
        method: 'GET',
        uri: host + '/engine-rest/task/' + task_id + '/variables',
        headers: {
            'Content-type': 'application/json'
        }
    }
    request(options, function (err, response, body) {
        if (err) console.log(err);
        else res.send(body);
    })

});

//Resolve camunda task variables
app.post('/camunda/task/resolve/:task_id', function (req, res) {
    var task_id = req.params.task_id;
    var jsonVars = JSON.parse(req.body.json);
    console.log(JSON.stringify(jsonVars))
    var variables_ar = {
        "variables": {}
    };
    jsonVars.map((item, index) => {
        var splitted = item.split(":")
        var key = splitted[0];
        var value = splitted[1];
        variables_ar.variables[key] =
            {
                "value": value.toString(),
                "type": "String"    

            }
    })
    console.log(JSON.stringify(variables_ar))
    /* var buildStr = [];
    var variables = {};

    jsonVars.map((item, index) => {
        /* var splitter = item.split(":");
        var jsonStr = splitter[0]+': { "value": '+splitter[1]+', "type": "String" }'
        //buildStr['variables'].push(jsonStr);
        buildStr[0]['variables'].push({
            //variables : splitter[0]+': { "value": '+splitter[1]+', "type": "String" }'
            jsonStr
        }) 
        var splitter = item.split(":");
        var keyVal = splitter[0];
        var valueVal = splitter[1];
     
        variables = {
            variables : {
                key : keyVal,
                Val : valueVal
            }
        }
        buildStr.push(variables);
    })
    console.log(JSON.stringify(buildStr))

    var host = process.env.REACT_APP_CAMUNDA_URL + ':8080';
    auth = "Basic " + new Buffer(process.env.REACT_APP_CAMUNDA_USER + ":" + process.env.REACT_APP_CAMUNDA_PASS).toString("base64"); */
    /* var json = {
        "variables":
        {
            "reactVariable2": { "value": "reactVariable23444", "type": "String" },
        }
    }; */
    var host = process.env.REACT_APP_CAMUNDA_URL + ':8080';
    auth = "Basic " + new Buffer(process.env.REACT_APP_CAMUNDA_USER + ":" + process.env.REACT_APP_CAMUNDA_PASS).toString("base64");
    var options = {
        method: 'POST',
        uri: host + '/engine-rest/task/' + task_id + '/resolve',
        headers: {
            'Content-type': 'application/json',
            'Authorization': auth
        },
        json: JSON.stringify(variables_ar)
    }
    request(options, function (err, response, body) {
        if (err) console.log(err);
        else res.send(body);
    })
});

app.listen(port, function (req, res) {
    console.log(`app is listening on port ${port}`);
});