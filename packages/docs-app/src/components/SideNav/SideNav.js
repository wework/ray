import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { version } from '@wework/ray-core/package.json';
import cn from 'classnames';
import navigation from '../../data/navigation/navigation.json';

export default class SideNav extends React.Component {
  static propTypes = {
    open: PropTypes.bool,
    toggleNav: PropTypes.func
  };

  static defaultProps = {
    open: false
  };

  renderNavItems(slug, nav, level = 0) {
    const keys = level === 0 ? Object.keys(nav) : Object.keys(nav).sort();

    return keys.map(key => {
      const item = nav[key];
      const path = `${slug}${key}/`;

      return (
        <li
          key={key}
          className={`side-nav__item side-nav__item--level-${level}`}
        >
          {!item.children && (
            <Link to={path} activeClassName="active">
              {item.title}
            </Link>
          )}
          {item.children && (
            <>
              <div className="side-nav__item--heading ray-text--h5">
                {item.title}
              </div>
              <ul>{this.renderNavItems(path, item.children, level + 1)}</ul>
            </>
          )}
        </li>
      );
    });
  }

  render() {
    return (
      <>
        <button
          className="side-nav--mobile-toggle ray-button ray-button--tertiary"
          onClick={this.props.toggleNav}
        >
          {this.props.open ? '╳' : '☰'}
        </button>
        <nav
          className={cn('side-nav', {
            'side-nav--open': this.props.open
          })}
        >
          <div className="side-nav__inner">
            <div className="side-nav--items">
              <ul role="menu" className="side-nav__nav-items">
                {this.renderNavItems('/', navigation)}
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
