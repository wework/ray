import React from 'react';
import { storiesOf } from '@storybook/react';

import withPadding from './util/withPadding';

storiesOf('Select', module).addWithJSX('default', () =>
  withPadding(
    <>
      <div className="ray-form-item">
        <div className="ray-select">
          <select id="animal" className="ray-select__input">
            <option value="">Dog</option>
            <option value="">Cat</option>
            <option value="" disabled>
              Pug
            </option>
          </select>
        </div>
      </div>

      <div className="ray-form-item">
        <div className="ray-select">
          <select id="animal" className="ray-select__input">
            <option value="">Dog</option>
            <option value="">Cat</option>
            <option value="" disabled>
              Pug
            </option>
          </select>
        </div>

        <div className="ray-form-item__hint">This is a hint</div>
      </div>

      <div className="ray-form-item">
        <div className="ray-select ray-select--error">
          <select
            id="animal"
            className="ray-select__input ray-select__input--error"
          >
            <option value="">Dog</option>
            <option value="">Cat</option>
            <option value="">Tiger</option>
          </select>
        </div>

        <div className="ray-form-item__hint ray-form-item__hint--error">
          This is a hint
        </div>
      </div>

      <div className="ray-form-item">
        <div className="ray-select ray-select--compact">
          <select id="animal" className="ray-select__input">
            <option value="">Dog</option>
            <option value="">Cat</option>
            <option value="">Tiger</option>
          </select>
        </div>

        <div className="ray-form-item__hint">This is a hint</div>
      </div>
    </>
  )
);
