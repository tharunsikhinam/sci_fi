import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2'
import * as zoom from 'chartjs-plugin-zoom';

const styles = {
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

const x = [1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016];
const y = [2,5,7,5,9,10,6,3,7,11,11,9,8,10,7,5,5,7,8,7,16,12,21,14,15,27,30,39,33,25,25,22,17,28,30,35,30,37,26,24,30,28,38,27,25,27,46,32,43,52,37,64,65,70,56,59,81,73,73,64,60,52,63,75,88,78,91,85,84,72,98,107,88,98,112,131,124,149,185,154,178,142,176,184,213,143]

class BarChart extends Component {

    constructor()
    {
        super();
        this.state = {flag: true,data:y,hover: 0 }
    }

  render() {
        console.log(this.props.yearsSelect)
      const data = {
          labels: x,
          datasets: [
              {
                  label: "Sci fi through the ages",
                  backgroundColor:x.map((node)=>{
                      if(this.props.yearsSelect.index === null)
                          return '#2196f3'
                      else if(this.props.yearsSelect.index!==null)
                      {
                          if(this.props.yearsSelect.selected === node)
                              return '#eee'
                          else
                              return '#2196f3'
                      }

                  }),
                  borderColor: '#01579B',
                  borderWidth: 1,
                  hoverBackgroundColor: x.map((node)=>{
                      if(this.props.yearsSelect.index === null)
                          return '#2196f3'
                      else if(this.props.yearsSelect.index!==null)
                      {
                          if(this.props.yearsSelect.selected === node)
                              return '#eee'
                          else
                              return '#2196f3'
                      }

                  }),
                  hoverBorderColor: '#eee',
                  data: y
              }
          ]

      }

    return (
        <div style={{height: '50vh',marginTop: '2vh'}}>
        <Bar
            options={{
                animation:{
                  easing: 'linear',
                    duration: 500
                },
                zoom: {
                    enabled: true,
                    mode: 'x',
                    rangeMin: {
                        x: null
                    },
                    rangeMax: {
                        x: null
                    }
                },
                scales: {
                    tickColor: "#eee",
                    xAxes: [{
                       barPercentage: 1,
                        ticks: {
                            fontFamily: "futura-medium-bt",
                            fontColor: "white",
                            fontSize: 14,
                            stepSize: 50,
                            beginAtZero: true
                        },
                        scaleLabel: {
                            fontFamily: "futura-bold-font",
                            display: true,
                            labelString: "Years",
                            fontColor: "#eee",
                            fontSize: 20,
                            paddingTop: 0,
                            marginTop: 0,

                        },
                        display: true,
                    }],
                    yAxes: [{
                        ticks: {
                            fontFamily: "futura-medium-bt",
                            fontColor: "white",
                            fontSize: 14,
                            stepSize: 50,
                            beginAtZero: true
                        },
                        scaleLabel: {
                            fontFamily: "futura-bold-font",
                            display: true,
                            fontSize: 20,
                            labelString: "Number of movies",
                            fontColor: "#eee",


                        },
                        display: true,
                    }]
                },

                hover: {
                    mode: "label",
                  intersect: true
                },
                title:{
                  display: false,

                },
                legend: {
                    display: false
                },
                defaultFontColor: '#eee',
                responsive: true,
                maintainAspectRatio: false,
                events: ['click','mousemove','mouseout'],
                onHover: (event,chartElement)=>{
                    console.log("i'm working")
                    console.log(chartElement);

                        if(chartElement[0]!==undefined)
                        {
                        if(this.props.years.index !== chartElement[0]._index) {
                            this.props.onChartHover(chartElement[0]._index)
                            this.setState({hover: 0})
                        }

                    }
                    else {
                        if(this.state.hover > 5) {
                            if (this.props.years.index !== null)
                                this.props.onChartRemoveHover()
                        }
                        else
                            this.setState({hover: this.state.hover+1})
                    }
                    event.target.style.cursor = chartElement[0] ? 'pointer' : 'default';

                },
                onClick: (event,chartElement) => {
                    console.log("reached click event",chartElement)
                    if(chartElement[0]!==undefined)
                    {
                        if(this.props.yearsSelect.index !== chartElement[0]._index)
                            this.props.onChartClick(chartElement[0]._index)
                        else
                            this.props.onChartClickRemove()
                    }
                    else {

                        if(this.props.yearsSelect.index !== null)
                            this.props.onChartClickRemove()
                    }

                }

            }}
            data={data}
        />
        </div>
    );
  }
}

export default BarChart;
