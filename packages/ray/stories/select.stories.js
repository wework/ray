import React from 'react';
import { storiesOf } from '@storybook/react';

import withPadding from './util/withPadding';
import { Select } from '../lib/components/select';

let idNumber = 0;

storiesOf('Select', module).addWithJSX('all', () => {
  function init() {
    const selects = document.querySelectorAll('.ray-select');
    selects.forEach(select => new Select(select));
  }

  setTimeout(init);

  return withPadding(
    <>
      <div className="ray-form-item">
        <div className="ray-select">
          <select className="ray-select__input">
            <option value="" disabled selected />
            <option value="Pikatchu">Pikatchu</option>
            <option value="Squirtle">Squirtle</option>
            <option value="Pug" disabled>
              Pug
            </option>
          </select>
          <label className="ray-select__label">
            What's your favorite Pokémon?
          </label>
        </div>
      </div>

      <div className="ray-form-item">
        <div className="ray-select">
          <select className="ray-select__input">
            <option value="" selected disabled data-ray-placeholder>
              This one has a placeholder
            </option>
            <option value="Pikatchu">Pikatchu</option>
            <option value="Squirtle">Squirtle</option>
            <option value="Pug" disabled>
              Pug
            </option>
          </select>

          <label className="ray-select__label">
            What's your favorite Pokémon?
          </label>
        </div>
        <div className="ray-form-item__hint">Pick Squirtle...Hint hint</div>
      </div>

      <div className="ray-form-item">
        <div className="ray-select ray-select--error">
          <select className="ray-select__input">
            <option value="Pikatchu">Pikatchu</option>
            <option value="Squirtle">Squirtle</option>
            <option value="Pug" disabled>
              Pug
            </option>
          </select>

          <label className="ray-select__label">
            What's your favorite Pokémon?
          </label>
        </div>
        <div className="ray-form-item__hint">Pick Squirtle...Hint hint</div>
      </div>

      <div className="ray-form-item">
        <div className="ray-select ray-select--disabled">
          <select className="ray-select__input" disabled>
            <option value="Pikatchu">Pikatchu</option>
            <option value="Squirtle">Squirtle</option>
            <option value="Pug" disabled>
              Pug
            </option>
          </select>

          <label className="ray-select__label">
            What's your favorite Pokémon?
          </label>
        </div>
        <div className="ray-form-item__hint">Pick Squirtle...Hint hint</div>
      </div>

      <div className="ray-form-item">
        <div className="ray-select ray-select--compact">
          <select className="ray-select__input">
            <option value="Pikatchu">Pikatchu</option>
            <option value="Squirtle">Squirtle</option>
            <option value="Pug" disabled>
              Pug
            </option>
          </select>
          <label className="ray-select__label">
            What's your favorite Pokémon?
          </label>
        </div>
      </div>

      <div className="ray-form-item">
        <div className="ray-select ray-select--compact">
          <select className="ray-select__input">
            <option value="" selected disabled data-ray-placeholder>
              This one has a placeholder
            </option>
            <option value="Pikatchu">Pikatchu</option>
            <option value="Squirtle">Squirtle</option>
            <option value="Pug" disabled>
              Pug
            </option>
          </select>

          <label className="ray-select__label">
            What's your favorite Pokémon?
          </label>
        </div>
        <div className="ray-form-item__hint">Pick Squirtle...Hint hint</div>
      </div>

      <div className="ray-form-item">
        <div className="ray-select ray-select--compact ray-select--error">
          <select className="ray-select__input">
            <option value="Pikatchu">Pikatchu</option>
            <option value="Squirtle">Squirtle</option>
            <option value="Pug" disabled>
              Pug
            </option>
          </select>

          <label className="ray-select__label">
            What's your favorite Pokémon?
          </label>
        </div>
        <div className="ray-form-item__hint">Pick Squirtle...Hint hint</div>
      </div>

      <div className="ray-form-item">
        <div className="ray-select ray-select--compact ray-select--disabled">
          <select className="ray-select__input" disabled>
            <option value="Pikatchu">Pikatchu</option>
            <option value="Squirtle">Squirtle</option>
            <option value="Pug" disabled>
              Pug
            </option>
          </select>

          <label className="ray-select__label">
            What's your favorite Pokémon?
          </label>
        </div>
        <div className="ray-form-item__hint">Pick Squirtle...Hint hint</div>
      </div>
    </>
  );
});
