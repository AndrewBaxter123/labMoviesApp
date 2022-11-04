import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const AddToPlaylist = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddWatchlist = (e) => {
    e.preventDefault();
    context.addWatchlist(movie);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={handleAddWatchlist}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToPlaylist;