import React from "react";
import { useParams } from 'react-router-dom';
import ActorDetails from "../components/ActorDetails";
import PageTemplate from "../components/templateActorListPage";
// import useMovie from "../hooks/useMovie";   Redundant
import { getActor } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const ActorDetailsPage = (props) => {
  const { id } = props.match.params

  const { data: actor, error, isLoading, isError } = useQuery(["actor", { id: id }], getActor);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {actor ? (
        <>
          <PageTemplate actor={actor}>
            <ActorDetails actor={actor} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for actor details</p>
      )}
    </>
  );
};

export default ActorDetailsPage;