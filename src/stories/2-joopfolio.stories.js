import React from 'react';
import { storiesOf } from '@storybook/react';
// import { Button } from '@storybook/react/demo';
import drop from "../static/joop.jpeg";


// export default {
//   title: 'test',
// };

const image = {
  src: drop,
  alt: 'my image',
};

storiesOf('Image', module)
  .add('with an image', () => (
    <img src={image.src} alt={image.alt} />
  ));
//
// export const plaatje = () => (
//   <Button>
//   Hello
//   </Button>
// );
