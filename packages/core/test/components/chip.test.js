import html from 'nanohtml';
import Chip from '../../src/components/chip';

function triggerEvent(el, type) {
  const e = document.createEvent('HTMLEvents');
  e.initEvent(type, false, true);
  el.dispatchEvent(e);
}

function getFixture() {
  return html`
    <div class="ray-chip">
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
});
