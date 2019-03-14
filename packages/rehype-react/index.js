/* Dependencies. */
const has = require('has');
const toH = require('hast-to-hyperscript');
const tableCellStyle = require('@mapbox/hast-util-table-cell-style');

/* Expose `rehype-react`. */
module.exports = rehype2react;

/**
 * Attach a react compiler.
 *
 * @param {Unified} processor - Instance.
 * @param {Object?} [options]
 * @param {Object?} [options.components]
 *   - Components.
 * @param {string?} [options.prefix]
 *   - Key prefix.
 * @param {Function?} [options.createElement]
 *   - `h()`.
 */
function rehype2react(options) {
  const settings = options || {};
  const { createElement } = settings;
  const components = settings.components || {};

  this.Compiler = compiler;

  /* Compile HAST to React. */
  function compiler(node) {
    let sanitizedNode = node;
    if (node.type === 'root') {
      if (node.children.length === 1 && node.children[0].type === 'element') {
        sanitizedNode = node.children[0]; // eslint-disable-line prefer-destructuring
      } else {
        sanitizedNode = {
          type: 'element',
          tagName: 'div',
          properties: {
            ...node.properties,
            className: 'rehype-root'
          },
          children: node.children
        };
      }
    }

    return toH(h, tableCellStyle(sanitizedNode), settings.prefix);
  }

  /* Wrap `createElement` to pass components in. */
  function h(name, props, children) {
    const component = has(components, name) ? components[name] : name;
    return createElement(component, props, children);
  }
}
