import React, { Component } from 'react';

class CamundaProcessDefinitions extends Component {
  render() {
    var pDefinitions = this.props.pDefinitions;
    return (
      <div>
        <React.Fragment>
          <p>Processe Definitions</p>
          <table className="table">
            <tbody>
              <tr>
                <th>Id</th>
                <th>Key</th>
                <th>Name</th>
                <th>Deployment Id</th>
                <th>Category</th>
                <th>Version</th>
              </tr>
              {pDefinitions && pDefinitions.length > 0
                ? pDefinitions.map(items => {
                    return (
                      <React.Fragment>
                        <tr>
                          <td>{items.id}</td>
                          <td>{items.key}</td>
                          <td>{items.name}</td>
                          <td>{items.deploymentId}</td>
                          <td>{items.category}</td>
                          <td>{items.version}</td>
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

export default CamundaProcessDefinitions;
