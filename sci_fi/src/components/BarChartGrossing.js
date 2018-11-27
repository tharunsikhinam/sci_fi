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

const x = [
    1960,
    1961,
    1962,
    1963,
    1964,
    1965,
    1966,
    1967,
    1968,
    1969,
    1970,
    1971,
    1972,
    1973,
    1974,
    1975,
    1976,
    1977,
    1978,
    1979,
    1980,
    1981,
    1982,
    1983,
    1984,
    1985,
    1986,
    1987,
    1988,
    1989,
    1990,
    1991,
    1992,
    1993,
    1994,
    1995,
    1996,
    1997,
    1998,
    1999,
    2000,
    2001,
    2002,
    2003,
    2004,
    2005,
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017 ];
const y = [ 10,
    15,
    20,
    25,
    30,
    35,
    40,
    45,
    50,
    55,
    60,
    65,
    70,
    75,
    80,
    85,
    90,
    95,
    100,
    105,
    110,
    115,
    120,
    125,
    130,
    135,
    140,
    145,
    150,
    155,
    160,
    165,
    170,
    175,
    180,
    185,
    190,
    195,
    200,
    205,
    210,
    215,
    220,
    225,
    230,
    235,
    240,
    245,
    250,
    255,
    260,
    265,
    270,
    275,
    280,
    285,
    290,
    295,
    300,
    305,
    310,
    315,
    320,
    325,
    330,
    335,
    340,
    345,
    350,
    355,
    360,
    365,
    370,
    375,
    380,
    385,
    390,
    395,
    400,
    405,
    410,
    415,
    420,
    425,
    430,
    435,
    440,
    445 ]
const y1 = [ 445,
    440,
    435,
    430,
    425,
    420,
    415,
    410,
    405,
    400,
    395,
    390,
    385,
    380,
    375,
    370,
    365,
    360,
    355,
    350,
    345,
    340,
    335,
    330,
    325,
    320,
    315,
    310,
    305,
    300,
    295,
    290,
    285,
    280,
    275,
    270,
    265,
    260,
    255,
    250,
    245,
    240,
    235,
    230,
    225,
    220,
    215,
    210,
    205,
    200,
    195,
    190,
    185,
    180,
    175,
    170,
    165,
    160,
    155,
    150,
    145,
    140,
    135,
    130,
    125,
    120,
    115,
    110,
    105,
    100,
    95,
    90,
    85,
    80,
    75,
    70,
    65,
    60,
    55,
    50,
    45,
    40,
    35,
    30,
    25,
    20,
    15,
    10 ];
class BarChart extends Component {

    constructor()
    {
        super();
        this.state = {flag: true,data:y}
    }

  render() {
      const data = {
          labels: x,
          datasets: [
              {
                  label: "Sci fi over the ages",
                  backgroundColor: '#2196f3',
                  borderColor: '#01579B',
                  borderWidth: 1,
                  hoverBackgroundColor: '#01579B',
                  hoverBorderColor: '#eee',
                  data: this.state.data
              }
          ]

      }

    return (
        <div style={{height: '50vh',marginTop: '2vh'}}>
            {/*<button onClick={()=>{*/}
                {/*if(this.state.flag)*/}
                    {/*this.setState({data: y1,flag: !this.state.flag})*/}
                {/*else*/}
                    {/*this.setState({data: y,flag: !this.state.flag})*/}
                {/*//this.setState({flag: !this.state.flag})*/}
                {/*console.log(this.state);*/}
            {/*}}> abc</button>*/}
        <Bar
            options={{
                animation:{
                  easing: 'linear',
                    duration: 3000
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
                       barPercentage: 0.9,
                        ticks: {
                            fontColor: "white",
                            fontSize: 14,
                            stepSize: 50,
                            beginAtZero: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: "Years",
                            fontColor: "#eee",
                            fontSize: 12,
                            paddingTop: 0,
                            marginTop: 0,

                        },
                        display: true,
                    }],
                    yAxes: [{
                        ticks: {
                            fontColor: "white",
                            fontSize: 14,
                            stepSize: 50,
                            beginAtZero: true
                        },
                        scaleLabel: {
                            display: true,
                            fontSize: 14,
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
                    labels: {
                        fontColor: "#eee"
                    }
                },
                defaultFontColor: '#eee',
                responsive: true,
                maintainAspectRatio: false,
                events: ['click','mousemove','mouseout'],
                onHover: (event,chartElement)=>{
                    console.log(chartElement);
                    event.target.style.cursor = chartElement[0] ? 'pointer' : 'default';

                },
                onClick: (event,value) => {
                    if(value.length !== 0 )
                    {
                        console.log("values",value);
                        console.log(value[0]._index)

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
