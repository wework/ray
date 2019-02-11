import React from 'react';
import { storiesOf } from '@storybook/react';

import withPadding from './util/withPadding';

storiesOf('Forms - Radio buttons and Checkboxes', module)
  .addWithJSX('Radio button', () =>
    withPadding(
      <React.Fragment>
        <div className="ray-radio">
          <input id="radio-1" name="radio-button-story" type="radio" className="ray-radio__input" />
          <label htmlFor="radio-1">Choose me</label>
        </div>
        <div className="ray-radio">
          <input id="radio-2" name="radio-button-story" type="radio" className="ray-radio__input" />
          <label htmlFor="radio-2">Choose me</label>
        </div>
        <div className="ray-radio">
          <input id="radio-3" name="radio-button-story" type="radio" className="ray-radio__input" disabled />
          <label htmlFor="radio-3">Choose me</label>
        </div>
      </React.Fragment>
  ))
  .addWithJSX('Checkbox', () =>
    withPadding(
      <div className="ray-checkbox">
        <input id="check" type="checkbox" className="ray-checkbox__input" />
        <label htmlFor="check">Check me out</label>
      </div>
    )
  )
  .addWithJSX('Checkbox - disabled', () =>
    withPadding(
      <div className="ray-checkbox">
        <input id="check" type="checkbox" className="ray-checkbox__input" disabled />
        <label htmlFor="check">Check me out</label>
      </div>
    )
  );
