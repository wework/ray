class Chip {
  static instances = new WeakMap();

  static get cssClasses() {
    return {};
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

    this.constructor.instances.set(this._root, this);

    this.state = {
      active: options.active
    };

    this._bindEventListeners();
    this.assignClasses();
  }

  _bindEventListeners() {
    this._root.addEventListener('mousedown', this.onMousedown);
  }

  assignClasses() {
    if (this.state.active) {
      this._root.classList.add('ray-chip--active');
    } else {
      this._root.classList.remove('ray-chip--active');
    }
  }

  onMousedown = () => {
    this.state.active = !this.state.active;
    this.assignClasses();
  };

  destroy() {
    // Implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this._root.removeEventListener('mousedown', this.onMousedown);

    this.constructor.instances.delete(this._root);
  }
}

export default Chip;
