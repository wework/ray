import React from 'react';
import { storiesOf } from '@storybook/react';

import Radio from '../src/components/Radio';

storiesOf('Radio', module).add('default', () => (
  <Radio id="test" label="henlo" />
));
