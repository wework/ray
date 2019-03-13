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
import CodeSnippet from '../components/CodeSnippet';
import ColorTable from '../components/ColorTable';

// Custom Markdown
import {
  h4,
  ul,
  ol,
  PageIntro,
  FlexGroup
} from '../components/markdown/Markdown';

const GITHUB_SOURCE_URL = 'https://github.com/WeConnect/ray/blob/master';

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
    'color-table': ColorTable,
    component: ComponentCode
  }
}).Compiler;

// eslint-disable-next-line react/prop-types
export default ({ data }) => {
  const post = data.markdownRemark;

  const classNames = classnames('page-content ray-grid', {
    'page-content--component': post.frontmatter.label === 'Component'
  });

  const githubPath = post.fields.sourcePath
    ? `${GITHUB_SOURCE_URL}/${post.fields.sourcePath}`
    : null;

  return (
    <Layout>
      {post.frontmatter.title && (
        <PageHeader
          title={post.frontmatter.title}
          label={post.frontmatter.label}
          githubPath={githubPath}
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
  query Query($path: String!) {
    markdownRemark(fields: { path: { eq: $path } }) {
      htmlAst
      fields {
        slug
        path
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
