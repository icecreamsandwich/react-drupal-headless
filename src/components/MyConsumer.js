import React, { Component } from 'react';
import myContext from './Context';
/* import axios from 'axios';
import CssLoader from './children/CssLoader'; */

//Import components
import CamundaProcess from './children/camunda/CamundaProcess';
import CamundaProcessDefinitions from './children/camunda/CamundaProcessDefinitions';
import Tasks from './children/camunda/Tasks';

class MyConsumerA extends Component {
  render() {
    var context_ar = this.props.value;
    var pInstances = context_ar.state.processInstances;
    var pDefinitions = context_ar.state.processDefinitions;
    var TaskList = context_ar.state.Tasks;
    /* var pInstances = this.props.processInstances;
        var processDefinitions = this.props.processDefinitions; */

    return (
      <div>
        {context_ar.state.routeTo === 'CamundaProcess' ? (
          <CamundaProcess value={context_ar} pInstances={pInstances} />
        ) : (
            ''
          )}
        {context_ar.state.routeTo === 'CamundaProcessDefinitions' ? (
          <CamundaProcessDefinitions
            value={context_ar}
            pDefinitions={pDefinitions}
          />
        ) : (
            ''
          )}
        {context_ar.state.routeTo === 'CamundaTasks' ? (
          <Tasks value={context_ar} TaskList={TaskList} />
        ) : (
            ''
          )}
      </div>
    );
  }
}

class MyConsumer extends Component {
  /* state = {
        processInstances: ""
    } */
  /* componentDidMount() {
        //APi to get all the process pInstances
        var host = process.env.REACT_APP_HOST_URL+':3002';
        axios.post(host + "/camunda/getProcessInstances")
            .then((responseData) => {
                this.setState({
                    processInstances: responseData.data
                });
            })
            .catch(err => console.log(err))

        //APi to get all the process Definitions
        axios.post(host + "/camunda/getProcessDefinitions")
            .then((responseData) => {
                this.setState({
                    processDefinitions: responseData.data
                });
            })
            .catch(err => console.log(err))
    } */

  render() {
    /* if(!this.state.processInstances || !this.state.processDefinitions){
            return(<CssLoader/>);
        } */
    return (
      <div>
        <myContext.Consumer>
          {context => (
            <React.Fragment>
              {/* {this.state.processInstances || this.state.processDefinitions ? <MyConsumerA value={context} processInstances={this.state.processInstances} 
                                processDefinitions={this.state.processDefinitions}/> : ""}      */}
              {/* {this.state.processDefinitions ? <MyConsumerA value={context} /> : ""}  */}
              <MyConsumerA value={context} />
            </React.Fragment>
          )}
        </myContext.Consumer>
      </div>
    );
  }
}

export default MyConsumer;
