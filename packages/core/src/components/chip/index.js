class Chip {
  // test comment, remove later

  static instances = new WeakMap();

  static get cssClasses() {
    return {
      ACTIVE: 'ray-chip--active',
      DISABLED: 'ray-chip--disabled'
    };
  }

  static get strings() {
    return {
      INIT_SELECTOR: '.ray-chip'
    };
  }

  static create(element, options) {
    return this.instances.get(element) || new this(element, options);
  }

  static createAll(
    target = document,
    _options = { active: false, disabled: false }
  ) {
    // Finds all instances of select on the document or within a given element and instantiates them.
    const options = {
      initSelector: this.strings.INIT_SELECTOR,
      ..._options
    };

    const chips = Array.from(target.querySelectorAll(options.initSelector));
    chips.forEach(select => this.create(select, options));
  }

  constructor(root, options) {
    this._root = root;
    this._options = options;
    this.constructor.instances.set(this._root, this);

    this.state = {
      active: this._root.classList.contains(this.constructor.cssClasses.ACTIVE),
      disabled: this._root.classList.contains(
        this.constructor.cssClasses.DISABLED
      )
    };

    this._bindEventListeners();
    this.assignClasses();
  }

  _bindEventListeners() {
    this._root.addEventListener('mousedown', this.onClick);
    this._root.addEventListener('keydown', this.onSpace);
  }

  assignClasses() {
    if (this.state.active) {
      this._root.classList.add(this.constructor.cssClasses.ACTIVE);
    } else if (this.state.disabled) {
      this._root.classList.add(this.constructor.cssClasses.DISABLED);
    } else {
      this._root.classList.remove(this.constructor.cssClasses.ACTIVE);
    }
  }

  onClick = () => {
    if (!this.state.disabled) {
      this.state.active = !this.state.active;
      this.assignClasses();
      this.emitChange();
    }
  };

  onSpace = event => {
    if (!this.state.disabled) {
      if (event.code === 'Space' || event.key === ' ') {
        this.state.active = !this.state.active;
        this.assignClasses();
        this.emitChange();
        event.preventDefault();
      }
    }
  };

  destroy() {
    // Implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this._root.removeEventListener('mousedown', this.onClick);

    this.constructor.instances.delete(this._root);
  }

  emitChange() {
    const newEvent = document.createEvent('HTMLEvents');
    newEvent.initEvent('change', true, true);
    this._root.dispatchEvent(newEvent);
  }

  set(isActive) {
    this.state.active = isActive;
    this.assignClasses();
    this.emitChange();
  }

  disable(isDisabled) {
    this.state.disabled = isDisabled;
    this.assignClasses();
    this.emitChange();
  }
}

export default Chip;
