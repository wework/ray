import html from 'nanohtml';

export function dropdownFixture() {
  return html`
    <div class="ray-dropdown">
      <div class="ray-dropdown__wrapper">
        <select class="ray-dropdown__input" id="test">
          <option value="" data-ray-placeholder></option>
          <option selected value="Pikachu">Pikachu</option>
          <option value="Squirtle">Squirtle</option>
          <option value="Charmander">Charmander</option>
        </select>
      </div>
      <label class="ray-dropdown__label">
        What's your favorite Pokémon?
      </label>
    </div>
  `;
}

export function dropdownFixtureSeparator() {
  return html`
    <div class="ray-dropdown">
      <div class="ray-dropdown__wrapper">
        <select class="ray-dropdown__input" id="test">
          <option value="" data-ray-placeholder></option>
          <option disabled data-ray-separator />
          <option value="Pikachu">Pikachu</option>
          <option value="Squirtle">Squirtle</option>
          <option value="Charmander">Charmander</option>
        </select>
      </div>
      <label class="ray-dropdown__label">
        What's your favorite Pokémon?
      </label>
    </div>
  `;
}

export function dropdownFixtureOptGroups() {
  return html`
    <div class="ray-dropdown">
      <div class="ray-dropdown__wrapper">
        <select class="ray-dropdown__input" id="test">
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
      <label class="ray-dropdown__label">
        What's your favorite Pokémon?
      </label>
    </div>
  `;
}

export function dropdownFixtureNoWrapper() {
  return html`
    <div class="ray-dropdown">
      <select class="ray-dropdown__input" id="test">
        <option value="" data-ray-placeholder></option>
        <option value="Pikachu">Pikachu</option>
        <option value="Squirtle">Squirtle</option>
        <option value="Charmander">Charmander</option>
      </select>
      <label class="ray-dropdown__label">
        What's your favorite Pokémon?
      </label>
    </div>
  `;
}

export function dropdownFixtureRequired() {
  return html`
    <div class="ray-dropdown">
      <div class="ray-dropdown__wrapper">
        <select class="ray-dropdown__input" required id="test">
          <option value="" data-ray-placeholder></option>
          <option value="Pikachu">Pikachu</option>
          <option value="Squirtle">Squirtle</option>
          <option value="Charmander">Charmander</option>
        </select>
      </div>

      <label class="ray-dropdown__label">
        What's your favorite Pokémon?
      </label>
    </div>
  `;
}

export function dropdownFixtureNoInput() {
  return html`
    <div class="ray-dropdown">
      <div class="ray-dropdown__wrapper"></div>
      <label class="ray-dropdown__label">
        What's your favorite Pokémon?
      </label>
    </div>
  `;
}

export function dropdownFixtureWithPlaceholder() {
  return html`
    <div class="ray-dropdown">
      <div class="ray-dropdown__wrapper">
        <select class="ray-dropdown__input" id="test">
          <option value="" data-ray-placeholder>Hi im a placeholder</option>
          <option value="Pikachu">Pikachu</option>
          <option value="Squirtle">Squirtle</option>
          <option value="Charmander">Charmander</option>
        </select>
      </div>

      <label class="ray-dropdown__label">
        What's your favorite Pokémon?
      </label>
    </div>
  `;
}

export function dropdownFixtureWithExceedingMarkup() {
  return html`
    <div class="ray-dropdown">
      <div class="ray-dropdown__wrapper">
        <div class="ray-dropdown__body" tabindex="0">
          <div class="ray-dropdown__selected">
            <span class="ray-dropdown__selected-value">Squirtle</span>
          </div>
        </div>
        <select class="ray-dropdown__input" id="test">
          <option value="" data-ray-placeholder>Hi im a placeholder</option>
          <option value="Pikachu">Pikachu</option>
          <option value="Squirtle">Squirtle</option>
          <option value="Charmander">Charmander</option>
        </select>
        <div class="ray-dropdown__option-container" aria-expanded="false">
          <ul
            role="listbox"
            class="ray-dropdown__option-list"
            id="test-example-list"
            aria-labelledby="test-example-label"
          >
            <li
              role="option"
              data-ray-idx="0"
              id="test-example-option-0"
              class="ray-dropdown__option"
            >
              Slowpoke
            </li>
            <li
              role="option"
              data-ray-idx="5"
              id="test-example-option-5"
              class="ray-dropdown__option"
            >
              Sonichu
            </li>
          </ul>
        </div>
      </div>

      <label class="ray-dropdown__label">
        What's your favorite Pokémon?
      </label>
    </div>
  `;
}

export const newOptionsFixture = `
<option value="" data-ray-placeholder></option>
<option value="HTML">HTML</option>
<option value="CSS">CSS</option>
<option value="JS">JS</option>
<option value="SVG">SVG</option>
`;
