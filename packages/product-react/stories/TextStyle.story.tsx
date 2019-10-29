import React from 'react';
import { storiesOf } from '@storybook/react';
import { TextStyle } from '../src/components/TextStyle';

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

storiesOf('TestStyle', module).add('default', () => (
  <>
    {styles.map(style => {
      return (
        <TextStyle key={style} style={style}>
          All their equipment and instruments are alive.
        </TextStyle>
      );
    })}
  </>
));
