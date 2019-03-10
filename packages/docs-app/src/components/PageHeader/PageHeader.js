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
        <div className="ray-grid">
          <div className="ray-grid__inner">
            <div className="ray-grid__cell--span-12 ray-grid__cell--span-8-desktop">
              {labelContent}
              <div
                style={{
                  display: 'flex'
                }}
              >
                <h1 className="ray-h2">{title}</h1>
                {githubPath && (
                  <a
                    className="ray-btn ray-btn--tertiary ray-btn--pull-right"
                    href={githubPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      marginLeft: 'auto'
                    }}
                  >
                    Edit this page
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
