import React, { Component } from 'react';
import axios from 'axios';
import CssLoader from './CssLoader';

class Vcenters extends Component {
  state = {
    vcenter_details : ""
  }
  componentDidMount() {
    var host = process.env.REACT_APP_HOST_URL + ':3002';
    axios
      .post(host + '/drupal/api/getAllVcenters')
      .then(res => {
        var vcenter_details = JSON.parse(JSON.stringify(res.data));
        console.log(vcenter_details)
        this.setState({
          vcenter_details: vcenter_details,
        });
      })
      .catch(err => console.log(err));
  }
  
  render() {
    if (!this.state.vcenter_details) {
      return <CssLoader />;
    }
    return (
      <div>
        <React.Fragment>
          <h5>Vcenters</h5>
          <table className="table">
            <tbody>
              <tr>
                <th>IP</th>
                <th>Type</th>
                <th>DS Filter</th>
                <th>Cluster Paths</th>
                <th>Template Name</th>       
              </tr>
              {this.state.vcenter_details &&
              this.state.vcenter_details.length > 0
                ? this.state.vcenter_details.map(items => {
                  var clusterPaths = items.field_vcenter_cluster_paths.match(/[^\r\n]+/g);
                    return (
                      <React.Fragment key={items.field_vcenter_ip}>
                        <tr>
                          <td>{items.field_vcenter_ip}</td>
                          <td>{items.field_vcenter_type}</td>
                          <td>{items.field_vcenter_ds_filter}</td>
                          <td>{clusterPaths[0]} <br/>{clusterPaths[1]}</td>
                          <td>{items.field_template_name}</td>
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

export default Vcenters;
