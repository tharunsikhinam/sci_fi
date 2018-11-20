import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RadarChart from '/Users/studentuser/workspace/react-radar-chart'


class App extends Component {
  render() {
    return (
      <div className="App">
        ABCD
        <div style={{height: '200px',width:'200px'}}>
        <RadarChart
            rungs = {10}
            classNames={{
              label: "X",
              scale: {
                display: 'none'
              }
            }}

            axisNames={['speed','attack','defense','x','y']} groups={{
            Player1: {
                color: 'blue',
                ratings: {
                    speed: 3,
                    attack: 5,
                    defense: 4,
                    x: 3,
                    y:1

                }
            },
            Player2: {
                color: 'green',
                ratings: {
                    speed: 2,
                    attack: 3,
                    defense: 3,
                    x: 4,
                    y: 5
                }
            }
        }}/>
        </div>
      </div>
    );
  }
}

export default App;
