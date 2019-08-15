import React from 'react';
import { storiesOf } from '@storybook/react';
import TextArea from '../src/components/TextArea';

storiesOf('TextArea', module)
  .add('default', () => (
    <TextArea
      id="example"
      value={undefined}
      placeholder="hello"
      label="im a label"
    />
  ))
  .add('required', () => (
    <TextArea
      id="example"
      value={undefined}
      placeholder="hello"
      required
      label="im a label"
    />
  ))
  .add('error', () => (
    <TextArea
      id="example"
      value={undefined}
      placeholder="hello"
      error="something went wrong"
    />
  ))
  .add('with value', () => (
    <TextArea
      id="example"
      value="worlds"
      placeholder="hello"
      label="im a label"
    />
  ))
  .add('disabled', () => (
    <TextArea
      id="example"
      value="worlds"
      placeholder="hello"
      disabled
      label="im a label"
    />
  ))
  .add('compact', () => (
    <TextArea
      id="example"
      value="worlds"
      placeholder="hello"
      compact
      label="im a label"
    />
  ));
