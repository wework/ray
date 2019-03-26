import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import * as components from '../../../../core/src';
import CodeExample from '../CodeExample/CodeExample';
import bg from '../../content/global/images/bg.svg';

const nameMap = {
  'text-field': 'TextField',
  'text-area': 'TextArea'
};

class ComponentExample extends Component {
  static propTypes = {
    htmlFile: PropTypes.string,
    prevHtmlFile: PropTypes.string,
    component: PropTypes.string,
    variation: PropTypes.string,
    hideViewFullRender: PropTypes.bool,
    codepenSlug: PropTypes.string,
    experimental: PropTypes.string
  };

  static _initHandles = new WeakMap();

  state = {
    currentHTMLfile: this.props.htmlFile
  };

  _ref = null;

  _handles = [];

  _liveContainerRef = createRef();

  _liveDemoRef = ref => {
    this._ref = ref;
    this._releaseAndInstantiateComponents();
  };

  componentDidUpdate({ htmlFile }) {
    const { prevHtmlFile } = this.props;
    if (prevHtmlFile !== htmlFile) {
      this._releaseAndInstantiateComponents();
    }
  }

  _releaseAndInstantiateComponents() {
    const handles = this._handles;
    for (let instance = handles.pop(); instance; instance = handles.pop()) {
      instance.destroy();
    }
    const ref = this._ref;
    if (ref) {
      const { component } = this.props;
      const currentComponent = component
        .replace(/-([a-z])/g, (match, token) => token.toUpperCase())
        .replace(/^([a-z])/, (match, token) => token.toUpperCase());

      [currentComponent].forEach(name => {
        const TheComponent = components[nameMap[name] || name];
        if (TheComponent) {
          const options = {};
          const { INIT_SELECTOR } = TheComponent.strings;
          // Gatsby's setup seems to use `.concat()` for [...arraylike], which does not work for `NodeList`
          handles.push(
            ...Array.from(ref.querySelectorAll(INIT_SELECTOR)).map(elem => {
              return TheComponent.create(elem, options);
            })
          );
        }
      });
    }
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(props) {
    if (this.state.currentHTMLfile !== props.htmlFile) {
      this.setState({ currentHTMLfile: props.htmlFile });
    }
  }

  render() {
    const { component, codepenSlug, experimental } = this.props;

    const { currentHTMLfile = '' } = this.state;
    const demoHtml = !experimental
      ? currentHTMLfile
      : currentHTMLfile.replace(/bx--/g, 'demo--');

    const classNames = classnames({
      'component-example__live--rendered': true,
      [`${component}`]: true
    });

    const lightUIclassnames = classnames({
      'component-example': true,
      'bx--global-light-ui': component === 'tabs'
    });

    let componentName =
      component
        .replace(/-/g, ' ')
        .charAt(0)
        .toUpperCase() + component.replace(/-/g, ' ').substring(1);

    if (componentName.split(' ').length > 1) {
      componentName = `${componentName.split(' ')[0]} ${componentName
        .split(' ')[1]
        .charAt(0)
        .toUpperCase() + componentName.split(' ')[1].substring(1)}`;
    }

    const liveBackgroundClasses = classnames(
      'component-example__live',
      `component-example__live--${component}`
    );

    const componentLink = `https://codepen.io/team/wework/full/${codepenSlug}/`;

    return (
      <div className={lightUIclassnames}>
        <div
          className={liveBackgroundClasses}
          ref={this._liveContainerRef}
          data-floating-menu-container
          style={{
            backgroundImage: `url(${bg})`
          }}
        >
          <div className={classNames}>
            <div
              ref={this._liveDemoRef}
              style={{
                width: '100%'
              }}
              dangerouslySetInnerHTML={{ __html: demoHtml }}
            />
          </div>
        </div>
        <div
          className="component-toolbar"
          style={{
            display: 'none'
          }}
        >
          <div className="component-toolbar__current">
            <p>Vanilla JS</p>
          </div>
          <div className="component-toolbar__links">
            {codepenSlug !== undefined && (
              <a target="_blank" href={componentLink} rel="noopener noreferrer">
                CodePen
              </a>
            )}
          </div>
        </div>
        <CodeExample htmlFile={currentHTMLfile} />
      </div>
    );
  }
}

export default ComponentExample;
