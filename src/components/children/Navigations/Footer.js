import React, { Component } from 'react';
import Memo from '../Memo'
class Footer extends Component {
    render() {
        var copyrightStr = "© COPYRIGHT PISERVE TECHNOLOGIES PVT. LTD 2019. ALL RIGHTS RESERVED.";
        var copyright = copyrightStr.toLowerCase();
        return (
            <div className="footer">
                <h5>GASF (Global Application Shared Frontend)</h5>               
                <label style={{float:'right'}}>Powered by Piserve @2019</label><br/>
                <label style={{float:'left'}}>{copyright}</label>
                <Memo />
                <label style={{float:'right'}}>React : <strong>{React.version}</strong></label>
                </div>
        );
    }
}

export default Footer;