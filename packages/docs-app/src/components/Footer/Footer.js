import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Packages from '../../../package.json';

class Footer extends Component {
  static propTypes = {
    isExpanded: PropTypes.bool
  };

  render() {
    const version = Packages.dependencies['@wework/ray'];

    return (
      <footer className="footer">
        <div className="ray-grid">
          <div className="ray-grid__inner">
            <div className="ray-grid__cell--span-12">
              <span>@wework/ray version: {version}</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
