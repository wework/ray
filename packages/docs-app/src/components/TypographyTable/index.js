import React from 'react';
import PropTypes from 'prop-types';

export default function TypographyTable() {
  const classes = [
    'ray-text--display-1',
    'ray-text--display-2',
    'ray-text--h1',
    'ray-text--h2',
    'ray-text--h3',
    'ray-text--h4',
    'ray-text--h5',
    'ray-text--h6',
    'ray-text--body',
    'ray-text--body-large',
    'ray-text--body-small',
    'ray-text--body-x-small'
  ];

  return (
    <table className="ray-table">
      <thead>
        <tr>
          <th>Class</th>
          <th style={{ textAlign: 'right' }}>Font rem</th>
          <th style={{ textAlign: 'right' }}>Line Height</th>
          <th>Demo</th>
        </tr>
      </thead>
      <tbody>
        {classes.map(className => (
          <TypeRow className={className} key={className} />
        ))}
      </tbody>
    </table>
  );
}
class TypeRow extends React.Component {
  static propTypes = {
    className: PropTypes.string
  };

  state = {};

  typeRef = React.createRef();

  componentDidMount() {
    if (this.typeRef.current) {
      const styles = window.getComputedStyle(this.typeRef.current);
      const { fontSize, lineHeight } = styles;
      this.setState({
        fontSize,
        lineHeight
      });
    }
  }

  render() {
    const { className } = this.props;

    return (
      <tr key={className}>
        <td>
          <code>{className}</code>
        </td>
        <td className="ray-text--monospace" style={{ textAlign: 'right' }}>
          {parseInt(this.state.fontSize, 10) / 16}rem
        </td>
        <td className="ray-text--monospace" style={{ textAlign: 'right' }}>
          {this.state.lineHeight}
        </td>
        <td>
          <Type className={className} ref={this.typeRef}>
            Hello world{' '}
            {this.state.fontSize ? this.state.fontSize.replace('px', '') : null}
          </Type>
        </td>
      </tr>
    );
  }
}
const Type = React.forwardRef((props, ref) => <span {...props} ref={ref} />);
Type.displayName = 'Type';
