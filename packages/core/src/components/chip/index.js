class Chip {
  static instances = new WeakMap();

  static get cssClasses() {
    return {
      ACTIVE: 'ray-chip--active'
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

  static createAll(target = document, _options = { active: false }) {
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
      active: this._root.classList.contains(this.constructor.cssClasses.ACTIVE)
    };

    this._bindEventListeners();
    this.assignClasses();
  }

  _bindEventListeners() {
    this._root.addEventListener('mousedown', this.onClick);
    this._root.addEventListener('keyup', this.onSpace);
  }

  assignClasses() {
    if (this.state.active) {
      this._root.classList.add(this.constructor.cssClasses.ACTIVE);
    } else {
      this._root.classList.remove(this.constructor.cssClasses.ACTIVE);
    }
  }

  onClick = () => {
    this.state.active = !this.state.active;
    this.assignClasses();
  };

  onSpace = e => {
    if (e.code === 'Space') {
      this.state.active = !this.state.active;
      this.assignClasses();
    }
  };

  destroy() {
    // Implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this._root.removeEventListener('mousedown', this.onClick);

    this.constructor.instances.delete(this._root);
  }
}

export default Chip;
