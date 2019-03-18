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
        <tr>
          <th>variable</th>
          <th>hsl</th>
          <th>rgb</th>
          <th>hex</th>
        </tr>
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
                    padding: '.25rem .5rem',
                    marginRight: '1rem',
                    verticalAlign: 'middle',
                    color: textColor,
                    borderRadius: '0.25rem'
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
