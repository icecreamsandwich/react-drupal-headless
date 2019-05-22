import React, { Component } from 'react';
import ErrorCatcher from '../ErrorCatcher';
import { Redirect } from 'react-router';

class ServiceDetails extends Component {
    constructor(props) {
        super(props)
        var service_details = this.props.location.state;
        if(service_details){
            this.state = {
                field_service_name: service_details.field_service_name || "",
                field_remedy_slu: service_details.field_remedy_slu || "",
                field_p_sla: service_details.field_p_sla || "",
                field_p_environment: service_details.field_p_environment || "",
                field_service_owner_name: service_details.field_service_owner_name || "",
            }
        }
        
    }

    handleChange = (e) => {
        var name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    }

    handleSubmit = (event) => {
        alert("the form has been submited");
        console.log(this.state.field_service_name + "," + this.state.field_remedy_slu +
            this.state.field_p_sla +
            this.state.field_p_environment +
            this.state.field_service_owner_name
        );
        event.preventDefault();
        //DO some stuff with the data
    }

    render() {
        //console.log(this.state.field_service_name);
       // var service_name = this.state.field_service_name;
        if(!this.state || !this.state.field_service_name || this.state.field_service_name.length === 0){
            return(<Redirect to='/servicenames' push={true}></Redirect>)
        }
        return (
            <React.Fragment>
                <ErrorCatcher>
                    <div>
                        <h2>User Details</h2>
                        <form action="" method="POST" onSubmit={this.handleSubmit} className="form">
                            <table className="table">
                                <tr>
                                    <td>Service Name</td>
                                    <td><input readonly type="text" name="field_service_name" value={this.state.field_service_name} onChange={(e) => { this.handleChange(e) }} /></td>
                                </tr>
                                <tr>
                                    <td>SLU</td>
                                    <td><input readonly type="text" name="field_remedy_slu" value={this.state.field_remedy_slu} onChange={(e) => { this.handleChange(e) }} /></td>
                                </tr>
                                <tr>
                                    <td>SLA</td>
                                    <td><input readonly type="text" name="field_p_sla" value={this.state.field_p_sla} onChange={(e) => { this.handleChange(e) }} /></td>
                                </tr>
                                <tr>
                                    <td>Environment</td>
                                    <td><input readonly type="text" name="field_p_environment" value={this.state.field_p_environment} onChange={(e) => { this.handleChange(e) }} /></td>
                                </tr>
                                <tr>
                                    <td>Service Owner</td>
                                    <td><input readonly type="text" name="field_service_owner_name" value={this.state.field_service_owner_name} onChange={(e) => { this.handleChange(e) }} /></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><input type="submit" value="Submit" /></td>
                                </tr>
                            </table>
                        </form>
                    </div>
                </ErrorCatcher>
            </React.Fragment>

        )
    }
}

export default ServiceDetails;