import React from 'react';
import { storiesOf } from '@storybook/react';

import Dropdown from '../src/components/dropdown';

function init() {
  setTimeout(Dropdown.createAll);
}

storiesOf('Dropdown', module)
  .add('Dropdown no placeholder', () => {
    init();
    return (
      <div className="ray-form-item">
        <div className="ray-dropdown">
          <div className="ray-dropdown__wrapper">
            <select className="ray-dropdown__input" id="test-example">
              <option value="Slowpoke">Slowpoke</option>
              <option disabled data-ray-separator />
              <option value="Pikachu">Pikachu</option>
              <option value="Squirtle">Squirtle</option>
              <option value="Charmander">Charmander</option>
              <option value="Sonichu">Sonichu</option>
            </select>
          </div>
          <label className="ray-dropdown__label" htmlFor="test-example">
            Pokemon
          </label>
        </div>
      </div>
    );
  })
  .add('Dropdown with placeholder', () => {
    init();
    return (
      <div className="ray-form-item">
        <div className="ray-dropdown">
          <div className="ray-dropdown__wrapper">
            <select className="ray-dropdown__input" id="test-example" value="">
              <option value="" data-ray-placeholder>
                Choose pokemon?
              </option>
              <option value="Slowpoke">Slowpoke</option>
              <option disabled data-ray-separator />
              <option value="Pikachu">Pikachu</option>
              <option value="Squirtle">Squirtle</option>
              <option value="Charmander">Charmander</option>
              <option value="Sonichu">Sonichu</option>
            </select>
          </div>
          <label className="ray-dropdown__label" htmlFor="test-example">
            Pokemon
          </label>
        </div>
      </div>
    );
  })
  .add('Dropdown with default value', () => {
    init();
    return (
      <div className="ray-form-item">
        <div className="ray-dropdown">
          <div className="ray-dropdown__wrapper">
            <select
              className="ray-dropdown__input"
              id="test-example"
              value="Charmander"
            >
              <option value="" data-ray-placeholder>
                Choose pokemon?
              </option>
              <option value="Slowpoke">Slowpoke</option>
              <option disabled data-ray-separator />
              <option value="Pikachu">Pikachu</option>
              <option value="Squirtle">Squirtle</option>
              <option value="Charmander">Charmander</option>
              <option value="Sonichu">Sonichu</option>
            </select>
          </div>
          <label className="ray-dropdown__label" htmlFor="test-example">
            Pokemon
          </label>
        </div>
      </div>
    );
  })
  .add('Dropdown required', () => {
    init();
    return (
      <div className="ray-form-item">
        <div className="ray-dropdown">
          <div className="ray-dropdown__wrapper">
            <select
              className="ray-dropdown__input"
              id="test-example"
              value="Charmander"
              required
              aria-required="true"
            >
              <option value="" data-ray-placeholder>
                Choose pokemon?
              </option>
              <option value="Slowpoke">Slowpoke</option>
              <option disabled data-ray-separator />
              <option value="Pikachu">Pikachu</option>
              <option value="Squirtle">Squirtle</option>
              <option value="Charmander">Charmander</option>
              <option value="Sonichu">Sonichu</option>
            </select>
          </div>
          <label className="ray-dropdown__label" htmlFor="test-example">
            Pokemon
          </label>
        </div>
      </div>
    );
  })
  .add('Dropdown error', () => {
    init();
    return (
      <div className="ray-form-item">
        <div className="ray-dropdown ray-dropdown--error">
          <div className="ray-dropdown__wrapper">
            <select
              className="ray-dropdown__input"
              id="test-example"
              value=""
              required
              aria-required="true"
            >
              <option value="" data-ray-placeholder>
                Choose pokemon?
              </option>
              <option value="Slowpoke">Slowpoke</option>
              <option disabled data-ray-separator />
              <option value="Pikachu">Pikachu</option>
              <option value="Squirtle">Squirtle</option>
              <option value="Charmander">Charmander</option>
              <option value="Sonichu">Sonichu</option>
            </select>
          </div>
          <label className="ray-dropdown__label" htmlFor="test-example">
            Pokemon
          </label>
        </div>
      </div>
    );
  })
  .add('Dropdown disabled', () => {
    init();
    return (
      <div className="ray-form-item">
        <div className="ray-dropdown">
          <div className="ray-dropdown__wrapper">
            <select
              className="ray-dropdown__input"
              id="test-example"
              value=""
              disabled
              required
              aria-required="true"
            >
              <option value="" data-ray-placeholder>
                Choose pokemon?
              </option>
              <option value="Slowpoke">Slowpoke</option>
              <option disabled data-ray-separator />
              <option value="Pikachu">Pikachu</option>
              <option value="Squirtle">Squirtle</option>
              <option value="Charmander">Charmander</option>
              <option value="Sonichu">Sonichu</option>
            </select>
          </div>
          <label className="ray-dropdown__label" htmlFor="test-example">
            Pokemon
          </label>
        </div>
      </div>
    );
  })
  .add('Dropdown compact', () => {
    init();
    return (
      <div className="ray-form-item">
        <div className="ray-dropdown ray-dropdown--compact">
          <div className="ray-dropdown__wrapper">
            <select
              className="ray-dropdown__input"
              id="test-example"
              value=""
              required
              aria-required="true"
            >
              <option value="" data-ray-placeholder>
                Choose pokemon?
              </option>
              <option value="Slowpoke">Slowpoke</option>
              <option disabled data-ray-separator />
              <option value="Pikachu">Pikachu</option>
              <option value="Squirtle">Squirtle</option>
              <option value="Charmander">Charmander</option>
              <option value="Sonichu">Sonichu</option>
            </select>
          </div>
          <label className="ray-dropdown__label" htmlFor="test-example">
            Pokemon
          </label>
        </div>
      </div>
    );
  });
