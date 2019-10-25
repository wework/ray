import { storiesOf } from '@storybook/react';
import React from 'react';

import { Checkbox } from '../src/components/Checkbox';

storiesOf('Core Comps | Checkbox', module).add('default', () => (
  <Checkbox id="checkboxtest" label="henlo" />
));
