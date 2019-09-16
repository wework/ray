class Tabs {
  static instances = new WeakMap();

  static get cssClasses() {
    return {
      ACTIVE: 'ray-tabs__item--active',
      ACTIVE_CONTENT: 'ray-tabs__content--active'
    };
  }

  static get strings() {
    return {
      INIT_SELECTOR: '.ray-tabs'
    };
  }

  static create(element, options) {
    return this.instances.get(element) || new this(element, options);
  }

  static createAll(target = document, _options = {}) {
    const options = {
      initSelector: this.strings.INIT_SELECTOR,
      ..._options
    };

    const tabs = Array.from(target.querySelectorAll(options.initSelector));
    tabs.forEach(tabGroup => this.create(tabGroup, options));
  }

  constructor(root, options) {
    this._root = root;
    this._options = options;
    this.constructor.instances.set(this._root, this);

    this.tabItems = Array.from(this._root.querySelectorAll('.ray-tabs__item'));
    this.contentItems = Array.from(
      this._root.querySelectorAll('.ray-tabs__content')
    );

    this._bindEventListeners();
  }

  _bindEventListeners() {
    this.tabItems.forEach(tab => {
      tab.addEventListener('mousedown', this.onClick);
      tab.addEventListener('keydown', this.onSpace);
    });
  }

  assignClasses(event) {
    this.assignTabClasses(event);
    this.assignTabContentClasses(event);
  }

  assignTabClasses(event) {
    this.tabItems.forEach(tab => {
      tab.classList.remove(this.constructor.cssClasses.ACTIVE);
    });
    event.currentTarget.classList.add(this.constructor.cssClasses.ACTIVE);
  }

  assignTabContentClasses(event) {
    const tabNumber = event.currentTarget.getAttribute('data-tab-order');
    this.contentItems.forEach(contentItem => {
      contentItem.classList.remove(this.constructor.cssClasses.ACTIVE_CONTENT);
    });
    this._root
      .querySelector(`[data-content-order="${tabNumber}"]`)
      .classList.add(this.constructor.cssClasses.ACTIVE_CONTENT);
  }

  onClick = event => {
    this.assignClasses(event);
    this.emitChange();
  };

  onSpace = event => {
    if (event.code === 'Space' || event.key === ' ') {
      this.assignClasses(event);
      this.emitChange();
      event.preventDefault();
    }
  };

  destroy() {
    // Implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this.tabItems.forEach(tab => {
      tab.removeEventListener('mousedown', this.onClick);
      tab.removeEventListener('keydown', this.onSpace);
    });

    this.constructor.instances.delete(this._root);
  }

  emitChange() {
    const newEvent = document.createEvent('HTMLEvents');
    newEvent.initEvent('change', true, true);
    this._root.dispatchEvent(newEvent);
  }
}

export default Tabs;
