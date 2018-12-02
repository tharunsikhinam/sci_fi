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
import ExpandMore from '@material-ui/icons/Clear';
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
        width:150,
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginBottom: -(theme.spacing.unit*4)
    },
    textField: {
        width: 400,
        marginTop: -15, 
        marginLeft: theme.spacing.unit*5,
        marginRight: theme.spacing.unit,
        marginBottom: -(theme.spacing.unit*4)
    },
    movieName: {
        fontSize : "22pt",
        width: '100%',
        marginBottom: '10px',
        textDecoration: 'underline',
    },
    picsum: {
        width: '100%',
        bottom: '10px',
        height:'400px',
        paddingLeft: '15px',
    },
    pic:{
        width: '258px',
        float: 'left',
        marginRight: '20px',
        border: '4px solid white'
    },
    summary: {
        float: 'right',
        width: '73%',
        marginRight: '20px'
    },
    abwatch:{
        width:'73%',
        marginRight: '20px',
        float: 'right',
    },
    about:{
        
        width: '50%',
        float: 'left'
    },
    watch:{
        width: '15%',
        float: 'right',
    },
    year:{
        fontSize: '18pt'
    }
});

class Modal extends Component {
    constructor(props)
    {        
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {name: null,tile: false, expanded:false,filterValue:"All",filteredMovies:null,filtered: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleTileClick = this.handleTileClick.bind(this);
        this.handleGridClick = this.handleGridClick.bind(this);
        this.handleInnerModalClose = this.handleInnerModalClose.bind(this);
        this.handleCloseClick = this.handleCloseClick.bind(this);
        this.handleDialogClose = this.handleDialogClose.bind(this);
        this.handleDialogOpen = this.handleDialogOpen.bind(this);
        var title = null;
        var author = null;
        var src = null;
        var summary = null;
        this.defaultVal = "All Movies";
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
    handleGridClick(src,title,author,summary,rating,genre)
    {
        this.src = src;
        this.title = title;
        this.author = author;
        this.summary = summary;
        this.rating = rating;
        this.genre = genre.split('/');
        this.genre.splice(-1,1);
        this.genre = [...new Set(this.genre)];
        this.genre = this.genre.join(', ')
        this.genre = this.genre.replace("_"," ")
        this.setState({expanded : !this.state.expanded})
        
    }
    handleCloseClick(){
        this.setState({expanded : !this.state.expanded})
    }
    handleDialogClose(){
        this.setState({expanded : false,filterValue: "All", filteredMovies:null,filtered:false})
        
    }
    handleDialogOpen(){
        this.setState({expanded : false,filterValue: "All", filteredMovies:null,filtered:false})
       // this.props.onEnter();
    }
  render() {
      const {classes} = this.props;
      if(this.state.filteredMovies==null && this.state.filterValue == "All"){
          this.state.filteredMovies = this.props.allMovies;
        }
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
              onEnter = {this.handleDialogOpen}
              onClose={this.props.onClose}
              onExited={this.handleDialogClose}
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
                  <h1 style={{paddingLeft:"36px", display:"inline"}}>
                  Sci-fi Films <div style={{display:"inline"}} className={classes.year}>({this.props.year})</div>
                  </h1>
                  
                  <Fade in={!this.state.expanded} >
                  <div style={{display:"inline"}}>
                 
                  
                  
                      <FormControl className={classes.formControl} >
                          <Select                           
                              autoWidth={true}
                              value={this.state.filterValue}
                              onChange={(e)=>{
                                let filtMovies = this.props.allMovies
                                  if(e.target.value!="All")
                                 { 
                                     filtMovies = []
                                  this.props.allMovies.forEach(element => {
                                    var sub = element.subGenre;
                                    if(sub.includes(e.target.value)){
                                        filtMovies.push(element)
                                    }
                                  });
                                  
                                
                              }
                              else{
                                filtMovies = this.props.allMovies
                              }
                              this.setState({filterValue:e.target.value,filteredMovies:filtMovies,filtered:true});
                            }}

                              align="left"
                              className={classes.selectEmpty}
                          >
                              <MenuItem style={{width:"150px"}} value="All">
                                  All Movies
                              </MenuItem>
                              <MenuItem style={{width:"150px"}} value="alien">Alien</MenuItem>
                              <MenuItem style={{width:"150px"}} value="fantasy">Fantasy</MenuItem>
                              <MenuItem style={{width:"150px"}} value="dystopian">Dystopian</MenuItem>
                              <MenuItem style={{width:"150px"}} value="time_travel">Time Travel</MenuItem>
                              <MenuItem style={{width:"150px"}} value="robot">AI/Robot</MenuItem>
                              <MenuItem style={{width:"150px"}} value="space">Space</MenuItem>
                              <MenuItem style={{width:"150px"}} value="monster">Monster</MenuItem>
                          </Select>

                      </FormControl>
                      
                      
                      </div>
                      </Fade>
                    

              </DialogTitle>
              <DialogContent aria-checked={true}>
                  <DialogContentText>
                  <Collapse in={!this.state.expanded} timeout="auto" unmountOnExit>
                  <GridList allMovies={this.props.allMovies} filteredMovies={this.state.filteredMovies} handleTileClick={this.handleTileClick} handleGridClick={this.handleGridClick}/>
                     </Collapse>
                    <Card>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
          <div >  
              <p>
          <IconButton className={classes.icon}>
                                    <ExpandMore onClick={this.handleCloseClick}/>
                                </IconButton>
                                </p>
                             
           
            <div className={classes.picsum}> 
            <div className={classes.pic}>
            <img align="top" borderColor="white"
                            style={{  width:"250px", borderColor: 'rgba(255,255,255,255)', border: '3'}}
                            src={this.src} alt={this.title} /> 
            </div>
            <div className={classes.abwatch}>

                            <h1 style={{textDecoration: 'underline'}}>{this.title}</h1>
            <div className={classes.about}>
            <table classes={{borderCollapse:"collapse",borderSpacing:"0"}}>
            <col width="130"></col>
  <col width="130"></col>
  <tr>
    <td className="tg-qtf5" valign="top">
             <b> Language : </b>
            </td>
    <td className="tg-qtf5">{this.author}</td>
  </tr>
  <tr>
    <td className="tg-qtf5" valign="top"> <b>Ratings :</b></td>
    <td className="tg-qtf5"> <ReactStars
                                value={this.rating}
                                edit={false}
                            />
            </td>
  </tr>
  <tr>
    <td className="tg-qtf5" valign="top"><b>Sub-genres :</b></td>
    <td className="tg-qtf5">{this.genre}</td>
  </tr>
</table>
            
            </div>
            <div className={classes.watch}>
            <IconButton align="right" style={{fontSize: "11pt"}} onClick={()=> this.handleGoogleSearch(this.title)}>
            Google Search
                                    <InfoIcon />
                                </IconButton>
            </div>
            </div>
                <div className={classes.summary}>
                            <h3>Summary:</h3>
                            <div style={{fontSize:"14pt"}}>
                            {this.summary}
                            </div>
                            </div>
                   
            
            </div>
            
            
            </div>
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
