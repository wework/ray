import React from 'react';
import { storiesOf } from '@storybook/react';

import Dropdown from '../src/components/dropdown';

function init() {
  window.dnd = Dropdown;
  setTimeout(Dropdown.createAll);
}

storiesOf('Dropdown', module)
  .add('Dropdown no placeholder', () => {
    init();
    return (
      <div className="ray-form-item">
        <div className="ray-dropdown">
          <select className="ray-dropdown__input" id="test-example">
            <option value="Slowpoke">Slowpoke</option>
            <option disabled data-ray-separator />
            <option value="Pikachu">Pikachu</option>
            <option value="Squirtle">Squirtle</option>
            <option value="Charmander">Charmander</option>
            <option value="Sonichu">Sonichu</option>
          </select>
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
              <option value="Charmander" disabled>
                Charmander
              </option>
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
  .add('Dropdown with optgroups', () => {
    init();
    return (
      <>
        <div className="ray-form-item">
          <div className="ray-dropdown">
            <div className="ray-dropdown__wrapper">
              <select
                className="ray-dropdown__input"
                id="test-example"
                value=""
              >
                <optgroup label="Ash">
                  <option value="Pikachu">Pikachu</option>
                  <option value="Charmander">Charmander</option>
                  <option value="Squirtle">Squirtle</option>
                </optgroup>
                <optgroup label="R Team">
                  <option value="Meowt">Meowt</option>
                  <option value="Wobbuffet">Wobbuffet</option>
                  <option value="Magikarp">Magikarp</option>
                </optgroup>
                <optgroup label="Others" disabled>
                  <option value="Slowpoke">Slowpoke</option>
                  <option value="Sonichu">Sonichu</option>
                </optgroup>
              </select>
            </div>
            <label className="ray-dropdown__label" htmlFor="test-example">
              Pokemon
            </label>
          </div>
        </div>
        <div className="ray-form-item" dir="rtl">
          <div className="ray-dropdown">
            <div className="ray-dropdown__wrapper">
              <select
                className="ray-dropdown__input"
                id="test-example"
                value=""
              >
                <optgroup label="Ash">
                  <option value="Pikachu">Pikachu</option>
                  <option value="Charmander">Charmander</option>
                  <option value="Squirtle">Squirtle</option>
                </optgroup>
                <optgroup label="R Team">
                  <option value="Meowt">Meowt</option>
                  <option value="Wobbuffet">Wobbuffet</option>
                  <option value="Magikarp">Magikarp</option>
                </optgroup>
                <optgroup label="Others" disabled>
                  <option value="Slowpoke">Slowpoke</option>
                  <option value="Sonichu">Sonichu</option>
                </optgroup>
              </select>
            </div>
            <label className="ray-dropdown__label" htmlFor="test-example">
              Pokemon
            </label>
          </div>
        </div>
      </>
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
  .add('Dropdown with overflowing value', () => {
    init();
    return (
      <div className="ray-form-item" style={{ width: '110px' }}>
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
      <>
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
        <div className="ray-form-item">
          <div className="ray-dropdown ray-dropdown--compact">
            <div className="ray-dropdown__wrapper">
              <select
                className="ray-dropdown__input"
                id="test-example-2"
                value=""
              >
                <optgroup label="Ash">
                  <option value="Pikachu">Pikachu</option>
                  <option value="Charmander">Charmander</option>
                  <option value="Squirtle">Squirtle</option>
                </optgroup>
                <optgroup label="R Team">
                  <option value="Meowt">Meowt</option>
                  <option value="Wobbuffet">Wobbuffet</option>
                  <option value="Magikarp">Magikarp</option>
                </optgroup>
                <optgroup label="Others" disabled>
                  <option value="Slowpoke">Slowpoke</option>
                  <option value="Sonichu">Sonichu</option>
                </optgroup>
              </select>
            </div>
            <label className="ray-dropdown__label" htmlFor="test-example-2">
              Pokemon
            </label>
          </div>
        </div>
      </>
    );
  })
  .add('Dropdown with hint', () => {
    init();
    return (
      <>
        <div className="ray-form-item">
          <div className="ray-dropdown">
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
          <div className="ray-form-item__hint">I'm a hint</div>
        </div>
        <div className="ray-form-item">
          <div className="ray-dropdown ray-dropdown--error">
            <div className="ray-dropdown__wrapper">
              <select
                className="ray-dropdown__input"
                id="test-example-2"
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
            <label className="ray-dropdown__label" htmlFor="test-example-2">
              Pokemon
            </label>
          </div>
          <div className="ray-form-item__hint">I'm a hint</div>
        </div>
      </>
    );
  })
  .add('Dropdown with icon', () => {
    init();
    return (
      <>
        <div className="ray-form-item">
          <div className="ray-dropdown ray-dropdown--with-icon-start">
            <div className="ray-dropdown__icon--start">😜</div>
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
        <div className="ray-form-item">
          <div className="ray-dropdown ray-dropdown--with-icon-start ray-dropdown--with-icon-end">
            <svg className="ray-dropdown__icon--start" viewBox="0 0 25 25">
              <g id="budicon-profile-picture">
                <path d="M12.5,4A4.5,4.5,0,1,0,17,8.5,4.5,4.5,0,0,0,12.5,4Zm0,8A3.5,3.5,0,1,1,16,8.5,3.504,3.504,0,0,1,12.5,12Zm0-12A12.4886,12.4886,0,0,0,5.0007,22.4834v0a12.4325,12.4325,0,0,0,14.9983,0v0q.5-.3761.9593-.7988l0,0A12.4869,12.4869,0,0,0,12.5,0Zm0,24a11.4432,11.4432,0,0,1-7.3931-2.7041,7.4887,7.4887,0,0,1,14.7863,0A11.4432,11.4432,0,0,1,12.5,24Zm8.25-3.5061a8.4871,8.4871,0,0,0-16.5,0,11.5,11.5,0,1,1,16.5,0Z" />
              </g>
            </svg>
            <div className="ray-dropdown__wrapper">
              <select
                className="ray-dropdown__input"
                id="test-example-1"
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
            <div className="ray-dropdown__icon--end">👽</div>
            <label className="ray-dropdown__label" htmlFor="test-example-1">
              Pokemon
            </label>
          </div>
        </div>
        <div className="ray-form-item">
          <div className="ray-dropdown ray-dropdown--with-icon-end">
            <div className="ray-dropdown__icon--end">🙏</div>
            <div className="ray-dropdown__wrapper">
              <select
                className="ray-dropdown__input"
                id="test-example-2"
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
            <label className="ray-dropdown__label" htmlFor="test-example-2">
              Pokemon
            </label>
          </div>
        </div>
        <div className="ray-form-item">
          <div className="ray-dropdown ray-dropdown--with-icon-start">
            <div className="ray-dropdown__icon--start">🏂</div>
            <div className="ray-dropdown__wrapper">
              <select
                className="ray-dropdown__input"
                id="test-example-3"
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
            <label className="ray-dropdown__label" htmlFor="test-example-3">
              Pokemon
            </label>
          </div>
        </div>
      </>
    );
  })
  .add('Dropdown with prepend', () => {
    init();
    return (
      <>
        <div className="ray-form-item">
          <div className="ray-dropdown ray-dropdown--with-prepend">
            <div className="ray-dropdown__prepend">
              <div>🇺🇸</div>
            </div>
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
              <label className="ray-dropdown__label" htmlFor="test-example">
                Pokemon
              </label>
            </div>
          </div>
        </div>
        <div className="ray-form-item">
          <div className="ray-dropdown ray-dropdown--with-prepend">
            <div className="ray-select__prepend">
              <div>🐢</div>
            </div>
            <div className="ray-dropdown__wrapper">
              <select
                className="ray-dropdown__input"
                id="test-example-1"
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
              <label className="ray-dropdown__label" htmlFor="test-example-1">
                Pokemon
              </label>
            </div>
          </div>
        </div>
      </>
    );
  })
  .add('Dropdown custom rendered options and selected value', () => {
    setTimeout(() => {
      Dropdown.create(document.getElementById('test-example-wrapper'), {
        renderOption: option => {
          const [name, symbol] = option.innerHTML.split('---');
          return `<b>${symbol}:</b>&nbsp;${name}`;
        },
        renderSelected: option => option.value
      });
    });
    return (
      <div className="ray-form-item">
        <div className="ray-dropdown" id="test-example-wrapper">
          <div className="ray-dropdown__wrapper">
            <select
              className="ray-dropdown__input"
              id="test-example"
              value="USD"
            >
              <option value="USD">United States Dollar---$</option>
              <option disabled data-ray-separator />
              <option value="AUD">Australia Dollar---$</option>
              <option value="GBP">United Kingdom Pound---£</option>
              <option value="EUR">Euro Member Countries---€</option>
              <option value="JPY">Japan Yen---¥</option>
              <option value="CHF">Switzerland Franc---CHF</option>
              <option disabled data-ray-separator />
              <option value="ALL">Albania Lek---Lek</option>
              <option value="AFN">Afghanistan Afghani---؋</option>
              <option value="ARS">Argentina Peso---$</option>
              <option value="AWG">Aruba Guilder---ƒ</option>
            </select>
          </div>
          <label className="ray-dropdown__label" htmlFor="test-example">
            Currency
          </label>
        </div>
      </div>
    );
  })
  .add('Test outside controls for dropdown', () => {
    init();
    function getInst() {
      return window.dnd.instances.get(
        document.getElementById('test-example-wrapper')
      );
    }
    function clearValue(e) {
      e.preventDefault();
      const inst = getInst();
      inst.clear();
    }
    function openDrop(e) {
      e.preventDefault();
      e.stopPropagation();
      const inst = getInst();
      inst.open();
    }
    function setDrop(e) {
      e.preventDefault();
      const inst = getInst();
      inst.set('Charmander');
    }
    function enableDrop(e) {
      e.preventDefault();
      const inst = getInst();
      inst.enable();
    }
    function disableDrop(e) {
      e.preventDefault();
      const inst = getInst();
      inst.disable();
    }
    function updateDrop(e) {
      e.preventDefault();
      const input = document.getElementById('test-example');
      const label = document.getElementById('test-example-label');
      const inst = getInst();
      label.innerHTML = 'Currency';
      input.innerHTML = `
        <option value="USD">USD|United states dollar</option>
        <option disabled data-ray-separator />
        <option value="GBP">GBP|Great Britain Pound</option>
        <option value="EUR">EUR|Euro</option>
        <option value="JPY">JPY|Japaneese Yen</option>
      `;
      inst.update({
        renderSelected: option => {
          const [symbol] = option.innerHTML.split('|');
          return `<b>${symbol}</b>`;
        },
        renderOption: option => {
          const [symbol, name] = option.innerHTML.split('|');
          return `<b>${symbol}</b><em>${name}</em>`;
        }
      });
    }
    return (
      <>
        <div className="ray-form-item">
          <div className="ray-dropdown" id="test-example-wrapper">
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
              <label className="ray-dropdown__label" htmlFor="test-example">
                Pokemon
              </label>
            </div>
          </div>
        </div>
        <div className="ray-form-item">
          <button
            className="ray-button ray-button--primary ray-button--compact"
            onClick={clearValue}
          >
            Clear
          </button>
          <button
            className="ray-button ray-button--primary ray-button--compact"
            onClick={setDrop}
          >
            Set Charmander
          </button>
          <button
            className="ray-button ray-button--primary ray-button--compact"
            onClick={openDrop}
          >
            Open
          </button>
          <button
            className="ray-button ray-button--primary ray-button--compact"
            onClick={enableDrop}
          >
            Enable
          </button>
          <button
            className="ray-button ray-button--primary ray-button--compact"
            onClick={disableDrop}
          >
            Disable
          </button>
          <button
            className="ray-button ray-button--primary ray-button--compact"
            onClick={updateDrop}
          >
            Update
          </button>
        </div>
      </>
    );
  })
  .add('Dropdown as TextField prepend', () => {
    init();
    return (
      <div className="ray-form-item">
        <div className="ray-text-field ray-text-field--with-prepend">
          <div className="ray-text-field__prepend">
            <div className="ray-dropdown ray-dropdown--simple">
              <div className="ray-dropdown__wrapper">
                <select
                  className="ray-dropdown__input"
                  id="test-example"
                  value="Charmander"
                  required
                  aria-required="true"
                >
                  <option value="USD">USD</option>
                  <option disabled data-ray-separator />
                  <option value="AUD">AUD</option>
                  <option value="GBP">GBP</option>
                  <option value="EUR">EUR</option>
                  <option value="JPY">JPY</option>
                  <option value="CHF">CHF</option>
                  <option disabled data-ray-separator />
                  <option value="ALL">ALL</option>
                  <option value="AFN">AFN</option>
                  <option value="ARS">ARS</option>
                  <option value="AWG">AWG</option>
                </select>
              </div>
            </div>
          </div>
          <div className="ray-text-field__wrapper">
            <input
              type="text"
              className="ray-text-field__input"
              id="input2"
              placeholder="Numeric amount..."
            />
            <label className="ray-text-field__label" htmlFor="input2">
              Expected profit
            </label>
          </div>
        </div>
      </div>
    );
  });
