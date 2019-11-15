import Dropdown from '../../src/components/dropdown';
import { CLASSNAMES, SELECTORS } from '../../src/components/dropdown/constants';
import {
  dropdownFixture,
  dropdownFixtureNoWrapper,
  dropdownFixtureRequired,
  dropdownFixtureWithPlaceholder,
  dropdownFixtureNoInput
} from '../fixtures/dropdown';

function setupTest(fixture = dropdownFixture()) {
  document.body.innerHTML = null;
  document.body.appendChild(fixture);
  const selectEl = document.querySelector(SELECTORS.INIT_SELECTOR);
  const select = Dropdown.create(selectEl);
  return { select, selectEl };
}

describe('Select', () => {
  afterEach(() => {
    Dropdown.instances = new WeakMap();
    document.body.innerHTML = null;
  });

  test('cssClasses exist', () => {
    expect(Dropdown.cssClasses).toBeTruthy();
  });

  test('strings exist', () => {
    expect(Dropdown.strings).toBeTruthy();
  });

  test('#constructor throws error if select contains no input', () => {
    expect(() => setupTest(dropdownFixtureNoInput())).toThrow(
      `Select must have an input element with a class of .ray-dropdown__input`
    );
  });

  test('#create can instantiate a select', () => {
    const { select, selectEl } = setupTest();

    expect(Dropdown.instances.get(selectEl)).toBeDefined();
    select.destroy();
  });

  test('#set sets value of select and triggers change event', () => {
    const { select } = setupTest();

    select.set('Charmander');

    expect(document.querySelector('.ray-dropdown__input').value).toBe(
      'Charmander'
    );
    select.destroy();
  });

  test('#value gets value of select', () => {
    const { select } = setupTest();

    select.set('Charmander');

    expect(select.value()).toBe('Charmander');

    select.destroy();
  });

  test('#destroy removes instance', () => {
    const { select, selectEl } = setupTest();

    select.destroy();

    expect(Dropdown.instances.get(selectEl)).not.toBeDefined();
  });

  test('#createAll can instantiate many selects', () => {
    document.body.appendChild(dropdownFixture());
    document.body.appendChild(dropdownFixture());
    document.body.appendChild(dropdownFixture());

    Dropdown.createAll();

    const selectEl = document.querySelector(SELECTORS.INIT_SELECTOR);
    expect(Dropdown.instances.get(selectEl)).toBeDefined();
  });

  test('it sets active class on focus', () => {
    const { select, selectEl } = setupTest();

    selectEl.querySelector('.ray-dropdown__body').focus();
    expect(selectEl.classList.contains('ray-dropdown--active')).toBeTruthy();
    select.destroy();
  });

  test('it removes active class on blur', () => {
    const { select, selectEl } = setupTest();

    selectEl.querySelector('.ray-dropdown__body').focus();
    selectEl.querySelector('.ray-dropdown__body').blur();
    expect(selectEl.classList.contains('ray-dropdown--active')).toBeFalsy();
    select.destroy();
  });

  test('it has placeholder class if placeholder exists', () => {
    const { select, selectEl } = setupTest(dropdownFixtureWithPlaceholder());

    expect(selectEl.classList).toContain('ray-dropdown--placeholder-mode');
    select.destroy();
  });

  test('it removes placeholder class if placeholder exists but a selection is made', () => {
    const { select, selectEl } = setupTest(dropdownFixtureWithPlaceholder());

    expect(selectEl.classList).toContain('ray-dropdown--placeholder-mode');
    expect(selectEl.classList).not.toContain('ray-dropdown--has-value');
    select.set('Squirtle');
    expect(selectEl.classList).not.toContain('ray-dropdown--placeholder-mode');
    expect(selectEl.classList).toContain('ray-dropdown--has-value');
    select.destroy();
  });

  test('it adds `required` class if select is required', () => {
    const { select, selectEl } = setupTest(dropdownFixtureRequired());

    expect(selectEl.classList).toContain(CLASSNAMES.REQUIRED);
    select.destroy();
  });

  test('it wraps <select> with `wrapper` if none is provided', () => {
    const { select } = setupTest(dropdownFixtureNoWrapper());

    expect(document.querySelector('.ray-dropdown__wrapper')).toBeTruthy();
    select.destroy();
  });
});
