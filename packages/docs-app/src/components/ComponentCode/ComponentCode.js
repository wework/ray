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
      name,
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

    return (
      <div className="component-variation">
        <h2 className="ray-text--h2">{name}</h2>

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
