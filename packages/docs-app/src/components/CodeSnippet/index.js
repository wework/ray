import React from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs';

function doImperativeWork() {
  Prism.highlightAll();
}

/* eslint-disable class-methods-use-this */
class CodeSnippet extends React.Component {
  static propTypes = {
    children: PropTypes.any
  };

  componentDidMount() {
    doImperativeWork();
  }

  componentDidUpdate() {
    doImperativeWork();
  }

  render() {
    return <pre className="code-snippet">{this.props.children}</pre>;
  }
}

export default CodeSnippet;
