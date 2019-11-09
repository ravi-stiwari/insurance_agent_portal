import React, { Component } from "react";
import Chart from 'react-apexcharts';
import moment from 'moment';

class ChartsView extends Component {
  constructor(props) {
    super(props);
    this.chartSeries = this.prepareSeriesData();
    this.mindate = "12/01/2017";
    this.maxdate = "04/01/2019";
    this.maxcount = 11;
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
          colors: ['#77B6EA', '#545454', '#FF7878', '#00CED1', '#836FFF'],
          // dataLabels: {
          //   enabled: true,
          // },
          stroke: {
            curve: 'stepline'
          },
          title: {
            text: 'Policy Count per region',
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
            style: 'full',
            size: 1
          },
          xaxis: {
            type: 'datetime',
            min: new Date(this.mindate).getTime(),
            max: new Date(this.maxdate).getTime(),
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
              text: 'Policy Count'
            },
            min: 0,
            max: this.maxcount
          },
          legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
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
      regionData['data'] = data;
      chartSeries.push(regionData);
    }
    console.log(chartSeries);
    return chartSeries;
  }
  
  render() {
    return (
      <Chart options={this.state.options} series={this.state.series} type="bar" height="350" />
    );
  }
}

export default ChartsView;
