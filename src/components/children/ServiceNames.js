import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ServiceNames extends Component {
  state = {
    service_details: '',
  };

  componentDidMount() {
    var host = process.env.REACT_APP_HOST_URL + ':3002';
    axios
      .post(host + '/drupal/api/getAllServiceNames')
      .then(res => {
        var service_details = JSON.parse(JSON.stringify(res.data));
        this.setState({
          service_details: service_details,
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    if (this.state.service_details && this.state.service_details.length > 0) {
      console.log(this.state.service_details);
    }
    if (!this.state.service_details) {
      return <div>Loading ...</div>;
    }
    return (
      <div>
        <React.Fragment>
          <h5>Service Names</h5>
          <table className="table">
            <tbody>
              <tr>
                <th>Service Name</th>
                <th>SLA</th>
                <th>SLU</th>
                <th>Env</th>
                <th>Service Owner Name</th>
                <th>Service Owner Email</th>
              </tr>
              {this.state.service_details &&
              this.state.service_details.length > 0
                ? this.state.service_details.map(items => {
                    return (
                      <React.Fragment>
                        <tr>
                          <td>
                            <Link
                              to={{
                                pathname: '/servicedetails',
                                state: {
                                  field_service_name: items.field_service_name,
                                  field_remedy_slu: items.field_remedy_slu,
                                  field_p_sla: items.field_p_sla,
                                  field_p_environment:
                                    items.field_p_environment,
                                  field_service_owner_name:
                                    items.field_service_owner_name,
                                },
                              }}
                            >
                              {items.field_service_name}
                            </Link>
                          </td>
                          <td>{items.field_remedy_slu}</td>
                          <td>{items.field_p_sla}</td>
                          <td>{items.field_p_environment}</td>
                          <td>{items.field_service_owner_name}</td>
                          <td>{items.field_service_owner_email}</td>
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

export default ServiceNames;
