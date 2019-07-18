import React from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs';

function highlightCode(code, language) {
  try {
    return Prism.highlight(code, Prism.languages[language], language);
  } catch {
    return code;
  }
}

/* eslint-disable class-methods-use-this */
class CodeSnippet extends React.Component {
  static propTypes = {
    children: PropTypes.any
  };

  render() {
    const code = this.props.children[0].props.children[0];
    // eslint-disable-next-line react/prop-types
    const { className } = this.props.children[0].props;
    const language = className.replace('language-', '');
    return (
      <pre
        className={`code-snippet ${className}`}
        dangerouslySetInnerHTML={{ __html: highlightCode(code, language) }}
      />
    );
  }
}

export default CodeSnippet;
