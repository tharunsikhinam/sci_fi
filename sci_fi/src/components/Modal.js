import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import GridList from './GridList'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl'
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button'

function Transition(props) {
    return <Slide direction="left" {...props} />;
}
function TransitionInner(props) {
    return <Slide direction="down" {...props} />;
}

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        border: 2,
        borderBottomColor: "#eee"
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: -15,
        marginBottom: -(theme.spacing.unit*4)
    },
    textField: {
        width: 400,
        marginTop: -15,
        marginLeft: theme.spacing.unit*5,
        marginRight: theme.spacing.unit,
        marginBottom: -(theme.spacing.unit*4)
    }
});

class Modal extends Component {

    constructor(props)
    {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {name: 'abc',tile: false}
        this.handleChange = this.handleChange.bind(this);
        this.handleTileClick = this.handleTileClick.bind(this);
        this.handleInnerModalClose = this.handleInnerModalClose.bind(this);
    }
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    handleInnerModalClose()
    {
        this.setState({tile: false})
    }
    handleTileClick()
    {
        console.log("reached here");
        this.setState({tile: true})
    }

  render() {
      const {classes} = this.props;
    return (
      <div >
          <Dialog
              TransitionComponent={Transition}

              classes={{
                  root: classes.title
              }}
              maxWidth={"lg"}
              fullWidth={true}
              className={classes.dialog}
              open={this.props.open}
              onClose={this.props.onClose}
              scroll={"paper"}
              aria-labelledby="scroll-dialog-title"
          >
              <DialogTitle
                  classes={{
                      root: {
                          borderBottomColor: '#eee'
                      }
                  }}
                  id="scroll-dialog-title">
                  Sci-fi Films 1985

                  <TextField
                      id="outlined-name"
                      label="Search by title, actor, director"

                      className={classes.textField}
                      value={this.state.name}
                      onChange={this.handleChange('name')}
                      margin="normal"
                      variant="outlined"
                  />


                      <FormControl className={classes.formControl}>
                          <Select
                              autoWidth={true}
                              value={"All Movies"}
                              onChange={()=>{

                              }}

                              name="age"
                              className={classes.selectEmpty}
                          >
                              <MenuItem value="All Movies">
                                  All Movies
                              </MenuItem>
                              <MenuItem value={10}>Space</MenuItem>
                              <MenuItem value={20}>Robot</MenuItem>
                              <MenuItem value={30}>Alien</MenuItem>
                          </Select>

                      </FormControl>

              </DialogTitle>
              <DialogContent aria-checked={true}>
                  <DialogContentText>
                    <GridList handleTileClick={this.handleTileClick}/>
                  </DialogContentText>
              </DialogContent>
              <DialogActions>

              </DialogActions>
          </Dialog>


          {/*Inner DIALOG*/}

          <Dialog
              open={this.state.tile}
              TransitionComponent={TransitionInner}
              onClose={this.handleInnerModalClose}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
          >
              <DialogTitle id="alert-dialog-slide-title">
                  {"Movie Name"}
              </DialogTitle>
              <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                      Summary
                  </DialogContentText>
              </DialogContent>
              <DialogActions>
                  <Button   color="primary">
                      Watch Trailer
                  </Button>

              </DialogActions>
          </Dialog>

      </div>
    );
  }
}

export default withStyles(styles)(Modal);
