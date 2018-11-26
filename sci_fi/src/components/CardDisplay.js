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
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
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
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                      Top Rated Films
                  </Typography>
                  <Typography variant="h5" component="h2">
                      1. Interstellar
                      <br/>
                      2. Something else
                      <br/>
                      3. And something else
                      <br/>
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                      adjective
                  </Typography>

              </CardContent>
              <CardActions style={{justifyContent: "center"}}>
                  <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.props.onExploreClick}
                      size="large">Explore</Button>
              </CardActions>
          </Card>
      </div>
    );
  }
}

export default withStyles(styles)(CardDisplay);
