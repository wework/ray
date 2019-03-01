import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import SideNav from '../SideNav';
import favicon32 from '../../content/global/images/favicon-32.png';

import '../../styles/index.scss';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    location: PropTypes.object
  };

  render() {
    const { children } = this.props;

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: 'description',
                  content: 'Replace me with meta description'
                },
                {
                  name: 'keywords',
                  content: 'Replace me with meta keywords'
                }
              ]}
              link={[
                {
                  rel: 'shortcut icon',
                  type: 'image/png',
                  href: `${favicon32}`
                }
              ]}
            >
              <html lang="en" />
            </Helmet>

            <div
              style={{
                maxWidth: '1320px',
                margin: '0 auto',
                display: 'flex',
                padding: '0 1rem'
              }}
            >
              <div
                style={{
                  marginRight: '24px',
                  width: '312px'
                }}
              >
                <SideNav
                  location={this.props.location}
                  clickToClose={this.clickToClose}
                />
              </div>

              <div style={{ width: '100%' }}>{children}</div>
            </div>
          </>
        )}
      />
    );
  }
}

export default Layout;
