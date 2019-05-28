import React, { Component } from 'react'
import axios from 'axios';
import Tasks from './Tasks';

export default class TaskDetails extends Component {
    constructor(props) {
        super(props);
        var task_details = this.props.location.state;
        if (task_details) {
            this.state = {
                task_id: task_details.task_id || '',
                processInstanceId: task_details.processInstanceId || '',
            };
        }
    }

    componentDidMount() {
        //axios post to get the task variables
        var host = process.env.REACT_APP_HOST_URL + ":3002";
        if(this.state && this.state.task_id){
            axios.post(host + '/camunda/task_details/' + this.state.task_id)
            .then(responseData => {
                this.setState({
                    taskVariables: responseData.data
                });
            })
            .catch(err => console.log(err))
        }       
    }

    handleChange = (e) => {
        var name = e.target.name;
        this.setState({
        [name]: e.target.value,
        });
    }
    handleSubmit = e => {
        e.preventDefault();
        var host = process.env.REACT_APP_HOST_URL + ":3002";
        
        if(this.state.task_id){
            axios.post(host + '/camunda/task/resolve/' + this.state.task_id)
            .then(responseData => {
              //  if(responseData) alert("Variables Successfully updated")
                alert("Variables Successfully updated")
            })
            .catch(err => console.log(err))
        }       
    }
    render() {
        if (!this.state || !this.state.taskVariables) {
            return (<Tasks />)
        }
        return (
            <div>
                <h2>Task Variables</h2>
                <form
                    action=""
                    method="POST"
                    onSubmit={this.handleSubmit}
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
                                    onChange={e => {
                                        this.handleChange(e);
                                    }}
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
                                    onChange={e => {
                                        this.handleChange(e);
                                    }}
                                    readOnly="readonly"
                                />
                            </td>
                        </tr>                       
                        <tr>
                            <td />
                            <td>
                                <input type="submit" value="Submit" />
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        )
    }
}
