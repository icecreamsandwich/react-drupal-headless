import React, { Component } from 'react';
import myContext from './Context';
import axios from 'axios';

//Import components
import CamundaProcess from './children/camunda/CamundaProcess';
import CamundaProcessDefinitions from './children/camunda/CamundaProcessDefinitions';

class MyConsumerA extends Component {
    render() {
        var context_ar = this.props.value;
        var pInstances = this.props.processInstances;
        if(pInstances){
            console.log(pInstances)
        }
        return (
            <div>
                {context_ar.state.routeTo === 'CamundaProcess' ? <CamundaProcess value={context_ar} pInstances={pInstances}/> : ""}
                {context_ar.state.routeTo === 'CamundaProcessDefinitions' ? <CamundaProcessDefinitions value={context_ar} /> : ""}
            </div>
        );
    }
}

class MyConsumer extends Component {
    state = {
        processInstances: ""
    }
    componentDidMount() {
        //all request processes goes here
        var host = "http://192.168.1.107:3002";
        axios.post(host + "/camunda/getProcessInstances")
            .then((responseData) => {
                this.setState({
                    processInstances: responseData.data
                });
            })
            .catch(err => console.log(err))
    }

    render() {
      //  console.log(this.state.processInstances)
        return (
            <div>
                <myContext.Consumer>
                    {
                        (context) => (
                            <React.Fragment>
                            {this.state.processInstances ? <MyConsumerA value={context} processInstances={this.state.processInstances}/> : ""}                               
                            </React.Fragment>
                        )
                    }
                </myContext.Consumer>
            </div>
        );
    }
}

export default MyConsumer;