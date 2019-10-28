import React from 'react';
import { storiesOf } from '@storybook/react';

import { ITypeProps, Type } from '../src/components/Type';

const styles = [
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

storiesOf('Type', module).add('default', () => (
  <>
    {styles.map(style => {
     console.log('style>>>>>>>',style,'typeof>>>',typeof(style))
     
     return(
      <Type key={style} style='h1'>
        All their equipment and instruments are alive.
      </Type>)
   
   
   })}
  </>
));
