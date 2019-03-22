import React from 'react';
import PropTypes from 'prop-types';

import ComponentExample from '../ComponentExample/ComponentExample';

export default class ComponentCode extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    component: PropTypes.string,
    variation: PropTypes.string,
    codepen: PropTypes.string,
    background: PropTypes.string,
    hasreactversion: PropTypes.string,
    experimental: PropTypes.string,
    hideViewFullRender: PropTypes.bool
  };

  render() {
    const {
      component,
      name = '',
      codepen,
      hasreactversion,
      variation,
      experimental
    } = this.props;

    let htmlFile;

    if (!htmlFile) {
      try {
        // eslint-disable-next-line global-require, import/no-dynamic-require
        htmlFile = require(`../../../../../docs/html/${component}/${variation}.html`);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
        return null;
      }
    }

    const id = `component--${name.toLowerCase().replace(' ', '-')}`;

    return (
      <div className="component-variation">
        {name && (
          <h2 className="ray-text--h2" id={id}>
            <a
              href={`#${id}`}
              aria-label={`${name} permalink`}
              className="anchor"
            >
              <svg
                height="16"
                width="16"
                fill="#0000ff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <defs />
                <title>icons</title>
                <g id="Icon">
                  <path d="M29.2416,6.7587a6.0194,6.0194,0,0,0-8.5039,0l1.4172,1.4171a4.0089,4.0089,0,0,1,5.67,5.6694l-7.9793,7.9791a4.0089,4.0089,0,0,1-5.67-5.6694l1.4176-1.4171L14.176,13.3206l-1.4176,1.4171a6.0131,6.0131,0,0,0,8.5039,8.5036l7.9793-7.9791A6.02,6.02,0,0,0,29.2416,6.7587Z" />
                  <path d="M4.1783,24.8217a4.0164,4.0164,0,0,1,0-5.6738l7.9688-7.9672a4.0121,4.0121,0,1,1,5.6746,5.6734l-2.12,2.1195L17.12,20.3918l2.12-2.1195a6.0179,6.0179,0,0,0-8.5114-8.51L2.76,17.73a6.0181,6.0181,0,0,0,8.5114,8.51L9.8529,24.8217A4.0177,4.0177,0,0,1,4.1783,24.8217Z" />
                </g>
                <g id="Transparent_Rectangle" data-name="Transparent Rectangle">
                  <rect
                    className="cls-1"
                    x="-0.0116"
                    y="-0.0007"
                    width="32"
                    height="32"
                  />
                </g>
              </svg>
            </a>
            {name}
          </h2>
        )}

        <ComponentExample
          codepenSlug={codepen}
          component={component}
          variation={variation}
          htmlFile={htmlFile}
          hideViewFullRender={this.props.hideViewFullRender}
          hasReactVersion={hasreactversion}
          experimental={experimental}
        />
      </div>
    );
  }
}
