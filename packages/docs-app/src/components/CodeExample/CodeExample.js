import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ReactGA from 'react-ga';
import Prism from 'prismjs';

class CodeExample extends Component {
  static propTypes = {
    htmlFile: PropTypes.string
  };

  state = {
    copied: false,
    showBtn: false,
    expandedCode: false
  };

  componentDidMount = () => {
    if (this.codeBlock.offsetHeight > 190) {
      this.setState({ showBtn: true });
    }

    this.doImperativeWork();
  };

  componentDidUpdate = () => {
    this.doImperativeWork();
  };

  doImperativeWork = () => {
    Prism.highlightAll();
  };

  handleCopy = () => {
    this.setState({ copied: true });
    setTimeout(() => {
      this.setState({ copied: false });
    }, 2500);
  };

  expandCode = () => {
    this.setState({ expandedCode: !this.state.expandedCode });
  };

  handleClick = () => {
    ReactGA.event({
      category: 'Copy Code',
      action: 'click'
    });
  };

  render() {
    const { htmlFile } = this.props;

    const codeExampleClass = classnames({
      'code-example__raw-html': true,
      'code-example__raw-html--expanded': this.state.expandedCode
    });

    const expandBtnClass = classnames(
      'ray-button ray-button--tertiary ray-button--compact ray-button--dark',
      {
        'code-example__expand': this.state.showBtn,
        'code-example__expand--hidden': !this.state.showBtn
      }
    );

    const expandCodeBtnText = this.state.expandedCode
      ? 'Show less code'
      : 'Show more code';
    return (
      <div className="code-example">
        <div
          className={codeExampleClass}
          ref={ref => {
            this.codeBlock = ref;
          }}
        >
          <pre className="line-numbers">
            <code className="language-html">{htmlFile}</code>
          </pre>
        </div>
        {/* <CopyToClipboard text={htmlFile} onCopy={this.handleCopy}>
          <button
            data-copy-btn
            className="bx--snippet-button code-example__copy-btn"
            onClick={() => this.handleClick()}
          >
            Copy
            <div className={copyBtnClass} data-feedback="Copied!" />
          </button>
        </CopyToClipboard> */}
        <button className={expandBtnClass} onClick={this.expandCode}>
          <span>{expandCodeBtnText}</span>
        </button>
      </div>
    );
  }
}

export default CodeExample;
