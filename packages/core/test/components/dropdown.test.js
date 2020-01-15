import Dropdown from '../../src/components/dropdown';
import { CLASSNAMES, SELECTORS } from '../../src/components/dropdown/constants';
import {
  dropdownFixture,
  dropdownFixtureNoWrapper,
  dropdownFixtureRequired,
  dropdownFixtureWithPlaceholder,
  dropdownFixtureWithExceedingMarkup,
  dropdownFixtureOptGroups,
  dropdownFixtureNoInput,
  dropdownFixtureSeparator,
  newOptionsFixture
} from '../fixtures/dropdown';

function setupTest(fixture = dropdownFixture()) {
  document.body.innerHTML = null;
  document.body.appendChild(fixture);
  const selectEl = document.querySelector(SELECTORS.INIT_SELECTOR);
  const select = Dropdown.create(selectEl);
  return { select, selectEl };
}

function emit(target, type) {
  const event = new Event(type, { bubbles: true, cancelable: true });
  target.dispatchEvent(event);
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

  test('#clear resets value of select and triggers change event', () => {
    const { select } = setupTest();

    select.set('Charmander');
    select.clear();

    expect(document.querySelector('.ray-dropdown__input').value).toBe('');
    select.destroy();
  });

  test('#value gets value of select', () => {
    const { select } = setupTest();

    select.set('Charmander');

    expect(select.value()).toBe('Charmander');

    select.destroy();
  });

  test('Check that if markup already in place. It got reused not duplicated', () => {
    const { select } = setupTest(dropdownFixtureWithExceedingMarkup());

    expect(document.querySelectorAll('.ray-dropdown__body').length).toEqual(1);
    expect(
      document.querySelectorAll('.ray-dropdown__option-container').length
    ).toEqual(1);
    expect(document.querySelectorAll('.ray-dropdown__option').length).toEqual(
      4
    );
    select.destroy();
  });

  test('#destroy removes instance', () => {
    const { select, selectEl } = setupTest();

    select.destroy();

    expect(Dropdown.instances.get(selectEl)).not.toBeDefined();
  });

  test('#disable makes select inactive', () => {
    const { select, selectEl } = setupTest();

    select.disable();
    emit(selectEl, 'click');
    expect(selectEl.classList).not.toContain(CLASSNAMES.OPEN);
    expect(selectEl.querySelector('select').disabled).toBeTruthy();

    select.destroy();
  });

  test('If for some reason selected index undefined or negative should not render selected option', () => {
    const { select, selectEl } = setupTest();

    selectEl.querySelector('select').selectedIndex = -1;
    select.set('');
    expect(
      selectEl.querySelector('.ray-dropdown__selected-value').innerHTML
    ).toEqual('');

    select.destroy();
  });

  test('#enable makes select active again', () => {
    const { select, selectEl } = setupTest();

    select.disable();
    emit(selectEl, 'click');
    expect(selectEl.classList).not.toContain(CLASSNAMES.OPEN);
    expect(selectEl.querySelector('select').disabled).toBeTruthy();
    select.enable();
    emit(selectEl, 'click');
    expect(selectEl.classList).toContain(CLASSNAMES.OPEN);
    expect(selectEl.querySelector('select').disabled).toBeFalsy();

    select.destroy();
  });

  test('#open allows to open Dropdown programmatically', () => {
    const { select, selectEl } = setupTest();

    select.open();
    expect(selectEl.classList).toContain(CLASSNAMES.OPEN);

    select.destroy();
  });

  test('#update should reset value and update option list e.g. adopt chagnges to original select', () => {
    const { select, selectEl } = setupTest();
    selectEl.querySelector('select').innerHTML = newOptionsFixture;
    select.update({
      renderOption: option => {
        const [symbol, name] = option.innerHTML.split('|');
        return `<b class="this-is-option">${symbol}</b><em>${name}</em>`;
      }
    });
    expect(select.value()).toEqual('');
    expect(selectEl.querySelector('.this-is-option')).toBeTruthy();
    select.destroy();
  });

  test('#createAll can instantiate many selects', () => {
    document.body.appendChild(dropdownFixture());
    document.body.appendChild(dropdownFixture());
    document.body.appendChild(dropdownFixture());

    Dropdown.createAll();

    const selectEl = document.querySelector(SELECTORS.INIT_SELECTOR);
    expect(Dropdown.instances.get(selectEl)).toBeDefined();
  });

  test('it should render optgroups as well as simple options', () => {
    const { select, selectEl } = setupTest(dropdownFixtureOptGroups());

    expect(
      selectEl.querySelectorAll(`.${CLASSNAMES.groupLabel}`).length
    ).toEqual(3);
    select.destroy();
  });

  test('it should render separators as well as simple options', () => {
    const { select, selectEl } = setupTest(dropdownFixtureSeparator());

    expect(
      selectEl.querySelectorAll(`.${CLASSNAMES.separator}`).length
    ).toEqual(1);
    select.destroy();
  });

  test('it sets active class on focus', () => {
    const { select, selectEl } = setupTest();

    selectEl.querySelector('.ray-dropdown__body').focus();
    expect(selectEl.classList.contains(CLASSNAMES.ACTIVE)).toBeTruthy();
    select.destroy();
  });

  test('it removes active class on blur', () => {
    const { select, selectEl } = setupTest();

    selectEl.querySelector('.ray-dropdown__body').focus();
    selectEl.querySelector('.ray-dropdown__body').blur();
    expect(selectEl.classList.contains(CLASSNAMES.ACTIVE)).toBeFalsy();
    select.destroy();
  });

  test('it has placeholder class if placeholder exists', () => {
    const { select, selectEl } = setupTest(dropdownFixtureWithPlaceholder());

    expect(selectEl.classList).toContain(CLASSNAMES.PLACEHOLDER_MODE);
    select.destroy();
  });

  test('it removes placeholder class if placeholder exists but a selection is made', () => {
    const { select, selectEl } = setupTest(dropdownFixtureWithPlaceholder());

    expect(selectEl.classList).toContain(CLASSNAMES.PLACEHOLDER_MODE);
    expect(selectEl.classList).not.toContain(CLASSNAMES.HAS_VALUE);
    select.set('Squirtle');
    expect(selectEl.classList).not.toContain(CLASSNAMES.PLACEHOLDER_MODE);
    expect(selectEl.classList).toContain(CLASSNAMES.HAS_VALUE);
    select.destroy();
  });

  test('it adds `required` class if select is required', () => {
    const { select, selectEl } = setupTest(dropdownFixtureRequired());

    expect(select.isRequired()).toBeTruthy();
    expect(selectEl.classList).toContain(CLASSNAMES.REQUIRED);
    select.destroy();
  });

  test('it should open on click', () => {
    const { select, selectEl } = setupTest();
    emit(selectEl, 'click');
    expect(selectEl.classList).toContain(CLASSNAMES.OPEN);
    select.destroy();
  });

  test('it should select option on click', () => {
    const { select, selectEl } = setupTest();
    emit(selectEl, 'click');
    emit(selectEl.querySelector('#test-option-2'), 'click');
    expect(selectEl.classList).not.toContain(CLASSNAMES.OPEN);
    expect(selectEl.classList).toContain(CLASSNAMES.HAS_VALUE);
    expect(select.value()).toBe('Squirtle');
    select.destroy();
  });

  test('it wraps <select> with `wrapper` if none is provided', () => {
    const { select } = setupTest(dropdownFixtureNoWrapper());

    expect(document.querySelector('.ray-dropdown__wrapper')).toBeTruthy();
    select.destroy();
  });
});
