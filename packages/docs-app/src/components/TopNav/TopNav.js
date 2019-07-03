import React from 'react';
import { Link } from 'gatsby';
import { version } from '@wework/ray-core/package.json';
import Search from '../Search';

export default function TopNav() {
  return (
    <div className="top-nav">
      <div className="ray-page-container">
        <div className="ray-grid">
          <div className="ray-grid__cell--span-full">
            <div className="top-nav__inner">
              <Link to="/" className="side-nav__heading">
                Ray <span className="side-nav__version"> v{version}</span>
              </Link>
              <Search />
              <a
                className="ray-button ray-button--secondary ray-button--compact"
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
