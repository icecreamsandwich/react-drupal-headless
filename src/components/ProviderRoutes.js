import React, { Component } from 'react';
import Myprovider from './Myprovider';

class ProviderRoutes extends Component {
  render() {
    var route = this.props.routeTo;
    console.log(route);
    return (
      <div>
        <Myprovider routeTo={route} />
      </div>
    );
  }
}

export default ProviderRoutes;
