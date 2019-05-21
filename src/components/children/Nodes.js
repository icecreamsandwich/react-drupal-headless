import React, { Component } from 'react';
import axios from 'axios';

export default class Nodes extends Component {
  state ={
    service_details : null
  }

  componentDidMount() {
    axios.post("http://192.168.1.202/gasf/getAllServiceNames")
    .then((res) => {
      console.log(JSON.parse(res))
      this.setState({
        service_details : JSON.parse(res)
      })
    })
    .catch(err => console.log(err))
  }
  
  render() {
    return (
      <div>
      <React.Fragment>
      <h5>Service Names</h5>
        <table className="table">
          <tbody>
          <tr>
            <th>Service Name</th>
            <th>SLU</th>
            <th>SLU2</th>
            <th>Env</th>
          </tr>
            {this.state.service_details  && (this.state.service_details.length >0 )? 
            this.state.service_details.map((items)=> {  
              return(<React.Fragement>
                <tr>
                  <td>{items.field_service_name}</td>
                  <td>{items.field_remedy_slu}</td>
                  <td>{items.slu2}</td>
                  <td>{items.env1}</td>
                </tr>
              </React.Fragement>);                           
            })
            : "" }
          </tbody>
        </table>
      </React.Fragment>
      </div>
    )
  }
}
