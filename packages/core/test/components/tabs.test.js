import html from 'nanohtml';
import Tabs from '../../src/components/tabs';

function triggerEvent(el, type) {
  const e = document.createEvent('HTMLEvents');
  e.initEvent(type, false, true);
  el.dispatchEvent(e);
}

function getFixture() {
  return html`
    <div class="ray-tabs">
      <ul class="ray-tabs__list">
        <li tabindex="1" data-tab-order="1" class="ray-tabs__item">
          Desktop
        </li>
        <li tabindex="1" data-tab-order="2" class="ray-tabs__item">
          Tablet
        </li>
        <li
          tabindex="1"
          data-tab-order="3"
          class="ray-tabs__item ray-tabs__item--active"
        >
          Mobile
        </li>
      </ul>
      <div class="ray-tabs__content" data-content-order="1">
        <h2><span class="ray-text--display-2">Desktop content</span></h2>
      </div>
      <div class="ray-tabs__content" data-content-order="2">
        <h2><span class="ray-text--display-2">Tablet content</span></h2>
      </div>
      <div
        class="ray-tabs__content ray-tabs__content--active"
        data-content-order="3"
      >
        <h2><span class="ray-text--display-2">Mobile content</span></h2>
      </div>
    </div>
  `;
}

function setupTest(fixture = getFixture()) {
  document.body.innerHTML = null;
  document.body.appendChild(fixture);
  const tabsEl = document.querySelector('.ray-tabs');
  const tabs = Tabs.create(tabsEl);
  const { tabItems, contentItems } = tabs;
  return { tabs, tabsEl, tabItems, contentItems };
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
    const { tabs, tabItems, contentItems } = setupTest();
    const firstTab = tabItems[0];
    const firstContentItem = contentItems[0];
    triggerEvent(firstTab, 'mousedown');
    expect(firstTab.classList).toContain('ray-tabs__item--active');
    expect(firstContentItem.classList).toContain('ray-tabs__content--active');
    tabs.destroy();
  });

  test('it sets active class on spacebar press', () => {
    const { tabs, tabsEl, tabItems, contentItems } = setupTest();
    const tabEvent = new KeyboardEvent('keydown', { key: 'tab' });
    const spaceEvent = new KeyboardEvent('keydown', { key: ' ' });
    const firstTab = tabItems[0];
    const firstContentItem = contentItems[0];
    tabsEl.dispatchEvent(tabEvent);
    firstTab.dispatchEvent(spaceEvent);
    expect(firstTab.classList).toContain('ray-tabs__item--active');
    expect(firstContentItem.classList).toContain('ray-tabs__content--active');
    tabs.destroy();
  });
});
