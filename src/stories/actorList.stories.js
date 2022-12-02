import React from "react";
import ActorList from "../components/actorList";
import SampleActor from "./sampleActorData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import Grid from "@mui/material/Grid";


export default {
  title: "Actor/ActorList",
  component: ActorList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,

  ],
};

export const Basic = () => {
  const actors = [
    { ...SampleActor, id: 1 },
    { ...SampleActor, id: 2 },
    { ...SampleActor, id: 3 },
    { ...SampleActor, id: 4 },
    { ...SampleActor, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <ActorList
        actors={actors}
        
      />
    </Grid>
  );
};
Basic.storyName = "Default";
