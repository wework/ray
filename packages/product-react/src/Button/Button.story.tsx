import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Button } from './Button';

storiesOf('Core Comps | Button', module)
  .add('Primary', () => {
    const onClick = action('clicked');
    return <Button>Primary Button</Button>;
  })
  .add('Primary w/ Icon', () => {
    const onClick = action('clicked');
    return (
      <Button onClick={onClick}>
        Primary Button w/ Icon
        <svg
          className="ray-button__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25 25"
        >
          <g>
            <path d="M12.5,6C5.5964,6,0,12.6211,0,13.5S5.5964,21,12.5,21,25,14.4375,25,13.5,19.4036,6,12.5,6Zm0,11A3.5,3.5,0,1,1,16,13.5,3.5,3.5,0,0,1,12.5,17Z" />
          </g>
        </svg>
      </Button>
    );
  })
  .add('Primary - Disabled', () => {
    const onClick = action('clicked');
    return (
      <Button onClick={onClick} disabled={true}>
        Primary Disabled Button
      </Button>
    );
  })
  .add('Secondary', () => {
    const onClick = action('clicked');
    return (
      <Button onClick={onClick} type="secondary">
        Secondary Button
      </Button>
    );
  })
  .add('Secondary - Disabled', () => {
    const onClick = action('clicked');
    return (
      <Button onClick={onClick} type="secondary" disabled={true}>
        Seconary Disabled Button
      </Button>
    );
  })
  .add('Tertiary', () => {
    const onClick = action('clicked');
    return (
      <Button onClick={onClick} type="tertiary">
        Tertiary Button
      </Button>
    );
  })
  .add('Tertiary - Disabled', () => {
    const onClick = action('clicked');
    return (
      <Button onClick={onClick} type="tertiary" disabled={true}>
        Tertiary Disabled Button
      </Button>
    );
  })
  .add('Compact', () => {
    const onClick = action('clicked');
    return (
      <Button onClick={onClick} compact={true}>
        Primary Compact Button
      </Button>
    );
  })
  .add('Compact - Disabled', () => {
    const onClick = action('clicked');
    return (
      <Button onClick={onClick} compact={true} disabled={true}>
        Primary Compact Disabled Button
      </Button>
    );
  })
  .add('Danger', () => {
    const onClick = action('clicked');
    return (
      <Button onClick={onClick} danger={true}>
        Primary Danger Button
      </Button>
    );
  })
  .add('Danger - Disabled', () => {
    const onClick = action('clicked');
    return (
      <Button onClick={onClick} danger={true} disabled={true}>
        Primary Danger Disabled Button
      </Button>
    );
  });
