import React from 'react';
import PropTypes from 'prop-types';
import { Location } from '@reach/router';
import { Link, StaticQuery } from 'gatsby';

export default class SideNav extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allSitePage {
              edges {
                node {
                  id
                  path
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
                return (
                  <>
                    <nav className="side-nav">
                      <div className="side-nav--header">
                        <Link to="/" className="side-nav__logo">
                          <span>Ray</span> Design System
                        </Link>
                      </div>
                      <div className="side-nav--items">
                        <ul role="menu" className="side-nav__nav-items">
                          {data.allSitePage.edges.map(edge => {
                            return (
                              <li key={edge.node.id}>
                                <Link to={edge.node.path}>
                                  {edge.node.path}
                                </Link>
                              </li>
                            );
                          })}
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
