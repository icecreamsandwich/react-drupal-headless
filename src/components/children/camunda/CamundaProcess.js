import React, { Component } from 'react';

class CamundaProcess extends Component {
  render() {
    var context_ar = this.props.value;
    return (
      <div>
        <React.Fragment>
          <p>Name : {context_ar.state.routeTo}</p>
        </React.Fragment>
      </div>
    );
  }
}

export default CamundaProcess;
