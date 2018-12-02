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

const ids=["tt0499549","tt2488496","tt0848228","tt0369610","tt1201607","tt3498820","tt0167260","tt3748528","tt0083866","tt1375666"];
const x = ["Avatar","Star Wars","The Avengers","Jurassic World","Harry Potter & the Deathly Hallows:2","Captain America: Civil War","LOTR: The Return of the King","Rogue One","E.T.","Inception"]
const y = [2787965087,2068223624,1519557910,1513528810,1342000000,1153304495,1118888979,1056057273,892965326,825532764]

class BarChartGrossing extends Component {

    constructor()
    {
        super();
        this.state = {flag: true,data:y,hover: 0,backgroundColors:'#2196f3',hoverBackgroundColor: '#eee'}
    }
    componentWillReceiveProps(nextProps) {
        var backgroundColors = ids.map((node)=>{
            if(nextProps.grossingIdClick === null)
                return '#2196f3'
            else if(nextProps.grossingIdClick!==null)
            {
                if(nextProps.grossingIdClick === node)
                    return '#eee'
                else
                    return '#2196f3'
            }

        });
        var hoverBackgroundColor= ids.map((node)=>{
            if(nextProps.grossingIdClick === null)
                return '#01579B'
            else if(this.grossingIdClick!==null)
            {
                if(nextProps.grossingIdClick === node)
                    return '#eee'
                else
                    return '#01579B'
            }

        })
        this.setState({backgroundColors: backgroundColors,hoverBackgroundColor: hoverBackgroundColor})
    }

    render() {
      var data = {
          labels: ["Avatar","Star Wars","The Avengers","Jurassic World","Harry Potter & the Deathly Hallows:2","Captain America: Civil War","LOTR: The Return of the King","Rogue One","E.T.","Inception"],
          datasets: [
              {
                  label: "Sci fi over the ages",
                  backgroundColor: this.state.backgroundColors,
                  borderColor: '#01579B',
                  borderWidth: 1,
                  hoverBackgroundColor: this.state.hoverBackgroundColor,
                  hoverBorderColor: '#eee',
                  data: [2787965087,2068223624,1519557910,1513528810,1342000000,1153304495,1118888979,1056057273,892965326,825532764]
              }
          ]

      };
    console.log("bbbb",this.props)
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
                legend: {
                    display: false
                },
                tooltips: {
                    callbacks: {
                        title:function(tooltipItem, data) {
                            return x[tooltipItem[0].index];
                        },
                        label: function(tooltipItem, data) {
                            console.log(tooltipItem)
                            var label = data.datasets[tooltipItem.datasetIndex].label || '';

                             console.log(label)
                            return "$"+ (y[tooltipItem.index]/1000000).toString()+"M";
                        }
                    }
                },
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
                       barPercentage: 0.9,
                        ticks: {
                            maxRotation: 10,
                            minRotation: 0,
                            stepSize: 1000,
                            fontColor: "white",
                            fontSize: 15,
                            autoSkip: false

                        },
                        scaleLabel: {
                            display: true,
                            fontColor: "#eee",
                            fontSize: 12,
                            paddingTop: 0,
                            marginTop: 0,

                        },
                        display: true,
                    }],
                    yAxes: [{
                        ticks: {
                            userCallback: ((value,index,values)=>{
                                return "$"+ (value/1000000).toString()+"M"
                            }),
                            min: 40000000,
                            fontColor: "white",
                            fontSize: 14,
                        },

                        scaleLabel: {
                            display: true,
                            fontSize: 14,
                            labelString: "Gross revenue",
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
                defaultFontColor: '#eee',
                responsive: true,
                maintainAspectRatio: false,
                events: ['click','mousemove','mouseout'],
                onHover: (event,chartElement)=>{

                    if(chartElement[0]!==undefined)
                    {
                        if(this.props.selectId !== chartElement[0]._index) {
                            this.props.onChartHover(chartElement[0]._index)

                        }

                    }
                    else {
                        if (this.props.hoverId !== null)
                                this.props.onChartRemoveHover()
                    }
                    event.target.style.cursor = chartElement[0] ? 'pointer' : 'default';

                },
                onClick: (event,chartElement) => {
                    console.log("reached click event",chartElement)
                    if(chartElement[0]!==undefined)
                    {
                        if(this.props.selectId !== chartElement[0]._index)
                            this.props.onChartClick(chartElement[0]._index)
                        else
                            this.props.onChartClickRemove()
                    }
                    else {

                        if(this.props.hoverId !== null)
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

export default BarChartGrossing;
