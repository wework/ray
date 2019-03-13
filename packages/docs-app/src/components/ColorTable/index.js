import React from 'react';
import * as colors from '../../../../core/src/global/_colors.scss';

function toKebab(str) {
  return str.replace(/([a-z])([A-Z0-9])/g, '$1-$2').toLowerCase();
}

function ColorTable() {
  return (
    <table className="ray-table color-table">
      <thead>
        <th>name</th>
        <th>value</th>
      </thead>
      <tbody>
        {Object.keys(colors).map(colorKey => (
          <tr key={colorKey}>
            <td>
              <pre>${toKebab(colorKey)}</pre>
            </td>
            <td>
              <div
                style={{
                  backgroundColor: colors[colorKey],
                  width: '4rem',
                  height: '4rem',
                  display: 'inline-block',
                  marginRight: '1rem',
                  verticalAlign: 'middle'
                }}
              />
              <pre
                style={{
                  display: 'inline-block',
                  verticalAlign: 'middle'
                }}
              >
                {colors[colorKey]}
              </pre>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ColorTable;
