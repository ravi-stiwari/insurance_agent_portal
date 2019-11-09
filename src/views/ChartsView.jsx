import React, { Component } from "react";
import Chart from 'react-apexcharts';
import moment from 'moment';

class ChartsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        options: {
          chart: {
            shadow: {
              enabled: true,
              color: '#000',
              top: 18,
              left: 7,
              blur: 10,
              opacity: 1
            },
            toolbar: {
              show: false
            }
          },
          colors: ['#77B6EA', '#545454'],
          dataLabels: {
            enabled: true,
          },
          stroke: {
            curve: 'smooth'
          },
          title: {
            text: 'Average High & Low Temperature',
            align: 'left'
          },
          grid: {
            borderColor: '#e7e7e7',
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          markers: {
            
            size: 6
          },
          xaxis: {
            type: 'datetime',
            min: new Date("01/01/2013").getTime(),
            max: new Date("01/20/2019").getTime(),
            title: {
              text: 'Month'
            },
            labels: {
              rotate: -15,
              rotateAlways: true,
              formatter: function (val, timestamp) {
                return moment(new Date(timestamp)).format("DD MMM YYYY")
              }
            }
          },
          yaxis: {
            title: {
              text: 'Temperature'
            },
            min: 5,
            max: 40
          },
          legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
          }
        },
        series: [
          {
            name: "High - 2013",
            data: [28, 29, 33, 36, 32, 32, 33]
          },
          {
            name: "Low - 2013",
            data: [12, 11, 14, 18, 17, 13, 13]
          }
        ],
      }
  }
  
  render() {
    return (
      <Chart options={this.state.options} series={this.state.series} type="line" height="350" />
    );
  }
}

export default ChartsView;
