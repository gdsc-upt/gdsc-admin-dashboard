import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { TechnologiesPage } from "../../features/technologies/pages/technologies-page";

const component = TechnologiesPage;
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Technologies",
  component,
} as ComponentMeta<typeof component>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/function-component-definition,react/jsx-props-no-spreading
const Template: ComponentStory<typeof component> = () => (
  <BrowserRouter>
    <TechnologiesPage />
  </BrowserRouter>
);

export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};

export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
