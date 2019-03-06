import React from 'react';
import PropTypes from 'prop-types';
import { Location } from '@reach/router';
import classnames from 'classnames';
import { Link, StaticQuery } from 'gatsby';

import SideNavItem from './SideNavItem';
import navigation from '../../data/navigation/navigation.json';

export default class SideNav extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    isFinal: PropTypes.bool
  };

  renderNavItems = (nav, loc) =>
    Object.keys(nav).map(item => {
      return (
        <SideNavItem
          itemSlug={item}
          item={nav[item]}
          key={item}
          location={loc}
        />
      );
    });

  handleSkip = evt => {
    if (evt.which === 13) {
      document.activeElement.blur();
      document.querySelector('#maincontent').focus();
    }
  };

  render() {
    const { isOpen = true, isFinal } = this.props;

    const classNames = classnames({
      'side-nav': true,
      'side-nav__closed': !isOpen,
      'side-nav__closed--final': isFinal && !isOpen
    });

    return (
      <StaticQuery
        query={graphql`
          query {
            allSitePage {
              edges {
                node {
                  id
                  context {
                    slug
                    currentPage
                  }
                }
              }
            }
          }
        `}
      >
        {data =>
          console.log(data) || (
            <Location>
              {({ location }) => {
                const navItems = this.renderNavItems(navigation, location);
                return (
                  <>
                    <a
                      id="skip-to-content"
                      href="#maincontent"
                      className="skip-to-content"
                      onKeyDown={this.handleSkip}
                    >
                      Skip to main content
                    </a>
                    <nav className={classNames}>
                      <div className="side-nav--header">
                        <Link to="/" className="side-nav__logo">
                          <span>Ray</span> Design System
                        </Link>
                      </div>
                      <div className="side-nav--items">
                        <ul role="menu" className="side-nav__nav-items">
                          {navItems}
                        </ul>
                      </div>
                    </nav>
                  </>
                );
              }}
            </Location>
          )
        }
      </StaticQuery>
    );
  }
}
