import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import favicon32 from '../../content/global/images/favicon-32.png';
import '../../styles/index.scss';

class HtmlBase extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    htmlClasses: PropTypes.string
  };

  render() {
    const { children, htmlClasses } = this.props;

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
              <html lang="en" className={htmlClasses} />
            </Helmet>

            {children}
          </>
        )}
      />
    );
  }
}

export default HtmlBase;
