import html from 'nanohtml';
import { CSS_CLASSES } from '../../../src/components/text-field/constants';

const baseClass = CSS_CLASSES.TEXT_FIELD.BASE;

export function textFieldFixture() {
  return html`
    <div class="${baseClass}">
      <input
        class="${baseClass}__input"
        id="email"
        type="email"
        placeholder="arya.stark@winterfell.org"
      />
      <label class="${baseClass}__label" for="email">
        Email address
      </label>
    </div>
  `;
}

export function textFieldFixtureRequired() {
  return html`
    <div class="${baseClass}">
      <input
        class="${baseClass}__input"
        id="email"
        type="email"
        placeholder="arya.stark@winterfell.org"
        required
      />
      <label class="${baseClass}__label" for="email">
        Email address
      </label>
    </div>
  `;
}

export function textFieldFixtureNoInput() {
  return html`
    <div class="${baseClass}">
      <label class="${baseClass}__label" for="email">
        Email address
      </label>
    </div>
  `;
}

export function textFieldFixtureWithValue() {
  return html`
    <div class="${baseClass}">
      <input
        class="${baseClass}__input"
        id="email"
        type="email"
        placeholder="arya.stark@winterfell.org"
        value="bob@bob.com"
      />
      <label class="${baseClass}__label" for="email">
        Email address
      </label>
    </div>
  `;
}
