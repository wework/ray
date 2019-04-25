import React from 'react';
import { storiesOf } from '@storybook/react';
import Color from 'color';

import * as rayVars from '../src/ray-exports.scss';

storiesOf('Colors', module).add('all', () => {
  const colorKeys = Object.keys(rayVars).filter(rayVariable =>
    rayVariable.startsWith('ray-color-')
  );

  return (
    <div className="ray-grid">
      <div className="ray-grid__inner">
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
            {colorKeys.map(colorKey => {
              const color = Color(rayVars[colorKey]);
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
                        backgroundColor: rayVars[colorKey],
                        display: 'inline-block',
                        padding: '.25rem .5rem',
                        marginRight: '1rem',
                        verticalAlign: 'middle',
                        color: textColor,
                        borderRadius: '0.25rem'
                      }}
                    >
                      <pre>${colorKey}</pre>
                    </div>
                  </td>
                  <td>
                    <pre
                      style={{
                        display: 'inline-block',
                        verticalAlign: 'middle'
                      }}
                    >
                      {color
                        .hsl()
                        .round()
                        .string()}
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
      </div>
    </div>
  );
});
