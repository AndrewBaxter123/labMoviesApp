import React, { useContext  } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
//import { MoviesContext } from "../../contexts/moviesContext";


export default function ActorCard(props) {
    const actor = props.actor;


  //const { favourites, addToFavourites } = useContext(MoviesContext);

//   if (favourites.find((id) => id === movie.id)) {
//     movie.favourite = true;
//   } else {
//     movie.favourite = false
//   }

//   const handleAddToFavourite = (e) => {
//     e.preventDefault();
//     addToFavourites(movie);
//   };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          actor.favourite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {actor.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
            actor.profile_path
              ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
              : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <PermIdentityIcon fontSize="small" />
              {actor.name}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {actor.birthday}
            </Typography>
          </Grid>
        </Grid>
        </CardContent>
      <CardActions disableSpacing>
      <Link to={`/actors/${actor.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}