import React, { Component } from 'react'
import {Link} from 'react-router-dom';

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
                                <th>Task Id</th>
                                <th>Task Name</th>
                                <th>processInstanceId</th>
                                <th>taskDefinitionKey</th>
                                <th>created</th>
                            </tr>

                            {Tasks && Tasks.length > 0
                                ? Tasks.map(items => {
                                    return (
                                        <React.Fragment key={items.id}>
                                            <tr>
                                                <td>
                                                    <Link
                                                        to={{
                                                            pathname: '/taskdetails',
                                                            state: {
                                                                task_id: items.id,
                                                                processInstanceId: items.processInstanceId,
                                                            },
                                                        }}
                                                    >
                                                        {items.id}
                                                    </Link>
                                                </td>
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
