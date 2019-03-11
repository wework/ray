import Select from '../../src/components/select';
import {
  selectFixture,
  selectFixtureWithPlaceholder,
  selectFixtureNoInput
} from '../fixtures/select';

function setupTest(fixture = selectFixture()) {
  document.body.innerHTML = null;
  document.body.appendChild(fixture);
  const selectEl = document.querySelector('.ray-select');
  const select = Select.create(selectEl);
  return { select, selectEl };
}

describe('Select', () => {
  afterEach(() => {
    Select.instances = new WeakMap();
    document.body.innerHTML = null;
  });

  test('cssClasses exist', () => {
    expect(Select.cssClasses).toBeTruthy();
  });

  test('strings exist', () => {
    expect(Select.strings).toBeTruthy();
  });

  test('#constructor throws error if select contains no input', () => {
    expect(() => setupTest(selectFixtureNoInput())).toThrow(
      `Select must have an input element with a class of .ray-select__input`
    );
  });

  test('#create can instantiate a select', () => {
    const { select, selectEl } = setupTest();

    expect(Select.instances.get(selectEl)).toBeDefined();
    select.destroy();
  });

  test('#set sets value of select and triggers change event', () => {
    const { select } = setupTest();

    select.set('Charmander');

    expect(document.querySelector('.ray-select__input').value).toBe(
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

    expect(Select.instances.get(selectEl)).not.toBeDefined();
  });

  test('#createAll can instantiate many selects', () => {
    document.body.appendChild(selectFixture());
    document.body.appendChild(selectFixture());
    document.body.appendChild(selectFixture());

    Select.createAll();

    const selectEl = document.querySelector('.ray-select');
    expect(Select.instances.get(selectEl)).toBeDefined();
  });

  test('it sets active class on focus', () => {
    const { select, selectEl } = setupTest();

    selectEl.querySelector('.ray-select__input').focus();
    expect(selectEl.classList).toContain('ray-select--active');
    select.destroy();
  });

  test('it removes active class on blur', () => {
    const { select, selectEl } = setupTest();

    selectEl.querySelector('.ray-select__input').focus();
    selectEl.querySelector('.ray-select__input').blur();
    expect(selectEl.classList).not.toContain('ray-select--active');
    select.destroy();
  });

  test('it has placeholder class if placeholder exists', () => {
    const { select, selectEl } = setupTest(selectFixtureWithPlaceholder());

    expect(selectEl.classList).toContain('ray-select--placeholder-mode');
    select.destroy();
  });

  test('it removes placeholder class if placeholder exists but a selection is made', () => {
    const { select, selectEl } = setupTest(selectFixtureWithPlaceholder());

    expect(selectEl.classList).toContain('ray-select--placeholder-mode');
    expect(selectEl.classList).not.toContain('ray-select--has-value');
    select.set('Squirtle');
    expect(selectEl.classList).not.toContain('ray-select--placeholder-mode');
    expect(selectEl.classList).toContain('ray-select--has-value');
    select.destroy();
  });
});
