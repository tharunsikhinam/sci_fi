import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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

const sub_genre={"1896":[0,10,10,0,0,10,10],"1897":[0,10,10,10,10,0,10],"1898":[1.43,0,8.57,2.86,4.29,1.43,10],"1899":[3.33,0,10,3.33,0,3.33,10],"1900":[0,0,10,5,0,0,10],"1901":[0,0,10,5,0,5,10],"1902":[0,0,5,10,0,0,10],"1903":[0,2.22,7.78,3.33,2.22,0,10],"1904":[0,5,10,5,0,5,10],"1905":[5,0,10,0,10,5,10],"1906":[2.5,0,7.5,2.5,2.5,2.5,10],"1907":[0,0,0,3.33,0,0,10],"1908":[0,0,0,5,0,5,5],"1909":[0,3.33,6.67,0,3.33,3.33,10],"1910":[3.33,6.67,3.33,6.67,0,0,6.67],"1911":[0,0,0,5,5,0,10],"1912":[0,0,5,10,0,0,5],"1914":[0,0,0,10,0,0,10],"1915":[0,5,0,5,0,5,10],"1916":[0,0,5,10,5,5,5],"1917":[0,10,0,0,0,0,10],"1918":[0,0,0,10,0,10,10],"1919":[0,0,10,10,10,10,10],"1920":[0,5,5,0,0,0,0],"1921":[0,0,0,3.33,0,6.67,10],"1922":[3.33,3.33,3.33,6.67,3.33,3.33,10],"1923":[0,0,0,0,0,6.67,10],"1924":[1.25,2.5,2.5,7.5,3.75,3.75,8.75],"1925":[0,6.67,3.33,0,0,3.33,6.67],"1926":[0,0,0,6.67,3.33,3.33,10],"1927":[0,0,0,10,0,10,0],"1928":[5,5,5,10,5,5,10],"1929":[0,5,5,0,0,0,5],"1930":[0,10,10,10,0,0,10],"1931":[0,5,0,5,5,5,0],"1932":[2,6,4,6,2,6,8],"1933":[0,2.86,0,4.29,7.14,1.43,5.71],"1934":[2,6,0,8,2,4,8],"1935":[1.11,2.22,1.11,6.67,5.56,5.56,7.78],"1936":[3,4,3,3,3,5,3],"1937":[1.67,3.33,5,8.33,1.67,5,10],"1938":[0,0,3.33,6.67,3.33,3.33,6.67],"1939":[1.43,2.86,1.43,2.86,4.29,7.14,5.71],"1940":[3.64,3.64,3.64,4.55,6.36,3.64,5.45],"1941":[2.73,4.55,2.73,3.64,1.82,5.45,7.27],"1942":[3.33,1.11,1.11,4.44,4.44,6.67,8.89],"1943":[5,3.75,3.75,7.5,6.25,6.25,8.75],"1944":[1,3,1,4,4,3,8],"1945":[1.43,1.43,1.43,7.14,4.29,4.29,8.57],"1946":[4,0,0,10,6,8,10],"1947":[2,2,2,8,2,2,10],"1948":[1.43,1.43,0,4.29,0,2.86,8.57],"1949":[0,0,0,6.25,1.25,3.75,8.75],"1950":[2.86,1.43,4.29,5.71,4.29,5.71,4.29],"1951":[2.5,1.88,4.38,6.25,3.12,6.25,5.62],"1952":[2.5,4.17,2.5,4.17,3.33,3.33,6.67],"1953":[2.38,2.86,5.24,4.29,2.38,5.24,2.86],"1954":[3.57,5.71,5.71,5.71,3.57,5.71,2.14],"1955":[2.67,6.67,5.33,3.33,4.67,4.67,3.33],"1956":[2.96,4.81,3.33,5.56,2.59,5.56,2.96],"1957":[4.67,5.67,2.67,4.67,3.67,5.33,4],"1958":[4.36,6.15,5.38,6.41,2.82,5.38,2.31],"1959":[3.64,3.03,4.85,5.15,2.42,6.06,3.33],"1960":[1.6,2.8,3.2,6.8,4,5.2,5.2],"1961":[0.4,4,2.4,6,3.2,5.2,4.8],"1962":[2.73,3.64,3.64,7.27,3.64,4.09,4.55],"1963":[2.35,4.12,4.71,7.06,1.76,4.12,4.71],"1964":[1.79,3.21,3.57,6.79,3.93,5,6.07],"1965":[4.67,5.33,5,6.67,4.33,6.33,2.33],"1966":[2.86,4.57,3.43,6.29,4.29,4.57,2.86],"1967":[3,3.33,4.67,7,4,5.67,4],"1968":[2.97,3.51,3.78,4.86,3.78,5.95,4.86],"1969":[3.46,3.08,3.08,5.38,5,6.15,4.62],"1970":[2.5,3.75,2.92,5.83,2.08,3.75,5.42],"1971":[2.33,3.67,4.33,5.67,2.67,6.67,4],"1972":[3.21,4.29,4.64,6.07,3.21,6.43,5.36],"1973":[2.89,2.11,3.42,6.58,3.42,5.26,4.21],"1974":[3.7,3.7,3.7,5.56,2.59,4.44,5.19],"1975":[2.4,4,4.4,6.4,4,5.2,5.6],"1976":[4.07,1.85,3.33,5.56,2.59,3.7,5.93],"1977":[3.26,3.48,3.04,5.65,2.83,5.43,5],"1978":[4.38,3.44,4.06,7.19,4.06,5.62,5],"1979":[3.72,2.79,4.19,6.98,3.72,6.28,2.56],"1980":[3.27,2.12,4.04,5,4.42,6.35,5.19],"1981":[3.24,2.16,3.78,5.68,2.7,7.03,3.78],"1982":[3.44,2.03,3.44,5,5,6.56,4.38],"1983":[2.15,1.69,3.23,6.92,3.54,7.23,5.38],"1984":[1.86,2.71,4.43,7,4.71,6.29,4.57],"1985":[3.04,2.86,3.39,5.36,3.93,6.43,6.07],"1986":[3.73,2.71,4.92,5.42,4.24,5.25,4.24],"1987":[3.83,2.72,3.7,6.79,3.95,6.42,5.56],"1988":[3.01,2.05,4.52,6.44,3.56,4.66,5.34],"1989":[2.74,2.47,3.56,7.26,4.66,6.03,4.66],"1990":[3.28,2.81,3.59,7.34,5,6.09,4.06],"1991":[2.67,2.33,3.33,5.67,5.67,6.5,5.17],"1992":[2.5,2.31,4.23,7.88,5.96,7.5,5.77],"1993":[3.81,2.54,3.02,6.35,6.03,5.4,4.92],"1994":[2.8,3.2,2.67,7.07,5.87,6.4,4.93],"1995":[3.41,2.84,3.18,6.7,4.2,6.48,4.43],"1996":[3.33,2.31,3.33,6.67,4.87,5.13,4.49],"1997":[3.74,2.2,3.08,7.03,4.95,6.15,5.38],"1998":[3.29,2.24,3.53,6.12,5.06,5.41,5.29],"1999":[2.86,2.02,4.52,6.9,4.76,5.83,5.36],"2000":[2.36,2.78,3.19,6.39,5.42,5.14,5.42],"2001":[2.76,2.55,4.29,6.84,4.49,4.9,5.31],"2002":[3.36,2.24,3.74,6.54,4.67,5.33,4.49],"2003":[3.75,1.7,2.61,6.36,4.43,6.02,3.98],"2004":[3.98,3.16,3.27,6.22,3.98,5.61,4.69],"2005":[3.21,3.75,3.48,7.23,4.46,5.98,5.62],"2006":[2.98,2.82,2.75,7.48,3.82,5.42,5.57],"2007":[3.23,2.74,3.31,6.85,4.76,6.29,5.16],"2008":[3.29,2.95,4.23,6.51,5.03,6.24,5.3],"2009":[3.46,2.16,4.22,6.59,4.43,6.49,4.59],"2010":[3.51,2.99,2.73,7.01,4.22,6.17,5],"2011":[3.43,2.42,3.48,6.91,4.38,5.67,4.89],"2012":[3.59,2.54,3.45,6.34,3.87,5.77,4.86],"2013":[3.64,2.73,3.52,6.48,4.15,5.8,4.49],"2014":[4.13,2.28,3.59,7.28,4.35,6.47,4.18],"2015":[3.15,2.54,3,6.48,3.57,5.07,4.37],"2016":[3.99,2.66,3.85,6.85,3.99,6.15,4.83],"2017":[4.74,1.92,3.85,6.67,3.85,6.28,4.23],"2018":[10,10,10,10,10,10,10],"2020":[0,0,0,10,10,0,10],"NaT":[2.86,2.86,0,4.29,5.71,1.43,0]}

