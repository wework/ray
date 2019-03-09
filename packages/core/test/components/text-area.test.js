import html from 'nanohtml';
import { TextArea } from '../../src/components/text-field';
import {
  CSS_CLASSES,
  STRINGS
} from '../../src/components/text-field/constants';

const baseClass = CSS_CLASSES.TEXT_AREA.BASE;
const activeClass = CSS_CLASSES.TEXT_AREA.ACTIVE;
const initSelectorString = STRINGS.TEXT_AREA.INIT_SELECTOR;

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
  const textAreaEl = document.querySelector(initSelectorString);
  const textArea = TextArea.create(textAreaEl);
  return { textArea, textAreaEl };
}

describe('TextArea', () => {
  afterEach(() => {
    TextArea.instances = new WeakMap();
    document.body.innerHTML = null;
  });

  test('#create can instantiate a textArea', () => {
    const { textArea, textAreaEl } = setupTest();

    expect(TextArea.instances.get(textAreaEl)).toBeDefined();
    textArea.destroy();
  });

  test('#set sets value of textArea', () => {
    const { textArea } = setupTest();

    textArea.set('Charmander');

    expect(document.querySelector(`${initSelectorString}__input`).value).toBe(
      'Charmander'
    );
    textArea.destroy();
  });

  test('#destroy removes instance', () => {
    const { textArea, textAreaEl } = setupTest();

    textArea.destroy();

    expect(TextArea.instances.get(textAreaEl)).not.toBeDefined();
  });

  test('#createAll can instantiate many textAreas', () => {
    document.body.appendChild(getFixture());
    document.body.appendChild(getFixture());
    document.body.appendChild(getFixture());

    TextArea.createAll();
    const textAreaEl = document.querySelector(initSelectorString);

    expect(TextArea.instances.get(textAreaEl)).toBeDefined();
  });

  test('it sets active class on focus', () => {
    const { textArea, textAreaEl } = setupTest();

    textAreaEl.querySelector(`${initSelectorString}__input`).focus();
    expect(textAreaEl.classList).toContain(activeClass);
    textArea.destroy();
  });

  test('it removes active class on blur', () => {
    const { textArea, textAreaEl } = setupTest();

    textAreaEl.querySelector(`${initSelectorString}__input`).focus();
    textAreaEl.querySelector(`${initSelectorString}__input`).blur();
    expect(textAreaEl.classList).not.toContain(activeClass);
    textArea.destroy();
  });
});
