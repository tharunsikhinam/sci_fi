import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Icon from "@material-ui/core/es/Icon/Icon";


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
                  <IconButton className={classes.menuButton} src="/SciFi_Logo_FINAL-01.png">
                      <img src="/SciFi_Logo_FINAL-01.png"
                           height={40}
                           width={40}
                          onClick={this.props.handleMenuClick}/>
                  </IconButton>
                  {/*<img*/}
                      {/*height={40}*/}
                      {/*width={40}*/}
                      {/*src="/SciFi_Logo_FINAL-01.png"/>*/}
                  <Typography variant="h6"
                              style={{
                                  fontFamily: "futura-extra-black"
                              }}
                              color="inherit">
                      Sci-Fi Through The Ages
                  </Typography>
              </Toolbar>
          </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(SimpleAppBar);
