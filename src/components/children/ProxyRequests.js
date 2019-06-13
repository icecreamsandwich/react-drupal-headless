import React, { Component } from 'react';
import axios from 'axios';
import CssLoader from './CssLoader';

export default class ProxyRequests extends Component {
  state = {
    proxy_requests : ""
  }
  componentDidMount() {
    var host = process.env.REACT_APP_HOST_URL + ':3002';
    axios
      .post(host + '/drupal/api/getAllProxyRequests')
      .then(res => {
        var proxy_requests = JSON.parse(JSON.stringify(res.data));
        console.log(proxy_requests)
        this.setState({
          proxy_requests: proxy_requests,
        });
      })
      .catch(err => console.log(err));
  }
  
  render() {
    if (!this.state.proxy_requests) {
      return <CssLoader />;
    }

    return (
      <div>
        <React.Fragment>
          <h5>Proxy Requests</h5>
          <table className="table">
            <tbody>
              <tr>
                <th>Proxy Name</th>
                <th>DC</th>
                <th>Network Security Type</th>
                <th>Status</th>
                <th>HostName</th>       
              </tr>
              {this.state.proxy_requests &&
              this.state.proxy_requests.length > 0
                ? this.state.proxy_requests.map(items => {
                    return (
                      <React.Fragment key={items.field_p_name}>
                        <tr>
                          <td>{items.field_p_name}</td>
                          <td>{items.field_p_destination}</td>
                          <td>{items.field_p_network_sec_type}</td>
                          <td>{items.field_p_status}</td>
                          <td>{items.field_host_name}</td>
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
