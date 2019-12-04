
import React from 'react';
import { storiesOf } from '@storybook/react';
import workflow from "../static/workflow.png";



storiesOf('Workflow', module)
  .add('Workflow schema', () => (
<img style={{width: 1080, height: 608}} src={workflow} alt="workflow"/>

  ));
