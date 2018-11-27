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
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MailIcon from '@material-ui/icons/Mail'
import TrendingIcon from '@material-ui/icons/TrendingUp'
import MoneyIcon from '@material-ui/icons/AttachMoney'
import StarIcon from '@material-ui/icons/Stars'
import Divider from '@material-ui/core/Divider'



const years = [1900,1901,1902,1903,1904,1905,1906,1907,1908,1909,1910,1911,1912,1913,1914,1915,1916,1917,1918,1919,1920,1921,1922,1923,1924,1925,1926,1927,1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016];


class App extends Component {

  constructor(props)
  {
      super(props);
      this.state = {
          chartType: "movies",
          sidebar: false,
          modal:false,
          drawer: false,
          years: {
              selected: null,
              index: null
          },
          yearsSelect: {
              selected: null,
              index: null
          }
          };
      this.handleModalClose = this.handleModalClose.bind(this);
      this.handleExploreClick = this.handleExploreClick.bind(this);
      this.handleMenuClick = this.handleMenuClick.bind(this);
      this.toggleDrawer = this.toggleDrawer.bind(this);
      this.onChartHover = this.onChartHover.bind(this);
      this.onChartRemoveHover = this.onChartRemoveHover.bind(this);
      this.onChartClick = this.onChartClick.bind(this);
      this.onChartClickRemove = this.onChartClickRemove.bind(this);

  }
  handleMenuClick()
  {
      this.setState({drawer: true})
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
  toggleDrawer()
  {
      this.setState({drawer: false})
  }
  onChartClick(index)
  {
      this.setState({
          yearsSelect: {
              selected: years[index],
              index: index
          }
      })
  }
  onChartClickRemove(index)
  {
      this.setState({
          yearsSelect: {
              selected: null,
              index: null
          }
      })
  }

  onChartHover(index)
  {
      this.setState({years:{
          selected: years[index],
          index: index
          }})
  }
  onChartRemoveHover(index)
  {
      this.setState({years:{
          selected: null,
          index: null
          }
      })
  }




  render() {

      const sideList = (
          <div className={{ list: {
                  width: 250,
              }}}>
              <List>
                  <Divider/>
                  <ListItem button key={"text"}>
                          <ListItemIcon><TrendingIcon/></ListItemIcon>
                          <ListItemText primary={"Movies by year"} />
                  </ListItem>
                  <Divider/>
                  <ListItem button key={"text"}>
                      <ListItemIcon><MoneyIcon/></ListItemIcon>
                      <ListItemText primary={"Top Grossing"} />
                  </ListItem>
                  <Divider/>
                  <ListItem button key={"Top Rated"}>
                      <ListItemIcon><StarIcon/></ListItemIcon>
                      <ListItemText primary={"Top Rated"} />
                  </ListItem>
                  <Divider/>
              </List>
          </div>
      )
    return (
      <div className="App">



          {/*Modal*/}
          <Modal open={this.state.modal} onClose={this.handleModalClose}/>

          {/*Drawer*/}
          <Drawer open={this.state.drawer} onClose={this.toggleDrawer}>
              <div
                  tabIndex={0}
                  role="button"
                  onClick={this.toggleDrawer}
                  onKeyDown={this.toggleDrawer}
              >
                  {sideList}
              </div>
          </Drawer>


          <div id="container">
              <div id="top_div">
                  <SimpleAppBar handleMenuClick = {this.handleMenuClick}/>

                  <div style={{width: "50%",paddingTop: '20px', float:"left"}}>
                      <CardDisplay
                          yearsSelect = {this.state.yearsSelect}
                          years = {this.state.years}
                          onExploreClick={this.handleExploreClick}/>
                  </div>

                  <div style={{width: "50%",paddingLeft: '20px',paddingTop: '20px', float:"right"}}>
                      <CardRadarChart
                          yearsSelect = {this.state.yearsSelect}
                          years = {this.state.years}
                      />
                  </div>
              </div>
              <div id="bottom_div" >
                  <div style={{marginTop: '-20px',paddingLeft: '20px',paddingRight: '20px'}}>
                  <BarChart
                      years = {this.state.years}
                      yearsSelect = {this.state.yearsSelect}
                      onChartClick = {this.onChartClick}
                      onChartClickRemove = {this.onChartClickRemove}
                      onChartHover={this.onChartHover}
                      onChartRemoveHover = {this.onChartRemoveHover}
                  />
                  </div>
                  {/*<ResponsiveBarChart/>*/}
              </div>
          </div>
      </div>
    );
  }
}

export default App;
