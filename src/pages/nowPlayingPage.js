import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getNowPlaying} from "../api/tmdb-api"
import PlaylistAddIcon from "../components/cardIcons/addToPlaylist";


const NowPlayingPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('NowPlayingMovies', getNowPlaying)

  if (isLoading) {
    return <Spinner />
  }if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
  console.log(movies);
  
   return (
      <PageTemplate
        title="Now Playing Movies"
        movies={movies}
        action={(movie) => {
            return <PlaylistAddIcon movie={movie} />
        }}
      />
  );
};

export default NowPlayingPage; 