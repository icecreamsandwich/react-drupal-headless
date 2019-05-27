import React, { Component } from 'react';
import axios from 'axios';
import myContext from './Context';
import MyConsumer from './MyConsumer';
import CssLoader from './children/CssLoader';

class Myprovider extends Component {
  state = {
    routeTo: this.props.routeTo,
    processInstances: '',
    processDefinitions: '',
    Tasks: '',
  };

  componentDidMount() {
    //APi to get all the process pInstances
    var host = process.env.REACT_APP_HOST_URL + ':3002';
    axios
      .post(host + '/camunda/getProcessInstances')
      .then(responseData => {
        this.setState({
          processInstances: responseData.data,
        });
      })
      .catch(err => console.log(err));

    //APi to get all the process Definitions
    axios
      .post(host + '/camunda/getProcessDefinitions')
      .then(responseData => {
        this.setState({
          processDefinitions: responseData.data,
        });
      })
      .catch(err => console.log(err));

    //APi to get all camunda tasks
    axios
      .post(host + '/camunda/tasks')
      .then(responseData => {
        this.setState({
          Tasks: responseData.data,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (!this.state.processInstances && this.state.routeTo === 'CamundaProcess') { 
      return <CssLoader />;
    }
    else if (!this.state.processDefinitions && this.state.routeTo === 'CamundaProcessDefinitions') { 
      return <CssLoader />;
    }
    else if (!this.state.Tasks && this.state.routeTo === 'CamundaTasks') { 
      return <CssLoader />;
    }
  //  || !this.state.processDefinitions || !this.state.Tasks
    return (
      <div>
        <myContext.Provider
          value={{
            state: this.state,
          }}
        >
          {this.props.children}
          <MyConsumer />
        </myContext.Provider>
      </div>
    );
  }
}
export default Myprovider;

/* IncrementCounter: () =>{
    this.setState({
        counter : this.state.counter+1
    })
    var counterInt = parseInt(this.state.counter)
    localStorage.setItem("counter",counterInt)
},
ChangePersonGrade : () => {
    this.setState({
        person2_grade : 'C',
    })
},
makeitHot : () =>{
    if(this.state.cool === true) var coolBool= false;
    else coolBool = true;
    this.setState({
        cool : coolBool
    })
} */
