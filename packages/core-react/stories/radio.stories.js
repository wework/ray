import React from 'react';
import { storiesOf } from '@storybook/react';

import Radio from '../src/components/Radio';

storiesOf('Radio', module).add('default', () => (
  <div>
    <Radio id="test" label="WeWork" />
    <Radio id="test" label="WeWaltz" />
  </div>
));
