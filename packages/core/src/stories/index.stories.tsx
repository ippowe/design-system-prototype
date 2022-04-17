import React from "react";
import { App as Date } from "@ippowe/date";
import { App as Query } from "@ippowe/qs";

const Template: React.FC = (args) => {
  return (
    <div {...args}>
      <Date />
      <Query />
    </div>
  );
};

export default {
  title: "core",
  component: Template,
};

export const FirstStory = {
  args: {},
};
