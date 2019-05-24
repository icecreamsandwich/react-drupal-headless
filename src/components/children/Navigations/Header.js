import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header_wrap">
          <div className="logo">
            <img alt="" src="/assets/images/logo.jpg" width="150" height="50" />
          </div>
          <div className="Header">
            <ul>
              <li>
                <a id="home" className="active" href="/#home">
                  Home
                </a>
              </li>
              <li>
                <a id="aSlave" href="/#servicenames">
                  Service Names
                </a>
              </li>
            </ul>
          </div>
          <div className="right_header">
            <label>GASF</label>
          </div>
          <div style={{ clear: 'both' }} />
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
