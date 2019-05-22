import React, { Component } from 'react';
import {HashRouter,  Route} from 'react-router-dom';

//Import components
import Home from './children/Home';
import ServiceNames from './children/ServiceNames';
import IpRanges from './children/IpRanges';
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
                    <Route path="/ip_ranges" component={IpRanges} />
                    <Route path="/locations" component={Locations} />
                    <Route path="/vcenters" component={Vcenters} />
                    <Route path="/proxy_requests" component={ProxyRequests} />
                </HashRouter>
            </div>
        );
    }
}

export default Routes;