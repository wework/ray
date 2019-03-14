import React from 'react';
import classnames from 'classnames';
import { get } from 'lodash';

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

export class div extends React.Component {
  render() {
    const firstChildName = get(this.props, 'children[0].type.name', '');
    const isRootNode = (this.props.className || '').includes('rehype-root');
    const enableRunningText =
      !firstChildName.startsWith('Component') && !isRootNode;

    const classes = classnames(this.props.className, {
      'ray-running-text': enableRunningText
    });

    return <section {...this.props} className={classes} />;
  }
}
