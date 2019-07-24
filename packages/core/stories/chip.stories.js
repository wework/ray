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
storiesOf('Chip', module).add('with icon', () => {
  setTimeout(initChip);
  return (
    <div>
      <div className="ray-chip">
        <div className="ray-chip__icon-wrapper">
          <svg width="10" height="10" viewBox="0 0 10 10">
            <rect
              width="10"
              height="10"
              strokeWidth="2"
              stroke="#0000FF"
              fill="#FFFFFF"
            />
          </svg>
          <span className="ray-chip__text">Furnished</span>
        </div>
      </div>
      <div className="ray-chip ray-chip--active">
        <div className="ray-chip__icon-wrapper">
          <svg width="10" height="10" viewBox="0 0 10 10">
            <rect
              width="10"
              height="10"
              strokeWidth="2"
              stroke="#0000FF"
              fill="#FFFFFF"
            />
          </svg>
          <span className="ray-chip__text">Offices</span>
        </div>
      </div>
    </div>
  );
});
storiesOf('Chip', module).add('micro', () => {
  setTimeout(initChip);
  return (
    <div>
      <div className="ray-chip ray-chip--micro">Offices</div>
      <div className="ray-chip ray-chip--micro ray-chip--active">Offices</div>
    </div>
  );
});
