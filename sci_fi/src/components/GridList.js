import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ReactStars from 'react-stars'
import GridListTileBar from '@material-ui/core/GridListTileBar';
import  Zoom  from '@material-ui/core/Zoom';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: "100vw",
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});

class SimpleAppBar extends Component {
    constructor(props)
    {       
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.tiledata1 = this.props.allMovies;
        this.tiledata2 = this.props.filteredMovies;
    }
  
handleClick(tile,src,title,author,summary,ratings,genre){
     this.props.handleGridClick(src,title,author,summary,ratings,genre)
}
handleMouseClick(e){
    e.target.style.opacity = "1"
}
handleMouseLeave(e){
    e.target.style.opacity = "0.6"
}
setVal(t){
  
    if(this.tiledata2.includes(t)){
       
        return true
    }
    else{
       
        return  false
    }
    return true
}

  render() {
      const {classes} = this.props;
        this.tiledata1 = this.props.allMovies;
        this.tiledata2 = this.props.filteredMovies;
    return (
        <div className={classes.root}>
            <GridList cellHeight={300} cols={6} className={classes.gridList}>

                {this.tiledata1.map(tile => (
                   <Zoom in= {this.setVal.call(this,tile)} unmountOnExit>
                    <GridListTile  onClick={() => this.handleClick(tile,tile.posterPath,tile.originalTitle,tile.language,tile.summary,tile.rating,tile.subGenre)} 
                        classes={{
                            tile: {
                                width: '200px',
                                height: '297px'
                            }
                        }}
                        key={tile.posterPath}>
                        <img onMouseEnter={this.handleMouseClick} onMouseLeave={this.handleMouseLeave}
                            style={{maxWidth: '100%', maxHeight: '100%',width: '200px',height: '297px',
                        opacity:'0.6'}}
                            src={tile.posterPath} alt={tile.originalTitle} />
                            <GridListTileBar
                            classes={{
                                marginLeft: 5,
                                marginRight: 5,
                                title:{
                                  fontColor: 'black'
                                }
                            }}
                            title={<span style={{color: "#eee",fontSize: "0.8rem"}}   >{tile.originalTitle}</span>}
                            subtitle={<ReactStars
                                value={tile.rating}
                                edit={false}
                            />}
                            />
                    </GridListTile>
                    </Zoom>
                ))}
            </GridList>
        </div>
    );
  }
}

export default withStyles(styles)(SimpleAppBar);
