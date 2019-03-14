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

  constructor(props) {
    super(props);
    this.state = {
      navOpen: false
    };
  }

  toggleNav = () => {
    this.setState({
      navOpen: !this.state.navOpen
    });
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
                  content: `Resources for building interfaces with WeWork's design system.`
                },
                {
                  name: 'keywords',
                  content: 'design system, wework, ray'
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
            <div className="page">
              <SideNav
                location={this.props.location}
                clickToClose={this.clickToClose}
                open={this.state.navOpen}
                toggleNav={this.toggleNav}
              />

              <main className="main-content">{children}</main>
            </div>
          </>
        )}
      />
    );
  }
}

export default Layout;
