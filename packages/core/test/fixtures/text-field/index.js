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

export function textFieldFixtureNoInput() {
  return html`
    <div class="${baseClass}">
      <label class="${baseClass}__label" for="email">
        Email address
      </label>
    </div>
  `;
}
