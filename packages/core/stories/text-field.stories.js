import React from 'react';
import { storiesOf } from '@storybook/react';

import { TextField, TextArea } from '../src/components/text-field';
import Select from '../src/components/select';

function initTextField() {
  TextField.createAll();
}

function initTextArea() {
  TextArea.createAll();
}

function initSelect() {
  Select.createAll();
}

storiesOf('Text Field', module)
  .add('Text field', () => {
    setTimeout(initTextField);

    return (
      <div className="ray-text-field">
        <input
          className="ray-text-field__input"
          id="email"
          type="email"
          placeholder="arya.stark@winterfell.org"
        />
        <label className="ray-text-field__label" htmlFor="email">
          Email address
        </label>
      </div>
    );
  })
  .add('Text field, active', () => (
    <div className="ray-text-field ray-text-field--active">
      <input
        className="ray-text-field__input"
        id="email"
        type="email"
        placeholder="arya.stark@winterfell.org"
      />
      <label className="ray-text-field__label" htmlFor="email">
        Email address
      </label>
    </div>
  ))
  .add('Text field, required', () => {
    setTimeout(initTextField);
    return (
      <div className="ray-text-field ray-text-field--active">
        <input
          className="ray-text-field__input"
          id="email"
          type="email"
          placeholder="arya.stark@winterfell.org"
          required
        />
        <label className="ray-text-field__label" htmlFor="email">
          Email address
        </label>
      </div>
    );
  })
  .add('Text field, textarea', () => {
    setTimeout(initTextArea);

    return (
      <div className="ray-text-area">
        <textarea
          className="ray-text-area__input"
          id="textarea"
          placeholder="Few people are aware..."
        />
        <label className="ray-text-area__label" htmlFor="textarea">
          Fun fact about Ray Eames
        </label>
      </div>
    );
  })
  .add('Text field, textarea - required', () => {
    setTimeout(initTextArea);

    return (
      <div className="ray-text-area">
        <textarea
          className="ray-text-area__input"
          id="textarea"
          placeholder="Few people are aware..."
          required
        />
        <label className="ray-text-area__label" htmlFor="textarea">
          Fun fact about Ray Eames
        </label>
      </div>
    );
  })
  .add('Text field, multi-row textarea', () => {
    setTimeout(initTextArea);

    return (
      <div className="ray-text-area">
        <textarea
          className="ray-text-area__input"
          rows="4"
          id="textarea"
          placeholder="Few people are aware..."
        />
        <label className="ray-text-area__label" htmlFor="textarea">
          Fun fact about Ray Eames
        </label>
      </div>
    );
  })
  .add('Text field, active, textarea', () => (
    <div className="ray-text-area ray-text-area--active">
      <textarea
        className="ray-text-area__input"
        id="textarea"
        placeholder="Few people are aware..."
      />
      <label className="ray-text-area__label" htmlFor="textarea">
        Fun fact about Ray Eames
      </label>
    </div>
  ))
  .add('Text field, disabled', () => {
    setTimeout(initTextField);

    return (
      <div className="ray-text-field ray-text-field--disabled">
        <input
          className="ray-text-field__input"
          id="email"
          type="email"
          placeholder="arya.stark@winterfell.org"
          disabled
        />
        <label className="ray-text-field__label" htmlFor="email">
          Email address
        </label>
      </div>
    );
  })
  .add('Text field, active disabled', () => (
    <div className="ray-text-field ray-text-field--active ray-text-field--disabled">
      <input
        className="ray-text-field__input"
        id="email"
        type="email"
        placeholder="arya.stark@winterfell.org"
        disabled
      />
      <label className="ray-text-field__label" htmlFor="email">
        Email address
      </label>
    </div>
  ))
  .add('Example Form', () => {
    setTimeout(initTextField);
    setTimeout(initTextArea);

    return (
      <div className="container">
        <div className="row">
          <div className="offset-3 col-6">
            <h2 className="h3">Sign up</h2>
            <div className="ray-form-item">
              <div className="ray-text-field">
                <input
                  className="ray-text-field__input"
                  id="name"
                  type="text"
                  placeholder="Arya Stark"
                />
                <label className="ray-text-field__label" htmlFor="name">
                  Name
                </label>
              </div>
            </div>

            <div className="ray-form-item">
              <div className="ray-text-field">
                <input
                  className="ray-text-field__input"
                  id="email"
                  type="text"
                  placeholder="arya.stark@winterfell.org"
                />
                <label className="ray-text-field__label" htmlFor="email">
                  Email address
                </label>
              </div>
              <div className="ray-form-item__hint">We want your emails</div>
            </div>

            <div className="ray-form-item">
              <div className="ray-text-field">
                <input
                  className="ray-text-field__input"
                  id="password"
                  type="password"
                  placeholder="*********"
                />
                <label className="ray-text-field__label" htmlFor="password">
                  Password
                </label>
              </div>
            </div>

            <div className="ray-form-item">
              <div className="ray-text-field">
                <input
                  className="ray-text-field__input"
                  id="long-label"
                  type="text"
                  placeholder="Super soopah soup or super long placeholder"
                />
                <label className="ray-text-field__label" htmlFor="long-label">
                  Label Empty State That Overflows quickly and is very long
                </label>
              </div>
            </div>

            <button className="ray-button ray-button--primary">Submit</button>
          </div>
        </div>
      </div>
    );
  })
  .add('Hint states', () => {
    setTimeout(initTextField);

    return (
      <div className="container">
        <div className="row">
          <div className="offset-3 col-6">
            <div className="ray-form-item">
              <div className="ray-text-field">
                <input
                  className="ray-text-field__input"
                  id="name"
                  type="text"
                  placeholder="Arya Stark"
                />
                <label className="ray-text-field__label" htmlFor="name">
                  Name
                </label>
              </div>
              <div className="ray-form-item__hint">Nuetral hint</div>
            </div>
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--success">
                <input
                  className="ray-text-field__input"
                  id="email"
                  type="text"
                  placeholder="arya.stark@winterfell.org"
                />
                <label className="ray-text-field__label" htmlFor="email">
                  Email address
                </label>
              </div>
              <div className="ray-form-item__hint ray-form-item__hint--success">
                Success hint
              </div>
            </div>
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--error">
                <input
                  className="ray-text-field__input"
                  id="password"
                  type="password"
                  placeholder="*********"
                />
                <label className="ray-text-field__label" htmlFor="password">
                  Password
                </label>
              </div>
              <div className="ray-form-item__hint ray-form-item__hint--error">
                Error hint
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  })
  .add('Text field - compact', () => {
    setTimeout(initTextField);

    return (
      <div className="ray-text-field ray-text-field--compact">
        <input
          className="ray-text-field__input"
          id="email"
          type="email"
          placeholder="arya.stark@winterfell.org"
        />
        <label className="ray-text-field__label" htmlFor="email">
          Email address
        </label>
      </div>
    );
  })
  .add('Text field, active - compact', () => (
    <div className="ray-text-field ray-text-field--active ray-text-field--compact">
      <input
        className="ray-text-field__input"
        id="email"
        type="email"
        placeholder="arya.stark@winterfell.org"
      />
      <label className="ray-text-field__label" htmlFor="email">
        Email address
      </label>
    </div>
  ))
  .add('Text field - compact - disabled', () => {
    setTimeout(initTextField);

    return (
      <div className="ray-text-field ray-text-field--compact ray-text-field--disabled">
        <input
          className="ray-text-field__input"
          id="email"
          type="email"
          placeholder="arya.stark@winterfell.org"
          disabled
        />
        <label className="ray-text-field__label" htmlFor="email">
          Email address
        </label>
      </div>
    );
  })
  .add('Text field, textarea - compact', () => {
    setTimeout(initTextArea);

    return (
      <div className="ray-text-area ray-text-area--compact">
        <textarea
          className="ray-text-area__input"
          id="textarea"
          placeholder="Few people are aware..."
        />
        <label className="ray-text-area__label" htmlFor="textarea">
          Fun fact about Ray Eames
        </label>
      </div>
    );
  })
  .add('Text field, with icon', () => {
    setTimeout(initTextField);

    return (
      <>
        <div className="ray-form-item">
          <div className="ray-text-field ray-text-field--with-icon-start">
            <svg
              className="ray-text-field__icon--start"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
            >
              <g id="budicon-profile-picture">
                <path d="M12.5,4A4.5,4.5,0,1,0,17,8.5,4.5,4.5,0,0,0,12.5,4Zm0,8A3.5,3.5,0,1,1,16,8.5,3.504,3.504,0,0,1,12.5,12Zm0-12A12.4886,12.4886,0,0,0,5.0007,22.4834v0a12.4325,12.4325,0,0,0,14.9983,0v0q.5-.3761.9593-.7988l0,0A12.4869,12.4869,0,0,0,12.5,0Zm0,24a11.4432,11.4432,0,0,1-7.3931-2.7041,7.4887,7.4887,0,0,1,14.7863,0A11.4432,11.4432,0,0,1,12.5,24Zm8.25-3.5061a8.4871,8.4871,0,0,0-16.5,0,11.5,11.5,0,1,1,16.5,0Z" />
              </g>
            </svg>

            <input
              type="text"
              className="ray-text-field__input"
              id="input"
              placeholder="Few people are aware..."
            />
            <label className="ray-text-field__label" htmlFor="input">
              Fun fact about Ray Eames
            </label>
          </div>
        </div>{' '}
        <div className="ray-form-item">
          <div className="ray-text-field ray-text-field--disabled ray-text-field--with-icon-start">
            <svg
              className="ray-text-field__icon--start"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
            >
              <g id="budicon-profile-picture">
                <path d="M12.5,4A4.5,4.5,0,1,0,17,8.5,4.5,4.5,0,0,0,12.5,4Zm0,8A3.5,3.5,0,1,1,16,8.5,3.504,3.504,0,0,1,12.5,12Zm0-12A12.4886,12.4886,0,0,0,5.0007,22.4834v0a12.4325,12.4325,0,0,0,14.9983,0v0q.5-.3761.9593-.7988l0,0A12.4869,12.4869,0,0,0,12.5,0Zm0,24a11.4432,11.4432,0,0,1-7.3931-2.7041,7.4887,7.4887,0,0,1,14.7863,0A11.4432,11.4432,0,0,1,12.5,24Zm8.25-3.5061a8.4871,8.4871,0,0,0-16.5,0,11.5,11.5,0,1,1,16.5,0Z" />
              </g>
            </svg>

            <input
              type="text"
              className="ray-text-field__input"
              id="input2"
              placeholder="Few people are aware..."
              disabled
            />
            <label className="ray-text-field__label" htmlFor="input2">
              Fun fact about Ray Eames
            </label>
          </div>
        </div>
      </>
    );
  })
  .add('Text field, with prepend', () => {
    setTimeout(initTextField);
    setTimeout(initSelect);

    return (
      <>
        <div className="ray-form-item">
          <div className="ray-text-field ray-text-field--with-prepend">
            <div className="ray-text-field__prepend">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                style={{ height: '1rem' }}
              >
                <g id="budicon-profile-picture">
                  <path d="M12.5,4A4.5,4.5,0,1,0,17,8.5,4.5,4.5,0,0,0,12.5,4Zm0,8A3.5,3.5,0,1,1,16,8.5,3.504,3.504,0,0,1,12.5,12Zm0-12A12.4886,12.4886,0,0,0,5.0007,22.4834v0a12.4325,12.4325,0,0,0,14.9983,0v0q.5-.3761.9593-.7988l0,0A12.4869,12.4869,0,0,0,12.5,0Zm0,24a11.4432,11.4432,0,0,1-7.3931-2.7041,7.4887,7.4887,0,0,1,14.7863,0A11.4432,11.4432,0,0,1,12.5,24Zm8.25-3.5061a8.4871,8.4871,0,0,0-16.5,0,11.5,11.5,0,1,1,16.5,0Z" />
                </g>
              </svg>
            </div>
            <div className="ray-text-field__wrapper">
              <input
                type="text"
                className="ray-text-field__input"
                id="input2"
                placeholder="Few people are aware..."
              />
              <label className="ray-text-field__label" htmlFor="input2">
                Fun fact about Ray Eames
              </label>
            </div>
          </div>
        </div>{' '}
        <div className="ray-form-item">
          <div className="ray-text-field ray-text-field--disabled ray-text-field--with-prepend">
            <div className="ray-text-field__prepend">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                style={{ height: '1rem' }}
              >
                <g id="budicon-profile-picture">
                  <path d="M12.5,4A4.5,4.5,0,1,0,17,8.5,4.5,4.5,0,0,0,12.5,4Zm0,8A3.5,3.5,0,1,1,16,8.5,3.504,3.504,0,0,1,12.5,12Zm0-12A12.4886,12.4886,0,0,0,5.0007,22.4834v0a12.4325,12.4325,0,0,0,14.9983,0v0q.5-.3761.9593-.7988l0,0A12.4869,12.4869,0,0,0,12.5,0Zm0,24a11.4432,11.4432,0,0,1-7.3931-2.7041,7.4887,7.4887,0,0,1,14.7863,0A11.4432,11.4432,0,0,1,12.5,24Zm8.25-3.5061a8.4871,8.4871,0,0,0-16.5,0,11.5,11.5,0,1,1,16.5,0Z" />
                </g>
              </svg>
            </div>
            <div className="ray-text-field__wrapper">
              <input
                type="text"
                className="ray-text-field__input"
                id="input"
                placeholder="Few people are aware..."
                disabled
              />
              <label className="ray-text-field__label" htmlFor="input">
                Fun fact about Ray Eames
              </label>
            </div>
          </div>
        </div>{' '}
        <div
          style={{ backgroundColor: '#f7f7f7', padding: '2rem 1.5rem 1.5rem' }}
        >
          <div className="ray-form-item">
            <div className="ray-text-field">
              <div className="ray-text-field__wrapper">
                <input
                  type="text"
                  className="ray-text-field__input"
                  id="input-name"
                  placeholder="John Doe"
                  required
                />
                <label className="ray-text-field__label" htmlFor="input-name">
                  Full name
                </label>
              </div>
            </div>
          </div>
          <div className="ray-form-item">
            <div className="ray-text-field">
              <div className="ray-text-field__wrapper">
                <input
                  type="text"
                  className="ray-text-field__input"
                  id="input-email"
                  placeholder="john@example.com"
                  required
                />
                <label className="ray-text-field__label" htmlFor="input-email">
                  Email Adress
                </label>
              </div>
            </div>
          </div>
          <div className="ray-form-item">
            <div className="ray-text-field ray-text-field--with-prepend">
              <div className="ray-text-field__prepend">
                <div className="ray-select ray-select--has-value ray-select--simple">
                  <select
                    className="ray-select__input ray-select--simple__input"
                    required
                  >
                    <optgroup label="">
                      <option value="US" selected>
                        🇺🇸 United States
                      </option>
                      <option value="UK">🇬🇧 United Kingdom</option>
                    </optgroup>
                    <optgroup label="---------------------">
                      <option>🇦🇫 Afghanistan (‫افغانستان‬‎)</option>
                    </optgroup>
                  </select>
                </div>
              </div>
              <div className="ray-text-field__wrapper">
                <input
                  type="text"
                  className="ray-text-field__input"
                  id="input-phone"
                  placeholder="1-212-555-1212"
                  required
                />
                <label className="ray-text-field__label" htmlFor="input-phone">
                  Phone number
                </label>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  })
  .add('Text field, with prepend (RTL)', () => {
    setTimeout(initTextField);
    setTimeout(initSelect);

    return (
      <div dir="rtl">
        <div className="ray-form-item">
          <div className="ray-text-field ray-text-field--with-prepend">
            <div className="ray-text-field__prepend">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                style={{ height: '1rem' }}
              >
                <g id="budicon-profile-picture">
                  <path d="M12.5,4A4.5,4.5,0,1,0,17,8.5,4.5,4.5,0,0,0,12.5,4Zm0,8A3.5,3.5,0,1,1,16,8.5,3.504,3.504,0,0,1,12.5,12Zm0-12A12.4886,12.4886,0,0,0,5.0007,22.4834v0a12.4325,12.4325,0,0,0,14.9983,0v0q.5-.3761.9593-.7988l0,0A12.4869,12.4869,0,0,0,12.5,0Zm0,24a11.4432,11.4432,0,0,1-7.3931-2.7041,7.4887,7.4887,0,0,1,14.7863,0A11.4432,11.4432,0,0,1,12.5,24Zm8.25-3.5061a8.4871,8.4871,0,0,0-16.5,0,11.5,11.5,0,1,1,16.5,0Z" />
                </g>
              </svg>
            </div>
            <div className="ray-text-field__wrapper">
              <input
                type="text"
                className="ray-text-field__input"
                id="input2"
                placeholder="Few people are aware..."
              />
              <label className="ray-text-field__label" htmlFor="input2">
                Fun fact about Ray Eames
              </label>
            </div>
          </div>
        </div>{' '}
        <div className="ray-form-item">
          <div className="ray-text-field ray-text-field--disabled ray-text-field--with-prepend">
            <div className="ray-text-field__prepend">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                style={{ height: '1rem' }}
              >
                <g id="budicon-profile-picture">
                  <path d="M12.5,4A4.5,4.5,0,1,0,17,8.5,4.5,4.5,0,0,0,12.5,4Zm0,8A3.5,3.5,0,1,1,16,8.5,3.504,3.504,0,0,1,12.5,12Zm0-12A12.4886,12.4886,0,0,0,5.0007,22.4834v0a12.4325,12.4325,0,0,0,14.9983,0v0q.5-.3761.9593-.7988l0,0A12.4869,12.4869,0,0,0,12.5,0Zm0,24a11.4432,11.4432,0,0,1-7.3931-2.7041,7.4887,7.4887,0,0,1,14.7863,0A11.4432,11.4432,0,0,1,12.5,24Zm8.25-3.5061a8.4871,8.4871,0,0,0-16.5,0,11.5,11.5,0,1,1,16.5,0Z" />
                </g>
              </svg>
            </div>
            <div className="ray-text-field__wrapper">
              <input
                type="text"
                className="ray-text-field__input"
                id="input"
                placeholder="Few people are aware..."
                disabled
              />
              <label className="ray-text-field__label" htmlFor="input">
                Fun fact about Ray Eames
              </label>
            </div>
          </div>
        </div>{' '}
        <div
          style={{ backgroundColor: '#f7f7f7', padding: '2rem 1.5rem 1.5rem' }}
        >
          <div className="ray-form-item">
            <div className="ray-text-field">
              <div className="ray-text-field__wrapper">
                <input
                  type="text"
                  className="ray-text-field__input"
                  id="input-name"
                  placeholder="John Doe"
                  required
                />
                <label className="ray-text-field__label" htmlFor="input-name">
                  Full name
                </label>
              </div>
            </div>
          </div>
          <div className="ray-form-item">
            <div className="ray-text-field">
              <div className="ray-text-field__wrapper">
                <input
                  type="text"
                  className="ray-text-field__input"
                  id="input-email"
                  placeholder="john@example.com"
                  required
                />
                <label className="ray-text-field__label" htmlFor="input-email">
                  Email Adress
                </label>
              </div>
            </div>
          </div>
          <div className="ray-form-item">
            <div className="ray-text-field ray-text-field--with-prepend">
              <div className="ray-text-field__prepend">
                <div className="ray-select ray-select--has-value ray-select--simple">
                  <select
                    className="ray-select__input ray-select--simple__input"
                    required
                  >
                    <optgroup label="">
                      <option value="US" selected>
                        United States 🇺🇸
                      </option>
                      <option value="UK">United Kingdom 🇬🇧</option>
                    </optgroup>
                    <optgroup label="---------------------">
                      <option>🇦🇫 Afghanistan (‫افغانستان‬‎)</option>
                    </optgroup>
                  </select>
                </div>
              </div>
              <div className="ray-text-field__wrapper">
                <input
                  type="text"
                  className="ray-text-field__input"
                  id="input-phone"
                  placeholder="1-212-555-1212"
                  required
                />
                <label className="ray-text-field__label" htmlFor="input-phone">
                  Phone number
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  })
  .add('Text field, with append', () => {
    setTimeout(initTextField);
    setTimeout(initSelect);

    return (
      <>
        <div className="ray-form-item">
          <div className="ray-text-field ray-text-field--with-append">
            <div className="ray-text-field__wrapper">
              <input
                type="text"
                className="ray-text-field__input"
                id="input2"
                placeholder="Few people are aware..."
              />
              <label className="ray-text-field__label" htmlFor="input2">
                Fun fact about Ray Eames
              </label>
            </div>
            <div className="ray-text-field__append">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                style={{ height: '1rem' }}
              >
                <g id="budicon-profile-picture">
                  <path d="M12.5,4A4.5,4.5,0,1,0,17,8.5,4.5,4.5,0,0,0,12.5,4Zm0,8A3.5,3.5,0,1,1,16,8.5,3.504,3.504,0,0,1,12.5,12Zm0-12A12.4886,12.4886,0,0,0,5.0007,22.4834v0a12.4325,12.4325,0,0,0,14.9983,0v0q.5-.3761.9593-.7988l0,0A12.4869,12.4869,0,0,0,12.5,0Zm0,24a11.4432,11.4432,0,0,1-7.3931-2.7041,7.4887,7.4887,0,0,1,14.7863,0A11.4432,11.4432,0,0,1,12.5,24Zm8.25-3.5061a8.4871,8.4871,0,0,0-16.5,0,11.5,11.5,0,1,1,16.5,0Z" />
                </g>
              </svg>
            </div>
          </div>
        </div>{' '}
        <div className="ray-form-item">
          <div className="ray-text-field ray-text-field--disabled ray-text-field--with-append">
            <div className="ray-text-field__wrapper">
              <input
                type="text"
                className="ray-text-field__input"
                id="input"
                placeholder="Few people are aware..."
                disabled
              />
              <label className="ray-text-field__label" htmlFor="input">
                Fun fact about Ray Eames
              </label>
            </div>
            <div className="ray-text-field__append">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                style={{ height: '1rem' }}
              >
                <g id="budicon-profile-picture">
                  <path d="M12.5,4A4.5,4.5,0,1,0,17,8.5,4.5,4.5,0,0,0,12.5,4Zm0,8A3.5,3.5,0,1,1,16,8.5,3.504,3.504,0,0,1,12.5,12Zm0-12A12.4886,12.4886,0,0,0,5.0007,22.4834v0a12.4325,12.4325,0,0,0,14.9983,0v0q.5-.3761.9593-.7988l0,0A12.4869,12.4869,0,0,0,12.5,0Zm0,24a11.4432,11.4432,0,0,1-7.3931-2.7041,7.4887,7.4887,0,0,1,14.7863,0A11.4432,11.4432,0,0,1,12.5,24Zm8.25-3.5061a8.4871,8.4871,0,0,0-16.5,0,11.5,11.5,0,1,1,16.5,0Z" />
                </g>
              </svg>
            </div>
          </div>
        </div>{' '}
        <div
          style={{ backgroundColor: '#f7f7f7', padding: '2rem 1.5rem 1.5rem' }}
        >
          <div className="ray-form-item">
            <div className="ray-text-field">
              <div className="ray-text-field__wrapper">
                <input
                  type="text"
                  className="ray-text-field__input"
                  id="input-name"
                  placeholder="John Doe"
                  required
                />
                <label className="ray-text-field__label" htmlFor="input-name">
                  Full name
                </label>
              </div>
            </div>
          </div>
          <div className="ray-form-item">
            <div className="ray-text-field">
              <div className="ray-text-field__wrapper">
                <input
                  type="text"
                  className="ray-text-field__input"
                  id="input-email"
                  placeholder="john@example.com"
                  required
                />
                <label className="ray-text-field__label" htmlFor="input-email">
                  Email Address
                </label>
              </div>
            </div>
          </div>
          <div className="ray-form-item">
            <div className="ray-text-field ray-text-field--with-append">
              <div className="ray-text-field__wrapper">
                <input
                  type="text"
                  className="ray-text-field__input"
                  id="input-phone"
                  placeholder="1-212-555-1212"
                  required
                />
                <label className="ray-text-field__label" htmlFor="input-phone">
                  Phone number
                </label>
              </div>
              <div className="ray-text-field__append">
                <div className="ray-select ray-select--has-value ray-select--simple">
                  <select
                    className="ray-select__input ray-select--simple__input"
                    required
                  >
                    <optgroup label="">
                      <option value="US" selected>
                        🇺🇸 United States
                      </option>
                      <option value="UK">🇬🇧 United Kingdom</option>
                    </optgroup>
                    <optgroup label="---------------------">
                      <option>🇦🇫 Afghanistan (‫افغانستان‬‎)</option>
                    </optgroup>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  })
  .add('Text field, with append (RTL)', () => {
    setTimeout(initTextField);
    setTimeout(initSelect);

    return (
      <div dir="rtl">
        <div className="ray-form-item">
          <div className="ray-text-field ray-text-field--with-append">
            <div className="ray-text-field__wrapper">
              <input
                type="text"
                className="ray-text-field__input"
                id="input2"
                placeholder="Few people are aware..."
              />
              <label className="ray-text-field__label" htmlFor="input2">
                Fun fact about Ray Eames
              </label>
            </div>
            <div className="ray-text-field__append">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                style={{ height: '1rem' }}
              >
                <g id="budicon-profile-picture">
                  <path d="M12.5,4A4.5,4.5,0,1,0,17,8.5,4.5,4.5,0,0,0,12.5,4Zm0,8A3.5,3.5,0,1,1,16,8.5,3.504,3.504,0,0,1,12.5,12Zm0-12A12.4886,12.4886,0,0,0,5.0007,22.4834v0a12.4325,12.4325,0,0,0,14.9983,0v0q.5-.3761.9593-.7988l0,0A12.4869,12.4869,0,0,0,12.5,0Zm0,24a11.4432,11.4432,0,0,1-7.3931-2.7041,7.4887,7.4887,0,0,1,14.7863,0A11.4432,11.4432,0,0,1,12.5,24Zm8.25-3.5061a8.4871,8.4871,0,0,0-16.5,0,11.5,11.5,0,1,1,16.5,0Z" />
                </g>
              </svg>
            </div>
          </div>
        </div>{' '}
        <div className="ray-form-item">
          <div className="ray-text-field ray-text-field--disabled ray-text-field--with-append">
            <div className="ray-text-field__wrapper">
              <input
                type="text"
                className="ray-text-field__input"
                id="input"
                placeholder="Few people are aware..."
                disabled
              />
              <label className="ray-text-field__label" htmlFor="input">
                Fun fact about Ray Eames
              </label>
            </div>
            <div className="ray-text-field__append">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                style={{ height: '1rem' }}
              >
                <g id="budicon-profile-picture">
                  <path d="M12.5,4A4.5,4.5,0,1,0,17,8.5,4.5,4.5,0,0,0,12.5,4Zm0,8A3.5,3.5,0,1,1,16,8.5,3.504,3.504,0,0,1,12.5,12Zm0-12A12.4886,12.4886,0,0,0,5.0007,22.4834v0a12.4325,12.4325,0,0,0,14.9983,0v0q.5-.3761.9593-.7988l0,0A12.4869,12.4869,0,0,0,12.5,0Zm0,24a11.4432,11.4432,0,0,1-7.3931-2.7041,7.4887,7.4887,0,0,1,14.7863,0A11.4432,11.4432,0,0,1,12.5,24Zm8.25-3.5061a8.4871,8.4871,0,0,0-16.5,0,11.5,11.5,0,1,1,16.5,0Z" />
                </g>
              </svg>
            </div>
          </div>
        </div>{' '}
        <div
          style={{ backgroundColor: '#f7f7f7', padding: '2rem 1.5rem 1.5rem' }}
        >
          <div className="ray-form-item">
            <div className="ray-text-field">
              <div className="ray-text-field__wrapper">
                <input
                  type="text"
                  className="ray-text-field__input"
                  id="input-name"
                  placeholder="John Doe"
                  required
                />
                <label className="ray-text-field__label" htmlFor="input-name">
                  Full name
                </label>
              </div>
            </div>
          </div>
          <div className="ray-form-item">
            <div className="ray-text-field">
              <div className="ray-text-field__wrapper">
                <input
                  type="text"
                  className="ray-text-field__input"
                  id="input-email"
                  placeholder="john@example.com"
                  required
                />
                <label className="ray-text-field__label" htmlFor="input-email">
                  Email Address
                </label>
              </div>
            </div>
          </div>
          <div className="ray-form-item">
            <div className="ray-text-field ray-text-field--with-append">
              <div className="ray-text-field__wrapper">
                <input
                  type="text"
                  className="ray-text-field__input"
                  id="input-phone"
                  placeholder="1-212-555-1212"
                  required
                />
                <label className="ray-text-field__label" htmlFor="input-phone">
                  Phone number
                </label>
              </div>
              <div className="ray-text-field__append">
                <div className="ray-select ray-select--has-value ray-select--simple">
                  <select
                    className="ray-select__input ray-select--simple__input"
                    required
                  >
                    <optgroup label="">
                      <option value="US" selected>
                        United States 🇺🇸
                      </option>
                      <option value="UK">United Kingdom 🇬🇧</option>
                    </optgroup>
                    <optgroup label="---------------------">
                      <option>🇦🇫 Afghanistan (‫افغانستان‬‎)</option>
                    </optgroup>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  })
  .add('Text field, active, textarea - compact', () => (
    <div className="ray-text-area ray-text-area--active ray-text-area--compact">
      <textarea
        className="ray-text-area__input"
        id="textarea"
        placeholder="Few people are aware..."
      />
      <label className="ray-text-area__label" htmlFor="textarea">
        Fun fact about Ray Eames
      </label>
    </div>
  ))
  .add('Text field, fieldset', () => {
    setTimeout(initTextField);

    return (
      <fieldset className="ray-fieldset">
        <legend className="ray-fieldset__legend">User Information</legend>

        <div className="ray-form-item">
          <div className="ray-text-field">
            <input
              className="ray-text-field__input"
              id="name"
              type="text"
              placeholder="Arya"
            />
            <label className="ray-text-field__label" htmlFor="name">
              Name
            </label>
          </div>
          <div className="ray-form-item__hint">What should we call you?</div>
        </div>
        <div className="ray-form-item">
          <div className="ray-text-field">
            <input
              className="ray-text-field__input"
              id="email"
              type="email"
              placeholder="arya.stark@winterfell.org"
            />
            <label className="ray-text-field__label" htmlFor="email">
              Email address
            </label>
          </div>
          <div className="ray-form-item__hint">How can we reach you?</div>
        </div>
      </fieldset>
    );
  })
  .add('Example Form - compact', () => {
    setTimeout(initTextField);
    setTimeout(initTextArea);

    return (
      <div className="container">
        <div className="row">
          <div className="offset-3 col-6">
            <h2 className="h3">Sign up</h2>
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--compact">
                <input
                  className="ray-text-field__input"
                  id="name"
                  type="text"
                  placeholder="Arya Stark"
                />
                <label className="ray-text-field__label" htmlFor="name">
                  Name
                </label>
              </div>
            </div>
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--compact">
                <input
                  className="ray-text-field__input"
                  id="email"
                  type="text"
                  placeholder="arya.stark@winterfell.org"
                />
                <label className="ray-text-field__label" htmlFor="email">
                  Email address
                </label>
              </div>
              <div className="ray-form-item__hint">We want your emails</div>
            </div>
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--compact">
                <input
                  className="ray-text-field__input"
                  id="password"
                  type="password"
                  placeholder="*********"
                />
                <label className="ray-text-field__label" htmlFor="password">
                  Password
                </label>
              </div>
            </div>
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--compact">
                <input
                  className="ray-text-field__input"
                  id="long-label"
                  type="text"
                  placeholder="Super soopah soup or super long placeholder"
                />
                <label className="ray-text-field__label" htmlFor="long-label">
                  Label Empty State That Overflows quickly and is very long
                </label>
              </div>
            </div>
            <div className="ray-form-item">
              <div className="ray-text-area ray-text-area--compact">
                <textarea
                  className="ray-text-area__input"
                  id="textarea"
                  placeholder="Tell me, uh, something about yourself"
                />
                <label className="ray-text-area__label" htmlFor="textarea">
                  Notes
                </label>
              </div>
            </div>

            <button className="ray-button ray-button--compact ray-button--primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  })
  .add('Hint states - compact', () => {
    setTimeout(initTextField);

    return (
      <div className="container">
        <div className="row">
          <div className="offset-3 col-6">
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--compact">
                <input
                  className="ray-text-field__input"
                  id="name"
                  type="text"
                  placeholder="Arya Stark"
                />
                <label className="ray-text-field__label" htmlFor="name">
                  Name
                </label>
              </div>
              <div className="ray-form-item__hint">Nuetral hint</div>
            </div>
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--success ray-text-field--compact">
                <input
                  className="ray-text-field__input"
                  id="email"
                  type="text"
                  placeholder="arya.stark@winterfell.org"
                />
                <label className="ray-text-field__label" htmlFor="email">
                  Email address
                </label>
              </div>
              <div className="ray-form-item__hint ray-form-item__hint--success">
                Success hint
              </div>
            </div>
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--error ray-text-field--compact">
                <input
                  className="ray-text-field__input"
                  id="password"
                  type="password"
                  placeholder="*********"
                />
                <label className="ray-text-field__label" htmlFor="password">
                  Password
                </label>
              </div>
              <div className="ray-form-item__hint ray-form-item__hint--error">
                Error hint
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  })
  .add('Text field, active, textarea - compact', () => (
    <div className="ray-text-area ray-text-area--active ray-text-area--compact">
      <textarea
        className="ray-text-area__input"
        id="textarea"
        placeholder="Few people are aware..."
      />
      <label className="ray-text-area__label" htmlFor="textarea">
        Fun fact about Ray Eames
      </label>
    </div>
  ))
  .add('Text field, fieldset', () => {
    setTimeout(initTextField);

    return (
      <fieldset className="ray-fieldset">
        <legend className="ray-fieldset__legend">User Information</legend>

        <div className="ray-form-item">
          <div className="ray-text-field">
            <input
              className="ray-text-field__input"
              id="name"
              type="text"
              placeholder="Arya"
            />
            <label className="ray-text-field__label" htmlFor="name">
              Name
            </label>
          </div>
          <div className="ray-form-item__hint">What should we call you?</div>
        </div>
        <div className="ray-form-item">
          <div className="ray-text-field">
            <input
              className="ray-text-field__input"
              id="email"
              type="email"
              placeholder="arya.stark@winterfell.org"
            />
            <label className="ray-text-field__label" htmlFor="email">
              Email address
            </label>
          </div>
          <div className="ray-form-item__hint">How can we reach you?</div>
        </div>
      </fieldset>
    );
  })
  .add('Example Form - compact', () => {
    setTimeout(initTextField);
    setTimeout(initTextArea);

    return (
      <div className="container">
        <div className="row">
          <div className="offset-3 col-6">
            <h2 className="h3">Sign up</h2>
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--compact">
                <input
                  className="ray-text-field__input"
                  id="name"
                  type="text"
                  placeholder="Arya Stark"
                />
                <label className="ray-text-field__label" htmlFor="name">
                  Name
                </label>
              </div>
            </div>
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--compact">
                <input
                  className="ray-text-field__input"
                  id="email"
                  type="text"
                  placeholder="arya.stark@winterfell.org"
                />
                <label className="ray-text-field__label" htmlFor="email">
                  Email address
                </label>
              </div>
              <div className="ray-form-item__hint">We want your emails</div>
            </div>
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--compact">
                <input
                  className="ray-text-field__input"
                  id="password"
                  type="password"
                  placeholder="*********"
                />
                <label className="ray-text-field__label" htmlFor="password">
                  Password
                </label>
              </div>
            </div>
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--compact">
                <input
                  className="ray-text-field__input"
                  id="long-label"
                  type="text"
                  placeholder="Super soopah soup or super long placeholder"
                />
                <label className="ray-text-field__label" htmlFor="long-label">
                  Label Empty State That Overflows quickly and is very long
                </label>
              </div>
            </div>
            <div className="ray-form-item">
              <div className="ray-text-area ray-text-area--compact">
                <textarea
                  className="ray-text-area__input"
                  id="textarea"
                  placeholder="Tell me, uh, something about yourself"
                />
                <label className="ray-text-area__label" htmlFor="textarea">
                  Notes
                </label>
              </div>
            </div>

            <button className="ray-button ray-button--compact ray-button--primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  })
  .add('Hint states - compact', () => {
    setTimeout(initTextField);

    return (
      <div className="container">
        <div className="row">
          <div className="offset-3 col-6">
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--compact">
                <input
                  className="ray-text-field__input"
                  id="name"
                  type="text"
                  placeholder="Arya Stark"
                />
                <label className="ray-text-field__label" htmlFor="name">
                  Name
                </label>
              </div>
              <div className="ray-form-item__hint">Nuetral hint</div>
            </div>
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--success ray-text-field--compact">
                <input
                  className="ray-text-field__input"
                  id="email"
                  type="text"
                  placeholder="arya.stark@winterfell.org"
                />
                <label className="ray-text-field__label" htmlFor="email">
                  Email address
                </label>
              </div>
              <div className="ray-form-item__hint ray-form-item__hint--success">
                Success hint
              </div>
            </div>
            <div className="ray-form-item">
              <div className="ray-text-field ray-text-field--error ray-text-field--compact">
                <input
                  className="ray-text-field__input"
                  id="password"
                  type="password"
                  placeholder="*********"
                />
                <label className="ray-text-field__label" htmlFor="password">
                  Password
                </label>
              </div>
              <div className="ray-form-item__hint ray-form-item__hint--error">
                Error hint
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
