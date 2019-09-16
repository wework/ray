import html from 'nanohtml';
import Tabs from '../../src/components/tabs';

function triggerEvent(el, type) {
  const e = document.createEvent('HTMLEvents');
  e.initEvent(type, false, true);
  el.dispatchEvent(e);
}

function getFixture() {
  return html`
    <ul class="ray-tabs">
      <li tabindex="1" class="ray-tabs__item">Desktop</li>
      <li tabindex="1" class="ray-tabs__item">Tablet</li>
      <li tabindex="1" class="ray-tabs__item ray-tabs__item--active">Mobile</li>
    </ul>
  `;
}

function setupTest(fixture = getFixture()) {
  document.body.innerHTML = null;
  document.body.appendChild(fixture);
  const tabsEl = document.querySelector('.ray-tabs');
  const tabs = Tabs.create(tabsEl);
  const { tabItems } = tabs;
  return { tabs, tabsEl, tabItems };
}

describe('Tabs', () => {
  afterEach(() => {
    Tabs.instances = new WeakMap();
    document.body.innerHTML = null;
  });

  test('#create can instantiate tabs', () => {
    const { tabs, tabsEl } = setupTest();

    expect(Tabs.instances.get(tabsEl)).toBeDefined();
    tabs.destroy();
  });

  test('#destroy removes instance', () => {
    const { tabs, tabsEl } = setupTest();

    tabs.destroy();

    expect(Tabs.instances.get(tabsEl)).not.toBeDefined();
  });

  test('it sets active class on click', () => {
    const { tabs, tabItems } = setupTest();
    const firstTab = tabItems[0];
    triggerEvent(firstTab, 'mousedown');
    expect(firstTab.classList).toContain('ray-tabs__item--active');
    tabs.destroy();
  });

  test('it sets active class on spacebar press', () => {
    const { tabs, tabsEl, tabItems } = setupTest();
    const tabEvent = new KeyboardEvent('keydown', { key: 'tab' });
    const spaceEvent = new KeyboardEvent('keydown', { key: ' ' });
    const firstTab = tabItems[0];
    tabsEl.dispatchEvent(tabEvent);
    firstTab.dispatchEvent(spaceEvent);
    expect(firstTab.classList).toContain('ray-tabs__item--active');
    tabs.destroy();
  });
});
