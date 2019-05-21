import React, { Component } from 'react';
import { Link, HashRouter } from 'react-router-dom';

class LeftNav extends Component {
    render() {
        return (
            <div className="left-nav">
             <HashRouter>
             <ul>
             <li> <Link to={{
                        path: '/proxy_requests',
                        state : {
                        }
                    }} >Proxy Requests </Link></li>

                 <li><Link to={{
                        pathname : '/ip_ranges',
                        state :{
                        }
                    }} > IP Ranges </Link> </li>
                    <li><Link to={{
                        pathname : '/vcenters',
                        state :{  
                        }
                    }} >Vcenters </Link></li>
                    <li><Link to={{
                        pathname : '/locations',
                        state :{                           
                        }
                        }} >Locations </Link> </li>
                    
                </ul>
             </HashRouter>               
            </div>
        );
    }
}


export default LeftNav;