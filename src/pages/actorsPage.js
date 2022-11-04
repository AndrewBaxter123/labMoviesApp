import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateActorListPage";

import { getActors } from "../api/tmdb-api";

const HomePage = (props) => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    getActors().then(a => {
        console.log(a)
      setActors(a);
    });
  }, []);

  return (
    <PageTemplate
      title="Actors"
      actors={actors}
    />
  );
};
export default HomePage;