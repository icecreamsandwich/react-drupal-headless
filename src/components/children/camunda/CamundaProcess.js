import React, { Component } from 'react';

class CamundaProcess extends Component {
  render() {
    /* var context_ar = this.props.value; */
    var pInstances = this.props.pInstances;
    if (pInstances) {
      /*  pInstances.map((item) => {
                alert(item.id)
            }) */
    }
    return (
      <div>
        <React.Fragment>
          <p>Camunda Processes</p>
          <table className="table">
            <tbody>
              <tr>
                <th>businessKey</th>
                <th>definitionId</th>
                <th>Process id</th>
                <th>Ended</th>
              </tr>

              {pInstances && pInstances.length > 0
                ? pInstances.map(items => {
                    return (
                      <React.Fragment>
                        <tr>
                          <td>{items.businessKey}</td>
                          <td>{items.definitionId}</td>
                          <td>{items.id}</td>
                          <td>{items.ended ? 'true' : 'false'}</td>
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

export default CamundaProcess;
