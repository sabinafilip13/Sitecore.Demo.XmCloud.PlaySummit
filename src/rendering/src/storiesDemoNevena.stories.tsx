import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DemoNevena from '../components/DemoNevena';

export default {
  title: 'Components/DemoNevena',
  component: DemoNevena,
} as ComponentMeta<typeof DemoNevena>;

const Template: ComponentStory<typeof DemoNevena> = (args) => <DemoNevena {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'DemoNevena',
  },
  rendering: {
    componentName: 'DemoNevena',
    dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
  },
};
