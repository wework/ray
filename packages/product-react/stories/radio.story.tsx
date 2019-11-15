import React from 'react';
import { storiesOf } from '@storybook/react';

import { Radio } from '../src/components/Radio';

storiesOf('Core Comps | Radio', module)
  .add('Default', () => (
    <div>
      <Radio id="test" label="WeWork" />
      <Radio id="test" label="WeWaltz" />
    </div>
  ))
  .add('Pills', () => (
    <div style={{ width: '100%' }}>
      <fieldset className="ray-fieldset">
        <legend className="ray-fieldset__legend">Pick a language</legend>
        <div className="ray-radio-pill__wrapper">
          <Radio id="test" label="WeWork" pill />
          <Radio id="test" label="WeWaltz" pill />
          <Radio id="test" label="WeLive" pill />
        </div>
      </fieldset>
    </div>
  ));
