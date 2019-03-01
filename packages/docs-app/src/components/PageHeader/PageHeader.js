import React from 'react';
import PropTypes from 'prop-types';

export default class PageHeader extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    title: PropTypes.string
  };

  render() {
    const { label, title } = this.props;
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
            <div className="ray-grid__cell--span-12">
              {labelContent}
              <h1 className="ray-h2">{title}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
