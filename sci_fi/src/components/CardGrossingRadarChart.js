import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {Radar} from 'react-chartjs-2';



const styles = {
    card: {
        marginLeft: '4vw',
        display: 'inherit',
        width: '40vw',
        transitionDuration: '0.3s',
        height: '35vh'

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

const grossing = {"tt0499549":[16.67,10,13.33,1.67,0,13.33,26.67,20,13.33],"tt2488496":[10,31.11,15.56,8.89,4.44,13.33,13.33,25,13.33],"tt0848228":[10,10,33.33,3.33,3.33,23.33,10,0,6.67],"tt0369610":[0,2.78,52.78,2.78,2.78,11.11,19.44,0,8.33],"tt1201607":[0,7.81,14.06,3.12,0,25,21.88,0,28.12],"tt3498820":[2.86,5.71,51.43,0,8.57,14.29,5.71,2.86,8.57],"tt0167260":[0,4.26,31.91,4.26,0,19.15,21.28,0,19.15],"tt3748528":[0,30.16,23.81,1.59,3.17,12.7,14.29,6.35,7.94],"tt0083866":[25,22.5,7.5,5,2.5,7.5,20,0,10],"tt1375666":[0,9.84,29.51,8.2,0,19.67,9.84,14.75,8.2]}
const x = ["Avatar","Star Wars","The Avengers","Jurassic World","Harry Potter & the Deathly Hallows:2","Captain America: Civil War","LOTR: The Return of the King","Rogue One","E.T.","Inception"]
class CardRadarChartGrossing extends Component {
    constructor(props)
    {
        super(props);
    }

  render() {
        var data={
            labels: ['Alien', 'Space', 'Robot', 'Time Travel',
                'Superheroes',  'Dystopian','Monster','Techno','Fantasy'],
            datasets: [
                {
                    radius: 0,
                    label: "",
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: '#2196f3',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [0,0,0,0,0,0,0,0,0]
                }
            ]
        };
      console.log("I got clicked",this.props.grossingIdClick)
        if(this.props.grossingIdClick)
        {

            data ={
                labels: ['Alien', 'Space', 'Robot', 'Time Travel',
                    'Superheroes',  'Dystopian','Monster','Techno','Fantasy'],
                datasets: [
                    {
                        radius: 0,
                        label: x[this.props.selectId],
                        backgroundColor: 'rgba(179,181,198,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        pointBackgroundColor: 'rgba(179,181,198,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(179,181,198,1)',
                        data: grossing[this.props.grossingIdClick]
                    }
                ]
            }
            if(this.props.grossingIdHover && (this.props.grossingIdClick!=this.props.grossingIdHover))
            {
                data.datasets.push({
                    radius: 0,
                    label: x[this.props.hoverId],
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: '#2196f3',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: grossing[this.props.grossingIdHover]
                })
            }
        }
        else if(this.props.grossingIdHover)
        {
            data ={
                labels: ['Alien', 'Space', 'Robot', 'Time Travel',
                    'Superheroes',  'Dystopian','Monster','Techno','Fantasy'],
                datasets: [
                    {
                        radius: 0,
                        label: x[this.props.hoverId],
                        backgroundColor: 'rgba(179,181,198,0.2)',
                        borderColor: '#2196f3',
                        pointBackgroundColor: 'rgba(179,181,198,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(179,181,198,1)',
                        data: grossing[this.props.grossingIdHover]
                    }
                ]
            }
        }

      const { classes } = this.props;
      const bull = <span className={classes.bullet}>•</span>;
     // debugger;
      return (
      <div >
          <Card className={classes.card} style={{justifyContent: "center"}}>
              <div style={{height: '30vh',overflow: "hidden"}}>
                  <Radar
                      options={{
                          animation:{
                              easing: 'linear',
                              duration: 500
                          },
                          scales: {
                              tickColor: "#eee",
                              ticks: {
                                  min:0,
                                  display: false
                              },

                          },
                          responsive: true,
                          height: "100%",
                          maintainAspectRatio: false,
                          legend: {
                              labels: {
                                  fontColor: 'white'
                              }
                          },
                          scale: {
                              gridLines: {
                                  color: 'white'
                              },
                              fontSize: '20px',
                              pointLabels:{
                                  fontSize: 12,
                                  fontColor: 'white',
                              },
                              ticks: {
                                  min:0,
                                  display: false
                              },
                          }
                      }}
                      data={data} />
              </div>
          </Card>
      </div>
    );
  }
}

export default withStyles(styles)(CardRadarChartGrossing);
