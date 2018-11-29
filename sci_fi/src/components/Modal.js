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
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl'
import Grow from '@material-ui/core/Grow';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Fade from '@material-ui/core/Fade';
import ReactStars from 'react-stars';
import InfoIcon from '@material-ui/icons/Launch';
import SearchIcon from '@material-ui/icons/Search';
function Transition(props) {
    return <Grow in="true" {...props} />;
}


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        width:300,
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        border: 2,
        borderBottomColor: "#eee"
    },
    formControl: {
        width:300,
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
        this.state = {name: null,tile: false, expanded:false};
        this.handleChange = this.handleChange.bind(this);
        this.handleTileClick = this.handleTileClick.bind(this);
        this.handleGridClick = this.handleGridClick.bind(this);
        this.handleInnerModalClose = this.handleInnerModalClose.bind(this);
        this.handleCloseClick = this.handleCloseClick.bind(this);
        var title = null;
        var author = null;
        var src = null;
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
    handleGoogleSearch(q){
        window.open('http://google.com/search?q='+q)
    }
    handleTileClick()
    {
        console.log("reached here");
        this.setState({tile: true})
    }
    handleGridClick(src,title,author)
    {
        this.src = src;
        this.title = title;
        this.author = author;
        console.log("reached grid here");
        console.log(this.state.expanded);
        this.setState({expanded : !this.state.expanded})
        
    }
    handleCloseClick(){
        this.setState({expanded : !this.state.expanded})
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
                  <h1 style={{display:"inline"}}>
                  Sci-fi Films {this.props.year}
                  </h1>
                  <Fade in={!this.state.expanded} >
                  <TextField                     
                      label="Search by title, actor, director"
                      className={classes.textField}
                      value={this.state.name}
                      onChange={this.handleChange('name')}
                      margin="normal"
                      variant="outlined"
                      InputProps={{
                        endAdornment: <InputAdornment position="end"><SearchIcon /></InputAdornment>
                      }}
                     
                  />
                  </Fade>
                  <Fade in={!this.state.expanded} >
                  <div align="right">
                      <FormControl className={classes.formControl} >
                          <Select                           
                              autoWidth={true}
                              value={"All Movies"}
                              onChange={()=>{

                              }}

                              align="left"
                              className={classes.selectEmpty}
                          >
                              <MenuItem style={{width:"300px"}} value="All Movies">
                                  All Movies
                              </MenuItem>
                              <MenuItem style={{width:"300px"}} value={10}>Space</MenuItem>
                              <MenuItem style={{width:"300px"}} value={20}>Robot</MenuItem>
                              <MenuItem style={{width:"300px"}} value={30}>Alien</MenuItem>
                          </Select>

                      </FormControl>
                      </div>
                      </Fade>
                    

              </DialogTitle>
              <DialogContent aria-checked={true}>
                  <DialogContentText>
                  <Collapse in={!this.state.expanded} timeout="auto" unmountOnExit>
                    <GridList handleTileClick={this.handleTileClick} handleGridClick={this.handleGridClick}/>
                    </Collapse>
                    <Card>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
              <p>
          <IconButton className={classes.icon}>
                                    <ExpandMore onClick={this.handleCloseClick}/>
                                </IconButton>
                                </p>
                               
            <div>
            <h3>
                Summary: <img align="right"
                            style={{  width:"200px", borderColor: 'rgba(255,255,255,255)', border: '3px'}}
                            src={this.src} alt={this.title} />
                </h3>
            <div  style={{maxWidth: '75%'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
            </div>
            
            </div>
            <div >
                <h4 > Ratings: 
            <ReactStars
                                value={3}
                                edit={false}
                            />
            
            </h4>
            </div>
            <div >
            <IconButton style={{fontSize: "11pt"}} onClick={()=> this.handleGoogleSearch(this.title)}>
            Google Search
                                    <InfoIcon />
                                </IconButton>
            </div>
            <h2 align="right" >{this.title}</h2>
            <h4 align="right" >
              {this.author}
            </h4>
          </CardContent>
        </Collapse>
                        </Card>
                  </DialogContentText>
              </DialogContent>
              <DialogActions>

              </DialogActions>
          </Dialog>

      </div>
    );
  }
}

export default withStyles(styles)(Modal);
