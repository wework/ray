import html from 'nanohtml';
import Select from '../../lib/components/select';

function getFixture() {
  return html`
    <div class="ray-select">
      <select class="ray-select__input">
        <option value="" disabled selected data-ray-placeholder></option>
        <option value="Pikatchu">Pikatchu</option>
        <option value="Squirtle">Squirtle</option>
        <option value="Charmander">Charmander</option>
      </select>

      <label class="ray-select__label">
        What's your favorite Pokémon?
      </label>
    </div>
  `;
}

function getFixtureWithPlaceholder() {
  return html`
    <div class="ray-select">
      <select class="ray-select__input">
        <option value="" disabled selected data-ray-placeholder
          >Hi im a placeholder</option
        >
        <option value="Pikatchu">Pikatchu</option>
        <option value="Squirtle">Squirtle</option>
        <option value="Charmander">Charmander</option>
      </select>

      <label class="ray-select__label">
        What's your favorite Pokémon?
      </label>
    </div>
  `;
}

function setupTest(fixture = getFixture()) {
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

  test('#destroy removes instance', () => {
    const { select, selectEl } = setupTest();

    select.destroy();

    expect(Select.instances.get(selectEl)).not.toBeDefined();
  });

  test('#createAll can instantiate many selects', () => {
    document.body.appendChild(getFixture());
    document.body.appendChild(getFixture());
    document.body.appendChild(getFixture());

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
    const { select, selectEl } = setupTest(getFixtureWithPlaceholder());

    expect(selectEl.classList).toContain('ray-select--placeholder-mode');
    select.destroy();
  });

  test('it removes placeholder class if placeholder exists but a selection is made', () => {
    const { select, selectEl } = setupTest(getFixtureWithPlaceholder());

    expect(selectEl.classList).toContain('ray-select--placeholder-mode');
    expect(selectEl.classList).not.toContain('ray-select--has-value');
    select.set('Squirtle');
    expect(selectEl.classList).not.toContain('ray-select--placeholder-mode');
    expect(selectEl.classList).toContain('ray-select--has-value');
    select.destroy();
  });
});
