import React from 'react';
import { storiesOf } from '@storybook/react';

import Select from '../src/components/select';

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
  })
  .add('select, with icon', () => {
    setTimeout(init);

    return (
      <>
        <div className="ray-form-item">
          <div className="ray-select ray-select--with-icon-left">
            <div className="ray-select__icon--left">😜</div>

            <select className="ray-select__input">
              <option value="" disabled selected data-ray-placeholder />
              <option value="Pikachu">Pikachu</option>
              <option value="Squirtle">Squirtle</option>
              <option value="Bulbasaur">Bulbasaur</option>
              <option value="Charmander">Charmander</option>
            </select>

            <label className="ray-select__label">
              {"What's your starter Pokémon?"}
            </label>
          </div>
        </div>

        <div className="ray-form-item">
          <div className="ray-select ray-select--with-icon-left ray-select--with-icon-right">
            <svg
              className="ray-select__icon--left"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
            >
              <g id="budicon-profile-picture">
                <path d="M12.5,4A4.5,4.5,0,1,0,17,8.5,4.5,4.5,0,0,0,12.5,4Zm0,8A3.5,3.5,0,1,1,16,8.5,3.504,3.504,0,0,1,12.5,12Zm0-12A12.4886,12.4886,0,0,0,5.0007,22.4834v0a12.4325,12.4325,0,0,0,14.9983,0v0q.5-.3761.9593-.7988l0,0A12.4869,12.4869,0,0,0,12.5,0Zm0,24a11.4432,11.4432,0,0,1-7.3931-2.7041,7.4887,7.4887,0,0,1,14.7863,0A11.4432,11.4432,0,0,1,12.5,24Zm8.25-3.5061a8.4871,8.4871,0,0,0-16.5,0,11.5,11.5,0,1,1,16.5,0Z" />
              </g>
            </svg>
            <div className="ray-select__icon--right">👽</div>

            <select className="ray-select__input">
              <option value="" disabled selected data-ray-placeholder />
              <option value="Pikachu">Pikachu</option>
              <option value="Squirtle">Squirtle</option>
              <option value="Bulbasaur">Bulbasaur</option>
              <option value="Charmander">Charmander</option>
            </select>

            <label className="ray-select__label">
              {"What's your starter Pokémon?"}
            </label>
          </div>
        </div>

        <div className="ray-form-item">
          <div className="ray-select ray-select--with-icon-right">
            <div className="ray-select__icon--right">🙏</div>

            <select className="ray-select__input">
              <option value="" disabled selected data-ray-placeholder />
              <option value="Pikachu">Pikachu</option>
              <option value="Squirtle">Squirtle</option>
              <option value="Bulbasaur">Bulbasaur</option>
              <option value="Charmander">Charmander</option>
            </select>

            <label className="ray-select__label">
              {"What's your starter Pokémon?"}
            </label>
          </div>
        </div>

        <div className="ray-form-item">
          <div className="ray-select ray-select--compact ray-select--with-icon-left">
            <div className="ray-select__icon--left">🏂</div>

            <select className="ray-select__input">
              <option value="" disabled selected data-ray-placeholder />
              <option value="Pikachu">Pikachu</option>
              <option value="Squirtle">Squirtle</option>
              <option value="Bulbasaur">Bulbasaur</option>
              <option value="Charmander">Charmander</option>
            </select>

            <label className="ray-select__label">
              {"What's your starter Pokémon?"}
            </label>
          </div>
        </div>
      </>
    );
  });
