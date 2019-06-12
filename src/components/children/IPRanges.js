import React, { Component } from 'react';
import axios from 'axios';
import CssLoader from './CssLoader';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import drilldown from 'highcharts-drilldown';
drilldown(Highcharts);

class IPRanges extends Component {
  state = {
    ip_range_details: '',
    options: ''
  };

  componentDidMount() {
    var host = process.env.REACT_APP_HOST_URL + ':3002';
    axios
      .post(host + '/drupal/api/getAllIpRangesDetails')
      .then(res => {
        var ip_range_details = JSON.parse(JSON.stringify(res.data));
        this.setState({
          ip_range_details: ip_range_details,
        });
      })
      .catch(err => console.log(err));
  }

  render() {

    if (this.state.ip_range_details) {
      var data = [];
      var drilldown = [];
    //  var dataDrilldown = [];
      this.state.ip_range_details.map(items => {
        data.push({
          name: items.ip_range,
          y: items.available,
          drilldown: items.ip_range,
        })
        /* dataDrilldown.push([
          items.used, 
          items.blocked,
          items.available
        ]) */
        var dataDrill = [
          ['used', items.used],
          ['blocked', items.blocked],
          ['available', items.available],
        ];
        drilldown.push({
            name: items.ip_range,
            id: items.ip_range,
            data: dataDrill
        })
      })
      var options = {
        title: {
          text: 'High chart',
        },
        chart: {
          type: 'pie',
        },
        series: [
          {
            name: 'IPRanges',
            colorByPoint: true,
            data: data
          }
        ],
        drilldown: {
         series : drilldown
        }
      };
     // var options = JSON.stringify(options)
     console.log(JSON.stringify(options))
     // alert(JSON.stringify(options))
    }
  
    if (!this.state.ip_range_details) {
      return <CssLoader />;
    }
    return (
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    );
  }
}

export default IPRanges;
