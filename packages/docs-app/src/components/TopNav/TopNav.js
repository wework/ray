import React from 'react';
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
              <Link to="/" className="side-nav__heading">
                Ray <span className="side-nav__version"> v{version}</span>
              </Link>
              {/* <a
                className="side-nav__github"
                href="https://github.com/wework/ray"
                rel="noopener noreferrer"
                target="_blank"
              >
                View on GitHub →
              </a> */}
              <Search />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
