import html from 'nanohtml';

export function dropdownFixture() {
  return html`
    <div class="ray-dropdown">
      <div class="ray-dropdown__wrapper">
        <select class="ray-dropdown__input" id="test">
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
