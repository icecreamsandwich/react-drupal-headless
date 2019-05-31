import React, { Component } from 'react'
import axios from 'axios';
import Tasks from './Tasks';

export default class TaskDetails extends Component {
    state = {
        // additionalVars: []
    }
    constructor(props) {
        super(props);
        var task_details = this.props.location.state;
        if (task_details) {
            this.state = {
                task_id: task_details.task_id || '',
                processInstanceId: task_details.processInstanceId || '',
                additionalVars: []
            };
        }
    }

    componentDidMount() {
        //axios post to get the task variables
        var host = process.env.REACT_APP_HOST_URL + ":3002";
        if (this.state && this.state.task_id) {
            axios.post(host + '/camunda/task_details/' + this.state.task_id)
                .then(responseData => {
                    this.setState({
                        taskVariables: responseData.data
                    });
                })
                .catch(err => console.log(err))
        }
    }

    addVariable(e) {
        e.preventDefault();
        this.setState({
            additionalVars: [...this.state.additionalVars, ""]
        })
    }
    handleKeyChange(e, index) {
        var keyItem = e.target.value;
        var currState = this.state.additionalVars;
        currState[index] = keyItem;
        this.setState({
            additionalVars: currState
        });
        console.log(this.state.additionalVars);
    }

    handleValueChange(e, index) {
        var valueItem = e.target.value;
        var currState = this.state.additionalVars;
        currState[index] = currState[index] + ":" + valueItem;
        this.setState({
            additionalVars: currState
        });
        console.log(this.state.additionalVars);
    }

    removeVariable(e, index) {
        e.preventDefault();
        this.state.additionalVars.splice(index, 1);
        this.setState({
            additionalVars : this.state.additionalVars
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        var host = process.env.REACT_APP_HOST_URL + ":3002";
        var json = JSON.stringify(this.state.additionalVars);
        console.log(json)
        if(!this.state.additionalVars[0]){
            alert("Please enter atleast one variable")
            return false;
        }
       
        if (this.state.task_id) {
            axios.post(host + '/camunda/task/resolve/' + this.state.task_id, {
                json: json
            })
                .then(responseData => {
                    if (responseData) alert("Variables Successfully updated")
                    //  alert("Variables Successfully updated")
                })
                .catch(err => console.log(err))
        }
        else alert("Task id is empty")
    }
    render() {
        if (!this.state || !this.state.taskVariables) {
            return (<Tasks />)
        }
        return (
            <div>
                <h2>Task Variables</h2>
                <React.Fragment>
                    <form
                        action=""
                        method="POST"
                        onSubmit={(e) => this.handleSubmit(e)}
                        className="form"
                    >
                        <table className="table">
                            <tr>
                                <td> network_sec_type</td>
                                <td>
                                    <input
                                        type="text"
                                        name="network_sec_type"
                                        value={this.state.taskVariables.network_sec_type.value}
                                        readOnly="readonly"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td> node_status</td>
                                <td>
                                    <input
                                        type="text"
                                        name="node_status"
                                        value={this.state.taskVariables.node_status.value}
                                        readOnly="readonly"
                                    />
                                </td>
                            </tr>

                            {(this.state.additionalVars && this.state.additionalVars.length > 0) ? this.state.additionalVars.map((item, index) => {
                                return (
                                    <React.Fragment>
                                        <tr>
                                            <td><input type="text" placeholder="enter variable name" onBlur={(e) => this.handleKeyChange(e, index)} /></td>
                                            <td><input type="text" placeholder="enter variable value" onBlur={(e) => this.handleValueChange(e, index)} /></td>
                                            <td><button onClick={(e) => this.removeVariable(e, index)}>Remove Variable</button></td>
                                        </tr>
                                    </React.Fragment>
                                )
                            }) : ""}
                            
                            <button onClick={(e) => this.addVariable(e)}> Add Variable</button>
                            <br />
                            <tr>
                                <td />
                                <td>
                                    <input type="submit" value="Submit" />
                                </td>
                            </tr>
                        </table>
                    </form>
                </React.Fragment>

            </div>
        )
    }
}
