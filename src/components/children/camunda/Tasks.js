import React, { Component } from 'react'

export default class Tasks extends Component {
    render() {    
        var Tasks = this.props.TaskList;       
        return (
            <div>
                <React.Fragment>
                    <p>Camunda Tasks</p>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>name</th>
                                <th>processInstanceId</th>
                                <th>taskDefinitionKey</th>
                                <th>created</th>
                            </tr>

                            {Tasks && Tasks.length > 0
                                ? Tasks.map(items => {
                                    return (
                                        <React.Fragment>
                                            <tr>
                                                <td>{items.id}</td>
                                                <td>{items.name}</td>
                                                <td>{items.processInstanceId}</td>
                                                <td>{items.taskDefinitionKey}</td>
                                                <td>{items.created}</td>
                                            </tr>
                                        </React.Fragment>
                                    );
                                })
                                : ''}
                        </tbody>
                    </table>
                </React.Fragment>
            </div>
        );
    }
}
