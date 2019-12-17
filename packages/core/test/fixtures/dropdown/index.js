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

export const newOptionsFixture = `
<option value="" data-ray-placeholder></option>
<option value="HTML">HTML</option>
<option value="CSS">CSS</option>
<option value="JS">JS</option>
<option value="SVG">SVG</option>
`;
