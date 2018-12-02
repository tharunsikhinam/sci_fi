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

const x = ["Avatar","Star Wars: The Force Awakens","The Avengers","Jurassic World","Avengers: Age of Ultron","Harry Potter and the Deathly Hallows: Part 2","Beauty and the Beast","Iron Man 3","Captain America: Civil War","Transformers: Dark of the Moon","The Lord of the Rings: The Return of the King","Transformers: Age of Extinction","Pirates of the Caribbean: Dead Man's Chest","Rogue One: A Star Wars Story","Pirates of the Caribbean: On Stranger Tides","Alice in Wonderland","The Hobbit: An Unexpected Journey","Harry Potter and the Philosopher's Stone","The Jungle Book","Pirates of the Caribbean: At World's End","The Hobbit: The Desolation of Smaug","The Hobbit: The Battle of the Five Armies","Harry Potter and the Deathly Hallows: Part 1","Harry Potter and the Order of the Phoenix","Harry Potter and the Half-Blood Prince","The Lord of the Rings: The Two Towers","Star Wars: Episode I - The Phantom Menace","Jurassic Park","Shrek 2","Harry Potter and the Goblet of Fire","Spider-Man 3","Harry Potter and the Chamber of Secrets","Batman v Superman: Dawn of Justice","The Lord of the Rings: The Fellowship of the Ring","Guardians of the Galaxy Vol. 2","Star Wars: Episode III - Revenge of the Sith","The Hunger Games: Catching Fire","Transformers: Revenge of the Fallen","The Twilight Saga: Breaking Dawn - Part 2","Inception","Spider-Man","Wonder Woman","Independence Day","Fantastic Beasts and Where to Find Them","Shrek the Third","Pirates of the Caribbean: Dead Men Tell No Tales","E.T. the Extra-Terrestrial","Harry Potter and the Prisoner of Azkaban","Spider-Man 2","Star Wars"];
const y = [2787965087,2068223624,1519557910,1513528810,1405403694,1342000000,1262886337,1215439994,1153304495,1123746996,1118888979,1091405097,1065659812,1056057273,1045713802,1025491110,1021103568,976475550,966550600,961000000,958400000,956019788,954305868,938212738,933959197,926287400,924317558,920100000,919838758,895921036,890871626,876688482,873260194,871368364,863416141,850000000,847423452,836297228,829000000,825532764,821708551,820580447,816969268,809342332,798958165,794191988,792965326,789804554,783766341,775398007]

class BarChartGrossing extends Component {

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
                  data: y
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
                legend: {
                    display: false
                },
                tooltips: {
                    callbacks: {
                        title:function(tooltipItem, data) {
                            console.log(tooltipItem)
                            var label = data.datasets[tooltipItem[0].datasetIndex].label || '';

                            console.log(label)
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
                    duration: 1000
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
                            userCallback: ((value,index,values)=>{
                                if(value.length>25)
                                return value.substring(0,25)+".."
                                else
                                    return value.substring(0,25)
                            }),
                            fontColor: "white",
                            fontSize: 10,
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

export default BarChartGrossing;
