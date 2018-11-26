import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const styles = {
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class SimpleAppBar extends Component {

  render() {
      const {classes} = this.props;
    return (
      <div className={classes.root}>
          <AppBar position="static" color="default">
              <Toolbar>
                  <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                      <MenuIcon />
                  </IconButton>
                  <Typography variant="h6"  color="inherit">
                      Sci-Fi Through The Ages
                  </Typography>
              </Toolbar>
          </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(SimpleAppBar);
