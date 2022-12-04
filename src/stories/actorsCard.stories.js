import React from "react";
import ActorCard from "../components/actorCard";
import SampleActor from "./sampleActorData";
import { MemoryRouter } from "react-router";

import { action } from "@storybook/addon-actions";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

export default {
  title: "Actor/ActorCard",
  component: ActorCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    // (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <ActorCard
      actor={SampleActor}

      taging={(actor) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = {poster_path: undefined };
  return (
    <ActorCard
      actor={sampleNoPoster}
      taging={(actor) => null}
    />
  );
};
Exceptional.storyName = "exception";
