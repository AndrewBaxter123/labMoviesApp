import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getActors } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import {useQuery} from 'react-query';

const ActorsPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getActors)
 

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const Actors = data.results;

  return (
    <PageTemplate
      title="Actors"
      actors={Actors}
    
    />
    
  );
};
export default ActorsPage ;