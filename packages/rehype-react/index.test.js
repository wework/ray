const React = require('react');
const server = require('react-dom/server');
const unified = require('unified');
const u = require('unist-builder');
const h = require('hastscript');
const rehype2react = require('./');

const opts = { createElement: React.createElement };
const processor = unified().use(rehype2react, opts);

describe('rehype-react', () => {
  test('should fail without `createElement`', function() {
    expect(function() {
      unified()
        .use(rehype2react)
        .stringify(h('body'));
    }).toThrow(/createElement is not a function/);
  });

  test('should transform an element', () => {
    expect(processor.stringify(h('body'))).toEqual(
      React.createElement('body', { key: 'h-1' }, undefined)
    );
  });

  test('should transform an element with properties', () => {
    expect(
      processor.stringify(h('h1.main-heading', { dataFoo: 'bar' }))
    ).toEqual(
      React.createElement(
        'h1',
        { className: 'main-heading', 'data-foo': 'bar', key: 'h-1' },
        undefined
      )
    );
  });

  test('should transform an element with a text node', () => {
    expect(processor.stringify(h('p', 'baz'))).toEqual(
      React.createElement('p', { key: 'h-1' }, ['baz'])
    );
  });

  test('should transform an element with a child element', () => {
    expect(processor.stringify(h('p', h('strong', 'qux')))).toEqual(
      React.createElement('p', { key: 'h-1' }, [
        React.createElement('strong', { key: 'h-2' }, ['qux'])
      ])
    );
  });

  test('should transform an element with mixed contents', () => {
    expect(
      processor.stringify(h('p', [h('em', 'qux'), ' foo ', h('i', 'bar')]))
    ).toEqual(
      React.createElement('p', { key: 'h-1' }, [
        React.createElement('em', { key: 'h-2' }, ['qux']),
        ' foo ',
        React.createElement('i', { key: 'h-3' }, ['bar'])
      ])
    );
  });

  test('should skip `doctype`s', () => {
    expect(
      processor.stringify(u('root', [u('doctype', { name: 'html' })]))
    ).toEqual(
      React.createElement(
        'div',
        { key: 'h-1', className: 'rehype-root' },
        undefined
      )
    );
  });

  test('should transform trees', () => {
    expect(
      processor.stringify(
        h('body', h('h1.main-heading', { dataFoo: 'bar' }, h('span', 'baz')))
      )
    ).toEqual(
      React.createElement('body', { key: 'h-1' }, [
        React.createElement(
          'h1',
          {
            key: 'h-2',
            className: 'main-heading',
            'data-foo': 'bar'
          },
          [React.createElement('span', { key: 'h-3' }, ['baz'])]
        )
      ])
    );
  });

  test('should support components', () => {
    expect(
      server.renderToStaticMarkup(
        unified()
          .use(rehype2react, {
            createElement: React.createElement,
            components: {
              h1(props) {
                return React.createElement('h2', props);
              }
            }
          })
          .stringify(h('h1'))
      )
    ).toEqual(
      server.renderToStaticMarkup(
        React.createElement('h2', { key: 'h-1' }, undefined)
      )
    );
  });

  test('should transform an element with align property', () => {
    expect(
      processor.stringify(
        h('table', {}, [h('thead', h('th', { align: 'right' }))])
      )
    ).toEqual(
      React.createElement('table', { key: 'h-1' }, [
        React.createElement('thead', { key: 'h-2' }, [
          React.createElement(
            'th',
            { style: { textAlign: 'right' }, key: 'h-3' },
            undefined
          )
        ])
      ])
    );
  });
});
