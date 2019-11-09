import React, { Component } from "react";
import Chart from 'react-apexcharts';
import moment from 'moment';

class ChartsView extends Component {
  constructor(props) {
    super(props);
    this.chartSeries = this.prepareSeriesData();
    this.state = {
        options: {
          chart: {
            stacked: false,
            zoom: {
              type: 'x',
              enabled: true,
              autoScaleYaxis: false
            },
            toolbar: {
              show: true,
              autoSelected: 'zoom'
            },
            shadow: {
              enabled: true,
              color: '#000',
              top: 18,
              left: 7,
              blur: 10,
              opacity: 1
            },
          },
          colors: ['#77B6EA', '#545454', '#FF7878', '#00CED1', '#836FFF'],
          // dataLabels: {
          //   enabled: true,
          // },
          stroke: {
            curve: 'smooth'
          },
          title: {
            text: 'Policy bought per Customer Region',
            align: 'left',
            style : {
              fontSize: '40px'
            }
          },
          grid: {
            borderColor: '#e7e7e7',
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          markers: {
            size: 2
          },
          xaxis: {
            type: 'datetime',
            title: {
              text: '--- Date of Purchase --->',
              style : {
                fontSize: '20px'
              }
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
              text: '--- Policy Count --->',
              style : {
                fontSize: '20px'
              }
            },
            
          },
          legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -35,
            fontSize: '16px'  
          }
        },
        series: this.chartSeries,
      }
  }
  
  prepareSeriesData(){
    var tableDataItems = JSON.parse(localStorage.getItem('tableDataItems'));
    var dataSeries = {};
    tableDataItems.forEach(item => {
      if(item.Customer_Region in dataSeries){
        if(item.Date_of_Purchase in dataSeries[item.Customer_Region]){
          dataSeries[item.Customer_Region][item.Date_of_Purchase] = dataSeries[item.Customer_Region][item.Date_of_Purchase] + 1
        }
        else
        {
          dataSeries[item.Customer_Region][item.Date_of_Purchase] = 1;
        }
      }
      else {
        dataSeries[item.Customer_Region] = {};
        dataSeries[item.Customer_Region][item.Date_of_Purchase] = 1
      }
    });
    console.log(dataSeries)
    var chartSeries = [];
    for( var region in dataSeries) {
      let regionData = { 'name': region };
      let data = []
      for (var date in dataSeries[region]) {
        let innerArr = []
        innerArr.push(new Date(date).getTime());
        innerArr.push(dataSeries[region][date]);
        data.push(innerArr)
      }
      data.sort(function(a, b) {
        return a[0] - b [0];
      })
      regionData['data'] = data;
      chartSeries.push(regionData);
    }
    console.log(chartSeries);
    
    chartSeries.sort(function(a, b) {
      return a[0] - b [0];
    })
    console.log(chartSeries);
    return chartSeries;
  }
  
  render() {
    return (
      <Chart options={this.state.options} series={this.state.series} type="area" height="500" />
    );
  }
}

export default ChartsView;
