import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleAppBar from "./components/SimpleAppBar";
import ResponsiveBarChart from "./components/ResponsiveBarChart";
import BarChart from "./components/BarChart";
import CardDisplay from "./components/CardDisplay";
import Card from "@material-ui/core/es/Card/Card";
import CardRadarChart from "./components/CardRadarChart";
import Modal from './components/Modal'


class App extends Component {

  constructor()
  {
      super();
      this.state = {sidebar: false,modal:false};
      this.handleModalClose = this.handleModalClose.bind(this);
      this.handleExploreClick = this.handleExploreClick.bind(this);

  }
  handleExploreClick(year)
  {
      console.log("itworked")
      this.setState({modal: true})
  }
  handleModalClose()
  {
      this.setState({modal: false})
  }




  render() {
    return (
      <div className="App">

          <Modal open={this.state.modal} onClose={this.handleModalClose}/>

          <div id="container">
              <div id="top_div">
                  <SimpleAppBar/>
                  <div style={{width: "50%",paddingTop: '20px', float:"left"}}>
                  <CardDisplay onExploreClick={this.handleExploreClick}/>
                  </div>

                  <div style={{width: "50%",paddingLeft: '20px',paddingTop: '20px', float:"right"}}>

                       <CardRadarChart/>
                  </div>
              </div>
              <div id="bottom_div" >
                  <div style={{marginTop: '-20px',paddingLeft: '20px',paddingRight: '20px'}}>
                  <BarChart/>
                  </div>
                  {/*<ResponsiveBarChart/>*/}
              </div>
          </div>

        {/*<div style={{height: '200px',width:'200px'}}>*/}
        {/*<RadarChart*/}
            {/*rungs = {10}*/}
            {/*classNames={{*/}
              {/*label: "X",*/}
              {/*scale: {*/}
                {/*display: 'none'*/}
              {/*}*/}
            {/*}}*/}

            {/*axisNames={['speed','attack','defense','x','y']}*/}
            {/*groups={{*/}
            {/*Player1: {*/}
                {/*color: 'blue',*/}
                {/*ratings: {*/}
                    {/*speed: 3,*/}
                    {/*attack: 5,*/}
                    {/*defense: 4,*/}
                    {/*x: 3,*/}
                    {/*y:1*/}

                {/*}*/}
            {/*},*/}
            {/*Player2: {*/}
                {/*color: 'green',*/}
                {/*ratings: {*/}
                    {/*speed: 2,*/}
                    {/*attack: 3,*/}
                    {/*defense: 3,*/}
                    {/*x: 4,*/}
                    {/*y: 5*/}
                {/*}*/}
            {/*}*/}
        {/*}}/>*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default App;
