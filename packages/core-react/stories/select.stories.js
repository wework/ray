import React from 'react';
import { storiesOf } from '@storybook/react';

import Select from '../src/components/Select';

storiesOf('Select', module).add('default', () => (
  <Select id="select-test" label="henlo" defaultValue="1">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </Select>
));
