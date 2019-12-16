
import React from 'react';
import { storiesOf } from '@storybook/react';
import caseprofile from "../static/case1.png";
import casegif from "../static/case1.gif";
import casetest from "../static/case1test.png";



storiesOf('Case #1', module)
  .add('Profiel', () => (
<img src={caseprofile} alt="case profile"/>
))

.add('Uitwerking', () => (
<img src={casegif} alt="case gif"/>
))

.add('Test resultaten', () => (
<img src={casetest} alt="case test"/>
));
