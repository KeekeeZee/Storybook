import React from 'react';
import Layout from './Layout';
import HomePage from './HomePage';

export default {
  title: 'Components/Layout',
  component: Layout,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['desktop', 'mobile'],
      description: 'Variante de la disposition (desktop ou mobile).',
    },
  },
};

const Template = (args) => (
  <Layout {...args}>
    <HomePage />
  </Layout>
);

export const Desktop = Template.bind({});
Desktop.args = {
  variant: 'desktop',
  header: <div>Header Content</div>,
};

export const Mobile = Template.bind({});
Mobile.args = {
  variant: 'mobile',
  header: <div>Header Content</div>,
};
