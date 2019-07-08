import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { version } from '@wework/ray-core/package.json';
import Search from '../Search';

export default function TopNav(props) {
  return (
    <div className="top-nav">
      <div className="ray-page-container">
        <div className="ray-grid">
          <div className="ray-grid__cell--span-full">
            <div className="top-nav__inner">
              <button
                className="top-nav__mobile-toggle ray-link"
                onClick={props.toggleNav}
              >
                ☰
              </button>

              <Link to="/" className="top-nav__heading">
                Ray <span className="top-nav__version"> v{version}</span>
              </Link>

              <Search />

              <a
                className="top-nav__feedback ray-button ray-button--secondary ray-button--compact"
                style={{ marginLeft: '1rem' }}
                href="https://forms.gle/CZN9XAcPm2RDct1R9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Give Feedback
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

TopNav.propTypes = {
  toggleNav: PropTypes.func
};
