import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <div>
                        <p><b>What is GASF?</b> </p>
                        <p>GASF is a virtualized fully automated environment to provide Proxies as a Service (PaaS) for Vodafone. </p>
                        <p><b>Who to contact first?</b> </p>
                        <p>If you require GASF proxies please get in contact with Alexander Ruhl (<a href="mailto:alexander.ruhl@vodafone.com">alexander.ruhl@vodafone.com</a>) first! </p>
                        <p><b>How to request a proxy?</b> </p>
                        <p>You have to create a request on this page for every reverse or forward proxy which you require. </p>
                        <p><b>What we deliver?</b> </p>
                        <p>We deliver you the proxy based on your information in the request form. </p>
                        <p><b>What you have to do?</b> </p>
                        <p>Request the firewall rules (both network to proxy and proxy to back end), SSO integration and if required the load balancer. </p>
                        <p><b>How long does it take to deliver a proxy?</b> </p>
                        <p>The SLA for implementation is 5 business days after assignment of the IP to the request. </p>
                        <p>Prerequisites: </p>
                        <p>* Webserver certificate delivered by Vodafone CA or Customer<br />
                            * Budget clarified and provided </p>
                        <p>Exclusion: </p>
                        <p>If you require connectivitiy from a security network zone which is not listed below you have to inform us pro-actively. The request and implementation of new security network zones can take up to 6 weeks based on the current Vodafone processes. </p>
                        <p>Internal Presentation I1 (former E1)<br />
                            External Presentation X1 (former C2) </p>
                        <p><b>If you require an certain amount of proxies:</b> </p>
                        <p>* provide the amount of proxies<br />
                            * provide the security zones<br />
                            * provide the backend network </p>
                        <p>The VCNO WO request has to be raised by the GASF team to VCNO. Any WO request which is GASF related but not raised by the GASF team will be rejected. </p>
                        <p><b>What you have to do to request an change of an existing proxy</b> </p>
                        <p>* update the corresponding GASF proxy request with the new settings<br />
                            * send an email to <a href="mailto:gsd@vodafone.com">gsd@vodafone.com</a> </p>
                        <p>Production proxies: </p>
                        <p>* align an maintenance window with the GASF team and create the required CRQ (generic GASF implementation plan on this page) </p>
                        <p>Duration: </p>
                        <p>* changes of proxies have a standard SLA of 5 business days starting after the final alignment with the GASF team </p>
                        <p><b>What does a proxy cost?</b> </p>
                        <p>1 proxy cost 1045€ Capex. If you require an large amount of proxies for your service a package price can be provided. </p>
                        <p><b>What SLA does GASF offer for proxies?</b> </p>
                        <p>Business Basic<br />
                            Business Standard<br />
                            Business Premium<br />
                            Business Critical (technical ready) </p>
                        <p><b>How to request an Single Sign On integration</b> </p>
                        <p>Please send an email to <a href="mailto:wiam@vodafone.com">wiam@vodafone.com</a>. </p>
                        <p><b>Deployment days in GASF for new proxies</b> </p>
                        <p>Monday<br />
                            Wednesday<br />
                            Friday </p>
                        <p><b>If you require you proxy in less than 5 business days</b> </p>
                        <p>* You have to provide a business justification<br />
                            * You have to provide a approval by your Head of Domain<br />
                            * You have to provide a approval by the Head of the Cloud Platforms &amp; Enablers Domain </p>
                        <p><b>Changes on Proxies</b> </p>
                        <p>Any type of change has to be aligned with us at least 5 business days in-front of the change date. </p>
                        <p><b>Where can you find the log files of your proxy.</b> </p>
                        <p>You can find all log files in the Central logging: <a href="https://oneview.vodafone.com/sh1">https://oneview.vodafone.com/sh1</a><br />
                            Access to "Oneview" can be obtained via <a href="https://sharepoint.vodafone.com/vgsg/VIS-TDO-EM/default.aspx">https://sharepoint.vodafone.com/vgsg/VIS-TDO-EM/default.aspx</a><br />
                            (On that page, in the "Support portal" there is a link "Open Tool Request") </p>
                        <p><b>How many concurrent connections can a proxy handle</b> </p>
                        <p>The default configuration is 585 per proxy. </p>
                        <p><b>In which locations is GASF available?</b> </p>
                        <p>* Ratingen House 1/2/9<br />
                            * Dublin 2 Houses </p>
                        <p> <b>In which Network security zones is GASF available?</b> </p>
                        <p>* Internal presentation<br />
                            * External presentation </p>
                        <p><b>Service Name</b> </p>
                        <p>If the service name is not listed in the request form please select ‘New service name specified in notes’ and specify an appropriate service name in the notes field. </p>
                        <p><b>Generic Implementation Plan for 1 Reverse proxy</b> </p>
                        <p>For CRQ's you could use our generic implementation plan as template. This is the amount of time for ONE proxy, if you need more than one to be processed, please upscale all the times accordingly. </p>
                        <p><a href="http://gasf.vavs.vodafone.com/system/files/Generic_implementation_plan_GASF-Proxy.xls">Download Generic_implementation_plan_GASF-Proxy.xls</a></p>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}
