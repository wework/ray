import React from 'react';
import Color from 'color';
import * as colors from '../../../../core/src/global/_colors.scss';

function toKebab(str) {
  return str.replace(/([a-z])([A-Z0-9])/g, '$1-$2').toLowerCase();
}

function ColorTable() {
  return (
    <table className="ray-table color-table">
      <thead>
        <th>variable</th>
        <th>hsl</th>
        <th>hex</th>
        <th>rgb</th>
      </thead>
      <tbody>
        {Object.keys(colors).map(colorKey => {
          const color = Color(colors[colorKey]);
          const textColor = color.isDark() ? 'white' : 'black';

          return (
            <tr
              key={colorKey}
              style={{
                padding: 0
              }}
            >
              <td>
                <div
                  style={{
                    backgroundColor: colors[colorKey],
                    display: 'inline-block',
                    padding: '1rem',
                    marginRight: '1rem',
                    verticalAlign: 'middle',
                    color: textColor
                  }}
                >
                  <pre>${toKebab(colorKey)}</pre>
                </div>
              </td>
              <td>
                <pre
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle'
                  }}
                >
                  {color.hsl().string()}
                </pre>
              </td>
              <td>
                <pre
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle'
                  }}
                >
                  {color.rgb().string()}
                </pre>
              </td>
              <td>
                <pre
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle'
                  }}
                >
                  {color.hex().toString()}
                </pre>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ColorTable;
