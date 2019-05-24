import React, { Component } from 'react';
/* import MemoChild from './MemoChild'; */
import { setInterval } from 'timers';

class Memo extends Component {
  state = {
    date: new Date(),
    seconds: 1,
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        <label style={{ float: 'left', marginLeft: '20px' }}>
          {this.state.date.toString()}
        </label>
        {/* <MemoChild seconds={this.state.seconds} /> */}
      </div>
    );
  }
}
export default Memo;
