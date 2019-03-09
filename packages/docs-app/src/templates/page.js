import '../polyfills';

import React from 'react';
import RehypeReact from 'rehype-react';
import classnames from 'classnames';
import { graphql } from 'gatsby';
import Layout from '../components/Layouts';

// Components
import PageHeader from '../components/PageHeader';
import PageTable from '../components/PageTable';
import ComponentCode from '../components/ComponentCode';
import ComponentDocs from '../components/ComponentDocs';
import ComponentOverview from '../components/ComponentOverview';
import CodeSnippet from '../components/CodeSnippet';

const GITHUB_SOURCE_URL = 'https://github.com/WeConnect/ray/blob/master';

// Custom Markdown
import {
  h4,
  ul,
  ol,
  PageIntro,
  FlexGroup
} from '../components/markdown/Markdown';

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    h4,
    ul,
    ol,
    table: PageTable,
    pre: CodeSnippet,
    'page-intro': PageIntro,
    'flex-group': FlexGroup,
    component: ComponentCode,
    'component-docs': ComponentDocs,
    'component-overview': ComponentOverview
  }
}).Compiler;

// eslint-disable-next-line react/prop-types
export default ({ data }) => {
  const post = data.markdownRemark;

  const classNames = classnames('page-content ray-grid', {
    'page-content--component': post.frontmatter.label === 'Component'
  });

  return (
    <Layout>
      {post.frontmatter.title && (
        <PageHeader
          title={post.frontmatter.title}
          label={post.frontmatter.label}
          githubPath={`${GITHUB_SOURCE_URL}${post.fields.sourcePath}`}
        />
      )}

      <div className={classNames}>
        <div className="ray-grid__inner">
          <div className="ray-grid__cell--span-12 ray-grid__cell--span-8-desktop">
            {renderAst(post.htmlAst)}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query Query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      fields {
        slug
        currentPage
        sourcePath
      }
      frontmatter {
        title
        label
      }
    }
  }
`;
