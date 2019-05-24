import React, { Component } from 'react';

class CamundaProcess extends Component {
  render() {
    var context_ar = this.props.value;
    var pInstances = JSON.parse(this.props.pInstances);
    if (pInstances) {
      console.log(pInstances);
    }
    return (
      <div>
        <React.Fragment>
          <p>Name : {context_ar.state.routeTo}</p>
          {pInstances.length > 0 ? (
            <React.Fragment>
              return (
              {pInstances.map(item => {
                <p>{item.id}</p>;
              })}
              )
            </React.Fragment>
          ) : (
            ''
          )}
        </React.Fragment>
      </div>
    );
  }
}

export default CamundaProcess;
