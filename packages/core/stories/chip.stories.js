import React from 'react';
import { storiesOf } from '@storybook/react';

import Chip from '../src/components/chip';

function initChip() {
  Chip.createAll();
}

/* eslint-disable no-script-url */
storiesOf('Chip', module).add('default', () => {
  setTimeout(initChip);
  return (
    <>
      <div className="ray-chip">Neighborhoods</div>
      <div className="ray-chip ray-chip--active">Offices</div>
    </>
  );
});
storiesOf('Chip', module).add('micro', () => {
  setTimeout(initChip);
  return (
    <>
      <div className="ray-chip ray-chip--micro">Offices</div>
      <div className="ray-chip ray-chip--micro ray-chip--active">Offices</div>
    </>
  );
});
