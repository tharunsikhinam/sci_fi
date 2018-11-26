import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Radar} from 'react-chartjs-2';

const data = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
            label: 'My Second dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#000',
            pointHoverBackgroundColor: '#000',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [28, 48, 40, 19, 96, 27, 100]
        }
    ]
};


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

class CardRadarChart extends Component {

  render() {

      const { classes } = this.props;
      const bull = <span className={classes.bullet}>•</span>;

      return (
      <div >
          <Card className={classes.card} style={{justifyContent: "center"}}>
              <div style={{height: '30vh',overflow: "hidden"}}>
              <Radar

                  options={{
                      scales: {
                          tickColor: "#eee",

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

export default withStyles(styles)(CardRadarChart);
