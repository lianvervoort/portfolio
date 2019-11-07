import { configure, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
// automatically import all files ending in *.stories.js


import yourTheme from './yourTheme';

addParameters({
  options: {
    theme: yourTheme,
  },
});



configure(require.context('../src/stories', true, /\.stories\.js$/), module);
