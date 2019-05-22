import React, { Component } from 'react';
import {HashRouter,  Route} from 'react-router-dom';

//Import components
import Home from './children/Home';
import ServiceNames from './children/ServiceNames';
import ServiceDetails from './children/ServiceDetails';
import IPRanges from './children/IPRanges';
import Locations from './children/Locations';
import Vcenters from './children/Vcenters';
import ProxyRequests from './children/ProxyRequests';

class Routes extends Component {
    render() {
        return (
            <div className="content">
                <HashRouter>              
                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/servicenames" component={ServiceNames} />
                    <Route path="/servicedetails" component={ServiceDetails} />
                    <Route path="/ip_ranges" component={IPRanges} />
                    <Route path="/locations" component={Locations} />
                    <Route path="/vcenters" component={Vcenters} />
                    <Route path="/proxy_requests" component={ProxyRequests} />
                </HashRouter>
            </div>
        );
    }
}

export default Routes;