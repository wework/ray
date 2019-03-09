import React from 'react';
import PropTypes from 'prop-types';
import { Location } from '@reach/router';
import { Link } from 'gatsby';
import navigation from '../../data/navigation/navigation.json';
import { version } from '@wework/ray-core/package.json';

export default class SideNav extends React.Component {
  renderNavItems(slug, nav, level = 0) {
    return Object.keys(nav).map(key => {
      const item = nav[key];
      const path = `${slug}${key}/`;

      return (
        <li
          key={key}
          className={`side-nav__item side-nav__item--level-${level}`}
        >
          {!item.children && <Link to={path}>{item.title}</Link>}
          {item.children && (
            <>
              <div
                className="ray-p4"
                style={{
                  margin: '0.5rem 0 0 0',
                  fontWeight: 600
                }}
              >
                {item.title}
              </div>
              <ul style={{ paddingLeft: '1rem' }}>
                {this.renderNavItems(path, item.children, level + 1)}
              </ul>
            </>
          )}
        </li>
      );
    });
  }
  render() {
    return (
      <Location>
        {({ location }) => {
          return (
            <>
              <nav className="side-nav">
                <div className="side-nav--header">
                  <Link to="/" className="side-nav__heading">
                    Ray
                  </Link>
                  <a href="https://github.com/WeConnect/ray" target="_blank">
                    View on GitHub
                  </a>
                </div>
                <div className="side-nav--items">
                  <ul role="menu" className="side-nav__nav-items">
                    {this.renderNavItems('/', navigation)}
                  </ul>
                </div>
                <div className="side-nav__version">ray-core@{version}</div>
              </nav>
            </>
          );
        }}
      </Location>
    );
  }
}
