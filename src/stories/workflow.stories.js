
import React from 'react';
import { storiesOf } from '@storybook/react';
import workflow from "../static/Workflowfull.png";



storiesOf('Workflow', module)
  .add('Workflow schema', () => (
<img src={workflow} alt="workflow"/>

  ));
