import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Fieldset', module).add('default', () => (
  <form
    style={{
      maxWidth: '400px'
    }}
  >
    <h2 className="ray-text--h2">User Information</h2>
    <div className="ray-form-item">
      <div className="ray-text-field">
        <input
          id="name"
          name="name"
          type="text"
          className="ray-text-field__input"
          value="Tony Stark"
        />
        <label className="ray-text-field__label" htmlFor="radio-3">
          Name
        </label>
      </div>
    </div>
    <fieldset className="ray-fieldset">
      <legend className="ray-fieldset__legend">Origin Planet</legend>
      <div className="ray-form-item">
        <div className="ray-radio">
          <input
            id="radio-1"
            name="radio-button-story"
            type="radio"
            className="ray-radio__input"
          />
          <label className="ray-radio__label" htmlFor="radio-1">
            Earthling
          </label>
        </div>
        <div className="ray-radio">
          <input
            id="radio-2"
            name="radio-button-story"
            type="radio"
            className="ray-radio__input"
          />
          <label className="ray-radio__label" htmlFor="radio-2">
            Martian
          </label>
        </div>
      </div>
    </fieldset>

    <legend className="ray-fieldset__legend">Captcha</legend>

    <div className="ray-form-item">
      <div className="ray-checkbox">
        <input
          id="checkbox"
          name="checkbox-button-story"
          type="checkbox"
          className="ray-checkbox__input"
        />
        <label className="ray-checkbox__label" htmlFor="checkbox">
          I am not a robot
        </label>
      </div>
    </div>

    <button className="ray-button ray-button--primary">Submit</button>
  </form>
));
