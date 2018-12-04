import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactStars from "react-stars";
import IconButton from "@material-ui/core/IconButton/IconButton";
import InfoIcon from '@material-ui/icons/Launch';


const styles = {
    card: {
        marginLeft: '4vw',
        display: 'inherit',
        width: '50vw',
        transitionDuration: '0.3s',
        height: '35vh',

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    pos: {
        marginBottom: 0,
    },
    movieName: {
        fontSize : "22pt",
        width: '100%',
        marginBottom: '10px',
        textDecoration: 'underline',
    },
    picsum: {
        width: '100%',
        height:'20vw',
    },
    pic:{
        width: '25%',
        height: '80%',
        float: 'left',
        marginRight: '5px',
        border: '4px solid white'
    },
    summary: {
        textAlign: 'left',
        float: 'right',
        width: '70%',
        marginRight: '5px',
        margingTop: '5px'
    },
    abwatch:{
        width:'70%',
        marginRight: '5x',
        float: 'right',
        textAlign: "left",
    },
    about:{

        width: '100%',
        float: 'left'
    },
    watch:{
        float: 'right',
    },
    year:{
        fontSize: '18pt'
    }
};

const grossing = {"tt0499549":{"title":"Avatar","language":"en","overview":"In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.","runtime":162,"year":2009,"poster":"http://image.tmdb.org/t/p/w185//kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg","rating":3.9},"tt2488496":{"title":"Star Wars: The Force Awakens","language":"en","overview":"Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.","runtime":136,"year":2015,"poster":"http://image.tmdb.org/t/p/w185//weUSwMdQIa3NaXVzwUoIIcAi85d.jpg","rating":4},"tt0848228":{"title":"The Avengers","language":"en","overview":"When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!","runtime":143,"year":2012,"poster":"http://image.tmdb.org/t/p/w185//cezWGskPY5x7GaglTTRN4Fugfb8.jpg","rating":4.05},"tt0369610":{"title":"Jurassic World","language":"en","overview":"Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning dinosaur theme park, Jurassic World, as originally envisioned by John Hammond.","runtime":124,"year":2015,"poster":"http://image.tmdb.org/t/p/w185//jjBgi2r5cRt36xF6iNUEhzscEcb.jpg","rating":3.5},"tt1201607":{"title":"Harry Potter and the Deathly Hallows: Part 2","language":"en","overview":"Harry, Ron and Hermione continue their quest to vanquish the evil Voldemort once and for all. Just as things begin to look hopeless for the young wizards, Harry discovers a trio of magical objects that endow him with powers to rival Voldemort's formidable skills.","runtime":130,"year":2011,"poster":"http://image.tmdb.org/t/p/w185//fTplI1NCSuEDP4ITLcTps739fcC.jpg","rating":4.05},"tt3498820":{"title":"Captain America: Civil War","language":"en","overview":"Following the events of Age of Ultron, the collective governments of the world pass an act designed to regulate all superhuman activity. This polarizes opinion amongst the Avengers, causing two factions to side with Iron Man or Captain America, which causes an epic battle between former allies.","runtime":147,"year":2016,"poster":"http://image.tmdb.org/t/p/w185//kSBXou5Ac7vEqKd97wotJumyJvU.jpg","rating":3.9},"tt0167260":{"title":"The Lord of the Rings: The Return of the King","language":"en","overview":"Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam bring the ring closer to the heart of Mordor, the dark lord's realm.","runtime":201,"year":2003,"poster":"http://image.tmdb.org/t/p/w185//uexxR7Kw1qYbZk0RYaF9Rx5ykbj.jpg","rating":4.45},"tt3748528":{"title":"Rogue One: A Star Wars Story","language":"en","overview":"A rogue band of resistance fighters unite for a mission to steal the Death Star plans and bring a new hope to the galaxy.","runtime":133,"year":2016,"poster":"http://image.tmdb.org/t/p/w185//qjiskwlV1qQzRCjpV0cL9pEMF9a.jpg","rating":3.9},"tt0083866":{"title":"E.T. the Extra-Terrestrial","language":"en","overview":"After a gentle alien becomes stranded on Earth, the being is discovered and befriended by a young boy named Elliott. Bringing the extraterrestrial into his suburban California house, Elliott introduces E.T., as the alien is dubbed, to his brother and his little sister, Gertie, and the children decide to keep its existence a secret.","runtime":115,"year":1982,"poster":"http://image.tmdb.org/t/p/w185//8htLKK03TJjKZOXJgihZCu8v0P.jpg","rating":3.95},"tt1375666":{"title":"Inception","language":"en","overview":"Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.","runtime":148,"year":2010,"poster":"http://image.tmdb.org/t/p/w185//qmDpIHrmpJINaRKAfWQfftjCdyi.jpg","rating":4.4}};
class CardDisplayGrossing extends Component {

    constructor(props)
    {
        super(props);
    }
    handleGoogleSearch(q) {
        window.open('http://google.com/search?q=' + q)
    }
  render() {
      console.log(this.props)
      const { classes } = this.props;
      const bull = <span className={classes.bullet}>•</span>;

      return (
      <div >
          <Card className={classes.card}>
              <CardContent className={{
              }}>
                  <Typography
                      style={{
                          fontFamily: "futura-heavy"
                      }}
                      variant="h5" component="h3" className={classes.title} color="textSecondary" gutterBottom>
                      {!(this.props.grossingIdClick || this.props.grossingIdHover)?"Click/Hover to explore more":null}
                  </Typography>
                  

                  <div>
                      {this.props.grossingIdClick?<div>
                          <div>

                              <div className={classes.picsum}>
                                  <div className={classes.pic}>
                                      <img align="top" borderColor="white"
                                           style={{
                                               width: "100%",
                                               height: "100%",
                                               borderColor: 'rgba(255,255,255,255)',
                                               border: '3'
                                           }}
                                           src=
                                               {grossing[this.props.grossingIdClick].poster} alt={grossing[this.props.grossingIdClick].title}/>
                                  </div>
                                  <div className={classes.abwatch}>

                                      <h3 style={{
                                          textDecoration: 'underline',
                                          margin: "0",
                                          color: "white", fontSize: "1.3vw",
                                          display: "inline"
                                      }}>{grossing[this.props.grossingIdClick].title}</h3>
                                      <div className={classes.watch}>
                                          <IconButton align="right" style={{fontSize: "1vw"}}
                                                      onClick={() => this.handleGoogleSearch(this.title)}>
                                              Google Search&nbsp;
                                              <InfoIcon style={{fontSize: "1vw"}}/>
                                          </IconButton>
                                      </div>
                                      <br />
                                      <div className={classes.about}>
                                          <table
                                              classes={{borderCollapse: "collapse", borderSpacing: "0"}}
                                              style={{fontSize:"1vw",textAlign:"left"}}>
                                              <col width="30%"></col>
                                              <col width="70%"></col>
                                              <tr>
                                                  <td className="tg-qtf5" valign="top">
                                                      <b> Language : </b>
                                                  </td>
                                                  <td className="tg-qtf5">{grossing[this.props.grossingIdClick].language}</td>
                                              </tr>
                                              <tr>
                                                  <td className="tg-qtf5" valign="top"><b>Ratings :</b>
                                                  </td>
                                                  <td className="tg-qtf5"><ReactStars
                                                      value=
                                                          {grossing[this.props.grossingIdClick].rating}
                                                      edit={false}
                                                  />
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td className="tg-qtf5" valign="top"><b>Release Year :</b>
                                                  </td>
                                                  <td className="tg-qtf5">{grossing[this.props.grossingIdClick].year}</td>
                                              </tr>
                                              <tr>
                                                  <td className="tg-qtf5" valign="top"><b>Summary :</b>
                                                  </td>
                                                  <td className="tg-qtf5">{grossing[this.props.grossingIdClick].overview}</td>
                                              </tr>

                                          </table>

                                      </div>

                                  </div>



                              </div>



                          </div>

                      </div>:this.props.grossingIdHover?
                          <div>
                              <div>

                                  <div className={classes.picsum}>
                                      <div className={classes.pic}>
                                          <img align="top" borderColor="white"
                                               style={{
                                                   width: "100%",
                                                   height: "100%",
                                                   borderColor: 'rgba(255,255,255,255)',
                                                   border: '3'
                                               }}
                                               src=
                                                   {grossing[this.props.grossingIdHover].poster} alt={grossing[this.props.grossingIdHover].title}/>
                                      </div>
                                      <div className={classes.abwatch}>

                                          <h3 style={{
                                              textDecoration: 'underline',
                                              margin: "0",
                                              color: "white", fontSize: "1.3vw",
                                              display: "inline"
                                          }}>{grossing[this.props.grossingIdHover].title}</h3>
                                          <div className={classes.watch}>
                                              <IconButton align="right" style={{fontSize: "1vw"}}
                                                          onClick={() => this.handleGoogleSearch(this.title)}>
                                                  Google Search&nbsp;
                                                  <InfoIcon style={{fontSize: "1vw"}}/>
                                              </IconButton>
                                          </div>
                                          <br />
                                          <div className={classes.about}>
                                              <table
                                                  classes={{borderCollapse: "collapse", borderSpacing: "0"}}
                                                  style={{fontSize:"1vw",textAlign:"left"}}>
                                                  <col width="30%"></col>
                                                  <col width="70%"></col>
                                                  <tr>
                                                      <td className="tg-qtf5" valign="top">
                                                          <b> Language : </b>
                                                      </td>
                                                      <td className="tg-qtf5">{grossing[this.props.grossingIdHover].language}</td>
                                                  </tr>
                                                  <tr>
                                                      <td className="tg-qtf5" valign="top"><b>Ratings :</b>
                                                      </td>
                                                      <td className="tg-qtf5"><ReactStars
                                                          value=
                                                              {grossing[this.props.grossingIdHover].rating}
                                                          edit={false}
                                                      />
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td className="tg-qtf5" valign="top"><b>Release Year :</b>
                                                      </td>
                                                      <td className="tg-qtf5">{grossing[this.props.grossingIdHover].year}</td>
                                                  </tr>
                                                  <tr>
                                                      <td className="tg-qtf5" valign="top"><b>Summary :</b>
                                                      </td>
                                                      <td className="tg-qtf5">{grossing[this.props.grossingIdHover].overview}</td>
                                                  </tr>

                                              </table>

                                          </div>

                                      </div>



                                  </div>



                              </div>


                          </div>:null
                      }


                  </div>
                 





              </CardContent>
          </Card>
      </div>
    );
  }
}

export default withStyles(styles)(CardDisplayGrossing);
