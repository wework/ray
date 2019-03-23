import React from 'react';

/* eslint-disable react/prop-types */
export class PageIntro extends React.Component {
  render() {
    return <span className="page-intro">{this.props.children}</span>;
  }
}

export class FlexGroup extends React.Component {
  render() {
    return <div className="page-flex-group">{this.props.children}</div>;
  }
}

export class ul extends React.Component {
  render() {
    return <ul className="page-ul">{this.props.children}</ul>;
  }
}

export class ol extends React.Component {
  render() {
    return <ol className="page-ol">{this.props.children}</ol>;
  }
}
