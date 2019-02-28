import html from 'nanohtml';
import { TextField } from '../../lib/components/text-field';
import {
  CSS_CLASSES,
  STRINGS
} from '../../lib/components/text-field/constants';

const baseClass = CSS_CLASSES.TEXT_FIELD.BASE;
const activeClass = CSS_CLASSES.TEXT_FIELD.ACTIVE;
const initSelectorString = STRINGS.TEXT_FIELD.INIT_SELECTOR;

function getFixture() {
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

function setupTest(fixture = getFixture()) {
  document.body.innerHTML = null;
  document.body.appendChild(fixture);
  const textFieldEl = document.querySelector(initSelectorString);
  const textField = TextField.create(textFieldEl);
  return { textField, textFieldEl };
}

describe('TextField', () => {
  afterEach(() => {
    TextField.instances = new WeakMap();
    document.body.innerHTML = null;
  });

  test('#create can instantiate a textField', () => {
    const { textField, textFieldEl } = setupTest();

    expect(TextField.instances.get(textFieldEl)).toBeDefined();
    textField.destroy();
  });

  test('#set sets value of textField', () => {
    const { textField } = setupTest();

    textField.set('Charmander');

    expect(document.querySelector(`${initSelectorString}__input`).value).toBe(
      'Charmander'
    );
    textField.destroy();
  });

  test('#destroy removes instance', () => {
    const { textField, textFieldEl } = setupTest();

    textField.destroy();

    expect(TextField.instances.get(textFieldEl)).not.toBeDefined();
  });

  test('#createAll can instantiate many textFields', () => {
    document.body.appendChild(getFixture());
    document.body.appendChild(getFixture());
    document.body.appendChild(getFixture());

    TextField.createAll();

    const textFieldEl = document.querySelector(initSelectorString);
    expect(TextField.instances.get(textFieldEl)).toBeDefined();
  });

  test('it sets active class on focus', () => {
    const { textField, textFieldEl } = setupTest();

    textFieldEl.querySelector(`${initSelectorString}__input`).focus();
    expect(textFieldEl.classList).toContain(activeClass);
    textField.destroy();
  });

  test('it removes active class on blur', () => {
    const { textField, textFieldEl } = setupTest();

    textFieldEl.querySelector(`${initSelectorString}__input`).focus();
    textFieldEl.querySelector(`${initSelectorString}__input`).blur();
    expect(textFieldEl.classList).not.toContain(activeClass);
    textField.destroy();
  });
});
