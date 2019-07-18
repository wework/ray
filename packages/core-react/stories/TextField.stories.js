import React from 'react';
import { storiesOf } from '@storybook/react';
import TextField from '../src/components/TextField';

storiesOf('TextField', module)
  .add('default', () => (
    <TextField id="example" value={undefined} placeholder="hello" />
  ))
  .add('required', () => (
    <TextField id="example" value={undefined} placeholder="hello" required />
  ))
  .add('error', () => (
    <TextField
      id="example"
      value={undefined}
      placeholder="hello"
      error="something went wrong"
    />
  ))
  .add('with value', () => (
    <TextField id="example" value="worlds" placeholder="hello" />
  ))
  .add('disabled', () => (
    <TextField id="example" value="worlds" placeholder="hello" disabled />
  ))
  .add('compact', () => (
    <TextField id="example" value="worlds" placeholder="hello" compact />
  ));
