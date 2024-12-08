import React from 'react';
import Sidebar from './Sidebar';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['desktop', 'mobile'], // Deux variantes disponibles
      description: 'Définit le style de la sidebar (mobile ou desktop).',
    },
  },
};

const Template = (args) => <Sidebar {...args} />;

export const Desktop = Template.bind({});
Desktop.args = {
  variant: 'desktop', // Sidebar version desktop
};

export const Mobile = Template.bind({});
Mobile.args = {
  variant: 'mobile', // Sidebar version mobile
};
