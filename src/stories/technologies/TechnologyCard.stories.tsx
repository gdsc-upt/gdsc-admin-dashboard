import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TechnologyCard } from "../../features/technologies/components/technology-card";
import { Technology } from "../../features/technologies/models/technology";

const component = TechnologyCard;
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Technologies/Card",
  component,
} as ComponentMeta<typeof component>;

const technology: Technology = {
  id: "asdasd",
  name: "asdasd",
  description: "asdasd",
  created: "asdasd",
  updated: "asdasdas",
  icon: "asdasdasd",
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/function-component-definition,react/jsx-props-no-spreading
const Template: ComponentStory<typeof component> = () => (
  <TechnologyCard technology={technology} onDelete={console.log} onEdit={console.log} />
);

export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};

export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
