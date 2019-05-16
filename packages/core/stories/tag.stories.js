import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Tag', module)
  .add('default', () => (
    <>
      <span className="ray-tag">Enterprise</span>
    </>
  ))
  .add('as a link', () => (
    <>
      <a href="javascript:;" className="ray-tag">
        Enterprise
      </a>
    </>
  ));
