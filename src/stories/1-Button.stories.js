import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Inleiding',
};

export const Probleemstelling = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Onderzoeksvragen = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
