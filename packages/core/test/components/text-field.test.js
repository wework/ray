import { TextField } from '../../src/components/text-field';
import {
  CSS_CLASSES,
  STRINGS
} from '../../src/components/text-field/constants';
import {
  textFieldFixture,
  textFieldFixtureNoInput
} from '../fixtures/text-field';

const initSelectorString = STRINGS.TEXT_FIELD.INIT_SELECTOR;

function setupTest(fixture = textFieldFixture()) {
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

  test('#constructor throws an error if text-field contains no text input', () => {
    expect(() => setupTest(textFieldFixtureNoInput())).toThrow(
      `TextField must have an input element with a class of `
    );
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
    document.body.appendChild(textFieldFixture());
    document.body.appendChild(textFieldFixture());
    document.body.appendChild(textFieldFixture());

    TextField.createAll();

    const textFieldEl = document.querySelector(initSelectorString);
    expect(TextField.instances.get(textFieldEl)).toBeDefined();
  });

  test('it sets active class on focus', () => {
    const { textField, textFieldEl } = setupTest();

    textFieldEl.querySelector(`${initSelectorString}__input`).focus();
    expect(textFieldEl.classList).toContain(CSS_CLASSES.TEXT_FIELD.ACTIVE);
    textField.destroy();
  });

  test('it focuses to input on mouse down of label', () => {
    const { textField, textFieldEl } = setupTest();

    textFieldEl
      .querySelector(`${initSelectorString}__label`)
      .dispatchEvent(new Event('mousedown'));

    expect(textFieldEl.querySelector(`${initSelectorString}__input`)).toBe(
      document.activeElement
    );
    textField.destroy();
  });

  test('it removes active class on blur', () => {
    const { textField, textFieldEl } = setupTest();

    textFieldEl.querySelector(`${initSelectorString}__input`).focus();
    textFieldEl.querySelector(`${initSelectorString}__input`).blur();
    expect(textFieldEl.classList).not.toContain(CSS_CLASSES.TEXT_FIELD.ACTIVE);
    textField.destroy();
  });

  test('it removes active class on blur', () => {
    const { textField, textFieldEl } = setupTest();

    textFieldEl.querySelector(`${initSelectorString}__input`).focus();
    textField.set('some value');
    textFieldEl.querySelector(`${initSelectorString}__input`).blur();
    expect(textFieldEl.classList).toContain(CSS_CLASSES.TEXT_FIELD.HAS_VALUE);
    textField.destroy();
  });
});
