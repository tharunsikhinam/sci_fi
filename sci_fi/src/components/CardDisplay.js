import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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
                      variant="h4" component="h2" className={classes.title} color="textSecondary" gutterBottom>
                      {this.props.yearsSelect.selected ?
                          this.props.yearsSelect.selected :
                          (this.props.years.selected? this.props.years.selected:null)}
                  </Typography>
                  <Typography
                      style={{
                          fontFamily: "futura-normal"
                      }}
                      variant="h5" component="h3">
                      {this.props.yearsSelect.selected ?
                          <div>
                              1. Interstellar
                              <br/>
                              2. Something else
                              <br/>
                              3. And something else
                              <br/>
                          </div> :
                          (this.props.years.selected?<div>
                              1. Interstellar
                              <br/>
                              2. Something else
                              <br/>
                              3. And something else
                              <br/>
                          </div> :<div>
                              Click/Hover over a bar to explore more
                          </div>)}

                  </Typography>


              </CardContent>
              <CardActions style={{justifyContent: "center"}}>
                  {this.props.yearsSelect.selected?
                  <Button
                  variant="contained"
                  color="primary"
                  onClick={this.props.onExploreClick}
                      size="large">Explore</Button>:null}
              </CardActions>
          </Card>
      </div>
    );
  }
}

export default withStyles(styles)(CardDisplay);
