import React from "react";
import ActorHeader from "../components/headerActorList";
import SampleActor from "./sampleActorData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";

export default {
  title: "Actor /ActorHeader",
  component: ActorHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <ActorHeader movie={SampleActor} />;

Basic.storyName = "Default";
