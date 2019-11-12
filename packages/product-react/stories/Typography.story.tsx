import React from 'react';
import { storiesOf } from '@storybook/react';
import { Typography } from '../src/components/Typography';

const styles: Array<any> = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'body',
  'body-large',
  'body-small',
  'body-x-small',
  'display-1',
  'display-2'
];

storiesOf('Typography', module).add('default', () => (
  <>
    {styles.map(style => {
      return (
        <Typography key={style} style={style}>
          All their equipment and instruments are alive.
        </Typography>
      );
    })}
  </>
));
