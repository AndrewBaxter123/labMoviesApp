import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg'
import { getActors } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'



export default function FilterActorsCard(props) {
    const { data, error, isLoading, isError } = useQuery("name", getActors);


  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the actors.
        </Typography>
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          value={props.query}
          variant="filled"
          onChange={handleTextChange}
        />
      </CardContent>
      <CardMedia
        image={img}
        title="Filter"
      />
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter Actors.
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}