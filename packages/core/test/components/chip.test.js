import html from 'nanohtml';
import Chip from '../../src/components/chip';

function triggerEvent(el, type) {
  const e = document.createEvent('HTMLEvents');
  e.initEvent(type, false, true);
  el.dispatchEvent(e);
}

function getFixture() {
  return html`
    <div tabindex="1" class="ray-chip">
      Furnished
    </div>
  `;
}

function setupTest(fixture = getFixture()) {
  document.body.innerHTML = null;
  document.body.appendChild(fixture);
  const chipEl = document.querySelector('.ray-chip');
  const chip = Chip.create(chipEl);
  return { chip, chipEl };
}

describe('Chip', () => {
  afterEach(() => {
    Chip.instances = new WeakMap();
    document.body.innerHTML = null;
  });

  test('#create can instantiate a chip', () => {
    const { chip, chipEl } = setupTest();

    expect(Chip.instances.get(chipEl)).toBeDefined();
    chip.destroy();
  });

  test('#destroy removes instance', () => {
    const { chip, chipEl } = setupTest();

    chip.destroy();

    expect(Chip.instances.get(chipEl)).not.toBeDefined();
  });

  test('it sets active class on click', () => {
    const { chip, chipEl } = setupTest();
    triggerEvent(chipEl, 'mousedown');
    expect(chipEl.classList).toContain('ray-chip--active');
    chip.destroy();
  });

  test('it removes active class on double click', () => {
    const { chip, chipEl } = setupTest();

    triggerEvent(chipEl, 'mousedown');
    triggerEvent(chipEl, 'mousedown');
    expect(chipEl.classList).not.toContain('ray-chip--active');
    chip.destroy();
  });

  test('it sets active class on spacebar press', () => {
    const { chip, chipEl } = setupTest();
    const event = new KeyboardEvent('keydown', { key: ' ' });

    chipEl.dispatchEvent(event);
    expect(chipEl.classList).toContain('ray-chip--active');
    chip.destroy();
  });

  test('it removes active class on double spacebar press', () => {
    const { chip, chipEl } = setupTest();
    const event = new KeyboardEvent('keydown', { key: ' ' });

    chipEl.dispatchEvent(event);
    chipEl.dispatchEvent(event);
    expect(chipEl.classList).not.toContain('ray-chip--active');
    chip.destroy();
  });

  test('it sets active to true', () => {
    const { chip, chipEl } = setupTest();

    chip.set(true);
    expect(chipEl.classList).toContain('ray-chip--active');
    chip.destroy();
  });

  test('it sets active to false', () => {
    const { chip, chipEl } = setupTest();

    triggerEvent(chipEl, 'mousedown');
    chip.set(false);
    expect(chipEl.classList).not.toContain('ray-chip--active');
    chip.destroy();
  });

  test('it sets disabled to true', () => {
    const { chip, chipEl } = setupTest();

    chip.disable(true);
    expect(chipEl.classList).toContain('ray-chip--disabled');
    chip.destroy();
  });

  test('it ignores interactions while disabled', () => {
    const { chip, chipEl } = setupTest();

    chip.disable(true);
    triggerEvent(chipEl, 'mousedown');
    expect(chipEl.classList).not.toContain('ray-chip--active');
    chip.destroy();
  });
});
