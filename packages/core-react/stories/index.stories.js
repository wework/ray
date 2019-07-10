import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('Button', module).add('default', () => (
  <button
    onClick={action('clicked')}
    className="ray-button ray-button--primary"
  >
    Hiya
  </button>
));
