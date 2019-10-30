import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import { Button } from '../src/components/Button';

storiesOf('Core Comps | Button', module)
  .add('default', () => {
    const onClick = action('clicked');
    return (
      <>
        <div style={{ marginBottom: '1rem' }}>
          <Button onClick={onClick}>Hiya</Button>
          <Button disabled>Hiya</Button>
          <Button buttonStyle="secondary">Hiya</Button>
          <Button onClick={onClick} buttonStyle="secondary" disabled>
            Hiya
          </Button>
          <Button buttonStyle="tertiary">Hiya</Button>
          <Button onClick={onClick} buttonStyle="tertiary" disabled>
            Hiya
          </Button>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <Button compact>Hiya</Button>
          <Button compact disabled>
            Hiya
          </Button>
          <Button compact buttonStyle="secondary">
            Hiya
          </Button>
          <Button compact buttonStyle="secondary" disabled>
            Hiya
          </Button>
          <Button compact buttonStyle="tertiary">
            Hiya
          </Button>
          <Button compact buttonStyle="tertiary" disabled>
            Hiya
          </Button>
        </div>
      </>
    );
  })
  .add('danger', () => {
    const onClick = action('clicked');
    return (
      <>
        <div style={{ marginBottom: '1rem' }}>
          <Button onClick={onClick} danger>
            Hiyaaaa
          </Button>
          <Button danger disabled>
            Hiya
          </Button>
          <Button danger buttonStyle="secondary">
            Hiya
          </Button>
          <Button danger buttonStyle="secondary" disabled>
            Hiya
          </Button>
          <Button danger buttonStyle="tertiary">
            Hiya
          </Button>
          <Button onClick={onClick} danger buttonStyle="tertiary" disabled>
            Hiya
          </Button>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <Button onClick={onClick} danger compact>
            Hiya
          </Button>
          <Button onClick={onClick} danger compact disabled>
            Hiya
          </Button>
          <Button danger compact buttonStyle="secondary">
            Hiya
          </Button>
          <Button
            onClick={onClick}
            danger
            compact
            buttonStyle="secondary"
            disabled
          >
            Hiya
          </Button>
          <Button danger compact buttonStyle="tertiary">
            Hiya
          </Button>
          <Button danger compact buttonStyle="tertiary" disabled>
            Hiya
          </Button>
        </div>
      </>
    );
  })
  .add('Image w/ Icon', () => {
    const onClick = action('clicked');
    return (
      <>
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
        <Button onClick={onClick} buttonStyle="secondary">
          Secondary Button w/ Icon
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
        <Button onClick={onClick} buttonStyle="tertiary">
          Tertiary Button w/ Icon
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
        <Button onClick={onClick} buttonStyle="tertiary" danger>
          Tertiary Button w/ Icon
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
      </>
    );
  });
