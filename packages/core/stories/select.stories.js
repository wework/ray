import React from 'react';
import { storiesOf } from '@storybook/react';

import Select from '../lib/components/select';

function init() {
  Select.createAll();
}

storiesOf('Select', module)
  .add('select, no placeholder', () => {
    setTimeout(init);

    return (
      <div className="ray-select">
        <select className="ray-select__input">
          <option value="" disabled selected data-ray-placeholder />
          <option value="Pikatchu">Pikatchu</option>
          <option value="Squirtle">Squirtle</option>
          <option value="Charmander">Charmander</option>
        </select>
        <label className="ray-select__label">
          {"What's your favorite Pokémon?"}
        </label>
      </div>
    );
  })
  .add('select, with placeholder', () => {
    setTimeout(init);

    return (
      <div className="ray-select">
        <select className="ray-select__input">
          <option value="" disabled selected data-ray-placeholder>
            {"Hi, I'm a placeholder"}
          </option>
          <option value="Pikatchu">Pikatchu</option>
          <option value="Squirtle">Squirtle</option>
          <option value="Charmander">Charmander</option>
        </select>
        <label className="ray-select__label">
          {"What's your favorite Pokémon?"}
        </label>
      </div>
    );
  })
  .add('select, default value', () => {
    setTimeout(init);

    return (
      <div className="ray-select">
        <select className="ray-select__input">
          <option value="Pikatchu">Pikatchu</option>
          <option value="Squirtle" selected>
            Squirtle
          </option>
          <option value="Charmander">Charmander</option>
        </select>
        <label className="ray-select__label">
          {"What's your favorite Pokémon?"}
        </label>
      </div>
    );
  })
  .add('select, error', () => {
    setTimeout(init);

    return (
      <div className="ray-select ray-select--error">
        <select className="ray-select__input">
          <option value="" disabled selected data-ray-placeholder />
          <option value="Pikatchu">Pikatchu</option>
          <option value="Squirtle">Squirtle</option>
          <option value="Charmander">Charmander</option>
        </select>
        <label className="ray-select__label">
          {"What's your favorite Pokémon?"}
        </label>
      </div>
    );
  })
  .add('select, disabled', () => {
    setTimeout(init);

    return (
      <div className="ray-select ray-select--disabled">
        <select className="ray-select__input" disabled>
          <option value="" disabled selected data-ray-placeholder />
          <option value="Pikatchu">Pikatchu</option>
          <option value="Squirtle">Squirtle</option>
          <option value="Charmander">Charmander</option>
        </select>
        <label className="ray-select__label">
          {"What's your favorite Pokémon?"}
        </label>
      </div>
    );
  })
  .add('select, compact', () => {
    setTimeout(init);

    return (
      <div className="ray-select ray-select--compact">
        <select className="ray-select__input">
          <option value="" disabled selected data-ray-placeholder />
          <option value="Pikatchu">Pikatchu</option>
          <option value="Squirtle">Squirtle</option>
          <option value="Charmander">Charmander</option>
        </select>
        <label className="ray-select__label">
          {"What's your favorite Pokémon?"}
        </label>
      </div>
    );
  })
  .add('select, with hints', () => {
    setTimeout(init);

    return (
      <>
        <div className="ray-form-item">
          <div className="ray-select">
            <select className="ray-select__input">
              <option value="" disabled selected data-ray-placeholder />
              <option value="Pikatchu">Pikatchu</option>
              <option value="Squirtle">Squirtle</option>
              <option value="Charmander">Charmander</option>
            </select>
            <label className="ray-select__label">
              {"What's your favorite Pokémon?"}
            </label>
          </div>

          <div className="ray-form-item__hint">{"I'm a hint"}</div>
        </div>

        <div className="ray-form-item">
          <div className="ray-select ray-select--error">
            <select className="ray-select__input">
              <option value="" disabled selected data-ray-placeholder />
              <option value="Pikatchu">Pikatchu</option>
              <option value="Squirtle">Squirtle</option>
              <option value="Charmander">Charmander</option>
            </select>
            <label className="ray-select__label">
              {"What's your favorite Pokémon?"}
            </label>
          </div>

          <div className="ray-form-item__hint">{"I'm a hint"}</div>
        </div>
        <div className="ray-form-item">
          <div className="ray-select ray-select--compact">
            <select className="ray-select__input">
              <option value="" disabled selected data-ray-placeholder />
              <option value="Pikatchu">Pikatchu</option>
              <option value="Squirtle">Squirtle</option>
              <option value="Charmander">Charmander</option>
            </select>
            <label className="ray-select__label">
              {"What's your favorite Pokémon?"}
            </label>
          </div>

          <div className="ray-form-item__hint">{"I'm a hint"}</div>
        </div>

        <div className="ray-form-item">
          <div className="ray-select ray-select--compact ray-select--error">
            <select className="ray-select__input">
              <option value="" disabled selected data-ray-placeholder />
              <option value="Pikatchu">Pikatchu</option>
              <option value="Squirtle">Squirtle</option>
              <option value="Charmander">Charmander</option>
            </select>
            <label className="ray-select__label">
              {"What's your favorite Pokémon?"}
            </label>
          </div>

          <div className="ray-form-item__hint">{"I'm a hint"}</div>
        </div>
      </>
    );
  });
