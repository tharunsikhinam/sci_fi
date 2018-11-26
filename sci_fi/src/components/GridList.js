import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Launch';
import ReactStars from 'react-stars'


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
const tileData=[
    {
    img: "https://m.media-amazon.com/images/M/MV5BNDg2NjIxMDUyNF5BMl5BanBnXkFtZTgwMzEzNTE1NTM@._V1_UX140_CR0,0,140,209_AL_.jpg",
    title: "Bohemian Rhapsody",
    author: "CDE"
},{
    img: "https://m.media-amazon.com/images/M/MV5BMTcxMjUwNjQ5N15BMl5BanBnXkFtZTgwNjk4MzI4NjM@._V1_UY209_CR0,0,140,209_AL_.jpg",
    title: "ABC",
    author: "CDE"
},{
    img: "https://m.media-amazon.com/images/M/MV5BYzQ2ZmZjNTUtZTg5Ni00ZjYyLWI5ZDQtODA4NzZjNGE5MmFmXkEyXkFqcGdeQXVyMjAyNTEwOQ@@._V1_UY209_CR4,0,140,209_AL_.jpg",
    title: "ABC",
    author: "CDE"
},{
    img: "https://m.media-amazon.com/images/M/MV5BMTYyNzEyNDAzOV5BMl5BanBnXkFtZTgwNTk3NDczNjM@._V1_UY209_CR0,0,140,209_AL_.jpg",
    title: "ABC",
    author: "CDE"
},{
    img: "https://m.media-amazon.com/images/M/MV5BYmE5Yjg0MzktYzgzMi00YTFiLWJjYTItY2M5MmI1ODI4MDY3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX140_CR0,0,140,209_AL_.jpg",
    title: "ABC",
    author: "CDE"
},{
        img: "https://m.media-amazon.com/images/M/MV5BNDg2NjIxMDUyNF5BMl5BanBnXkFtZTgwMzEzNTE1NTM@._V1_UX140_CR0,0,140,209_AL_.jpg",
        title: "Bohemian Rhapsody",
        author: "CDE"
    },{
        img: "https://m.media-amazon.com/images/M/MV5BMTcxMjUwNjQ5N15BMl5BanBnXkFtZTgwNjk4MzI4NjM@._V1_UY209_CR0,0,140,209_AL_.jpg",
        title: "ABC",
        author: "CDE"
    },{
        img: "https://m.media-amazon.com/images/M/MV5BYzQ2ZmZjNTUtZTg5Ni00ZjYyLWI5ZDQtODA4NzZjNGE5MmFmXkEyXkFqcGdeQXVyMjAyNTEwOQ@@._V1_UY209_CR4,0,140,209_AL_.jpg",
        title: "ABC",
        author: "CDE"
    },{
        img: "https://m.media-amazon.com/images/M/MV5BMTYyNzEyNDAzOV5BMl5BanBnXkFtZTgwNTk3NDczNjM@._V1_UY209_CR0,0,140,209_AL_.jpg",
        title: "ABC",
        author: "CDE"
    },{
        img: "https://m.media-amazon.com/images/M/MV5BYmE5Yjg0MzktYzgzMi00YTFiLWJjYTItY2M5MmI1ODI4MDY3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX140_CR0,0,140,209_AL_.jpg",
        title: "ABC",
        author: "CDE"
    },]
class SimpleAppBar extends Component {

  render() {
      const {classes} = this.props;
    return (
        <div className={classes.root}>
            <GridList cellHeight={200} cols={6} className={classes.gridList}>

                {tileData.map(tile => (
                    <GridListTile
                        classes={{
                            tile: {
                                width: '100px'
                            }
                        }}
                        key={tile.img}>
                        <img
                            style={{maxWidth: '100%', maxHeight: '100%'}}
                            src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            classes={{
                                title:{
                                  fontColor: 'black'
                                }
                            }}
                            title={<span style={{color: "#eee",fontSize: "0.8rem"}} color={"black"} >{tile.title}</span>}
                            subtitle={<ReactStars
                                value={3}
                                edit={false}
                            />}
                            actionIcon={
                                <IconButton className={classes.icon}>
                                    <InfoIcon onClick={this.props.handleTileClick}/>
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
  }
}

export default withStyles(styles)(SimpleAppBar);
