import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ExpandMore from '@material-ui/icons/Clear';


const styles = {
    card: {
        marginLeft: '4vw',
        display: 'inherit',
        width: '50vw',
        transitionDuration: '0.3s',
        height: '35vh'

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    pos: {
        marginBottom: 0,
    },
};

class CardDisplay extends Component {

    constructor(props)
    {
        super(props);
    }
  render() {
      console.log(this.props)
      const { classes } = this.props;
      const bull = <span className={classes.bullet}>•</span>;

      return (
      <div >
          <Card className={classes.card}>
              <CardContent>
                  <Typography
                      style={{
                          fontFamily: "futura-heavy"
                      }}
                      variant="h5" component="h3" className={classes.title} color="textSecondary" gutterBottom>
                       {this.props.yearsSelect.selected ?
                           "Top Rated Films" + "("+this.props.yearsSelect.selected+")" :
                          (this.props.years.selected? "Top Rated Films" + "("+this.props.years.selected+")":null)}
                  </Typography>
                  <Typography
                      style={{
                          fontFamily: "futura-normal"
                      }}
                      variant="h5" component="h5">
                      {this.props.yearsSelect.selected ?
                          <div>
                              {this.props.allMovies[this.props.yearsSelect.selected].map((node,index)=>{
                                  if(index<3)
                                      return <p style={{fontSize: 20,
                                          fontFamily: "futura-medium-bt",
                                          marginBottom: 0,marginTop: 5}}>{index+1}) {node.originalTitle}</p>
                              })}
                          </div> :
                          (this.props.years.selected?<div>
                              {this.props.allMovies[this.props.years.selected].map((node,index)=>{
                                  if(index<3)
                                      return <p style={{
                                          fontFamily: "futura-medium-bt",
                                          fontSize: 20,marginBottom: 0,marginTop: 5}}>{index+1}) {node.originalTitle}</p>
                              })}
                          </div> :<div style={{fontSize:"1.3vw",color:"#d3d3d3"}}>
                          Science Fiction is often popularly associated with expensive special effects, extravagant set stages, and supernatural stories. While SciFi does portray stories that are fictional, at its core it is a very introspective genre. 
                          <br /> CineFix said it best: "SciFi is using an exploration of where we might be, to explore where it seems like we are heading, to reveal where we exactly are."
                          <div style={{  marginTop:"25px",fontSize:"1.3vw",color:"white"}}><b>Click/Hover over a bar to explore more...</b></div>
                          </div>)}

                  </Typography>


              </CardContent>
              <CardActions style={{justifyContent: "center",paddingTop: 0,marginTop: 0}}>
                  {this.props.yearsSelect.selected?
                  <Button
                      style={{
                          backgroundColor: '#2196f3',
                          fontFamily: 'futura-medium-bt'
                      }}
                  variant="contained"
                  color="primary"
                  onClick={this.props.onExploreClick}
                      size="large"><a style={{fontFamily: 'futura-medium-bt'}}>Explore</a></Button>:null}
              </CardActions>
          </Card>
      </div>
    );
  }
}

export default withStyles(styles)(CardDisplay);
