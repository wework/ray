import React from 'react';
import PropTypes from 'prop-types';

export default class PageHeader extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    title: PropTypes.string,
    githubPath: PropTypes.string
  };

  render() {
    const { label, title, githubPath } = this.props;
    const labelContent =
      label !== title ? (
        <h4 className="page-header__label">{label}</h4>
      ) : (
        <div className="page-header__label" />
      );

    return (
      <div className="page-header">
        {labelContent}
        <div
          style={{
            display: 'flex',
            width: '100%',
            marginBottom: '1rem'
          }}
        >
          <h1 className="ray-text--h1" style={{ marginBottom: 0 }}>
            {title}
          </h1>
          {githubPath && (
            <a
              className="ray-button ray-button--tertiary ray-button--compact ray-button--pull-end"
              href={githubPath}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginLeft: 'auto',
                alignSelf: 'center'
              }}
            >
              Edit this page
              <span className="ray-button__icon">✍</span>
            </a>
          )}
        </div>
      </div>
    );
  }
}
