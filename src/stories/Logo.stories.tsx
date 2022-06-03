import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Logo} from '../components/logo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'GDSC/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/function-component-definition,react/jsx-props-no-spreading
const Template: ComponentStory<typeof Logo> = props => <Logo {...props} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};

export const Large = Template.bind({});
Large.args = {
  height: '100%',
  width: '100%',
};

export const Small = Template.bind({});
Small.args = {
  height: '30%',
  width: '30%',
};
