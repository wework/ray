import html from 'nanohtml';

export function selectFixture() {
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

export function selectFixtureNoInput() {
  return html`
    <div class="ray-select">
      <label class="ray-select__label">
        What's your favorite Pokémon?
      </label>
    </div>
  `;
}

export function selectFixtureWithPlaceholder() {
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