class CardRadarChart extends Component {
    constructor(props)
    {
        super(props);
    }

  render() {
        var data={};
        if(this.props.yearsSelect.selected )
        {
            data ={
                labels: ['Alien', 'Monster', 'Space Opera', 'AI/Robot', 'Time Travel',  'Dystopian','Fantasy'],
                datasets: [
                    {
                        radius: 0,
                        label: this.props.yearsSelect.selected ,
                        backgroundColor: 'rgba(179,181,198,0.2)',
                        borderColor: '#2196f3',
                        pointBackgroundColor: 'rgba(179,181,198,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(179,181,198,1)',
                        data: sub_genre[this.props.yearsSelect.selected]
                    }
                ]
            }
            if(this.props.years.selected)
            {
                data.datasets.push({
                    radius: 0,
                    label: this.props.years.selected,
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: sub_genre[this.props.years.selected]
                })
            }
        }
        else if(this.props.years.selected)
        {
            data ={
                labels: ['Alien', 'Monster', 'Space Opera', 'AI/Robot', 'Time Travel',  'Dystopian','Fantasy'],
                datasets: [
                    {
                        radius: 0,
                        label: this.props.years.selected,
                        backgroundColor: 'rgba(179,181,198,0.2)',
                        borderColor: '#2196f3',
                        pointBackgroundColor: 'rgba(179,181,198,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(179,181,198,1)',
                        data: sub_genre[this.props.years.selected]
                    }
                ]
            }
        }
      const data2 = {
          labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
          datasets: [
              {
                  //radius: 0,
                  label: this.props.years.selected ? this.props.years.selected : (this.props.yearsSelect.selected? this.props.years.selected:null),
                  backgroundColor: 'rgba(179,181,198,0.2)',
                  borderColor: 'rgba(179,181,198,1)',
                  pointBackgroundColor: 'rgba(179,181,198,1)',
                  pointBorderColor: '#fff',
                  pointHoverBackgroundColor: '#fff',
                  pointHoverBorderColor: 'rgba(179,181,198,1)',
                  data: [65, 59, 90, 81, 56, 55, 40]
              },
              {
                  //radius: 0,
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

      const { classes } = this.props;
      const bull = <span className={classes.bullet}>•</span>;

      return (
      <div >
          <Card className={classes.card} style={{justifyContent: "center"}}>
              <div style={{height: '30vh',overflow: "hidden"}}>
                  {this.props.yearsSelect.index || this.props.years.index ? <Radar

                      options={{
                          animation:{
                              easing: 'linear',
                              duration: 500
                          },
                          scales: {
                              tickColor: "#eee",
                              ticks: {
                                  display: false
                              }

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

                      data={data} />:null}

              </div>

          </Card>
      </div>
    );
  }
}

export default withStyles(styles)(CardRadarChart);
var x=[]
var z1={}
x.map((node)=>{z1[node.year].push(node.alien); z1[node.year].push(node.monster); z1[node.year].push(node.space); z1[node.year].push(node.robot); z1[node.year].push(node.time_travel); z1[node.year].push(node.dystopian); z1[node.year].push(node.fantasy); })
