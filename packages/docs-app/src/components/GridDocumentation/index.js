import React from 'react';
import { pickBy, range } from 'lodash';

import * as gridVars from '../../../../core/src/global/material-grid/_variables.scss';

/* eslint-disable react/prop-types */
function GridDocumentation() {
  const breakpoints = pickBy(gridVars, (_, key) =>
    key.startsWith('rayBreakpoint')
  );

  return (
    <div>
      <h4 className="ray-h4">Live Example</h4>
      <p>Try resizing your browser!</p>
      <GridExample />

      <h4 className="ray-h4">Breakpoints</h4>

      <Breakpoints breakpoints={breakpoints} />
    </div>
  );
}

function GridExample() {
  return (
    <div style={{ backgroundColor: 'hsl(144, 100%, 75%)' }}>
      <div className="ray-grid">
        <div
          className="ray-grid__inner"
          style={{ backgroundColor: 'hsl(0, 100%, 75%)' }}
        >
          {range(12).map(n => (
            <div className="ray-grid__cell--span-1" key={n}>
              <div
                style={{
                  minHeight: '4vh',
                  backgroundColor: 'hsl(255, 100%, 75%)'
                }}
              >
                span-1
              </div>
            </div>
          ))}
          <div className="ray-grid__cell">
            <div
              style={{
                minHeight: '4vh',
                backgroundColor: 'hsl(255, 100%, 75%)'
              }}
            >
              span
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Breakpoints({ breakpoints }) {
  return (
    <table className="ray-table">
      <thead>
        <tr>
          <th>Breakpoint</th>
          <th>threshold</th>
          <th>max. width</th>
          <th># of cols</th>
          <th>gutter</th>
          <th>margin</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(breakpoints).map(breakpointKey => {
          const breakpointMinWidth = breakpoints[breakpointKey];
          const breakpointName = breakpointKey.replace('rayBreakpoint', '');
          const breakpointMaxWidth =
            gridVars[`rayGridMaxWidth${breakpointName}`];
          const breakpointGutter = gridVars[`rayGridGutter${breakpointName}`];
          const breakpointMargin = gridVars[`rayGridMargin${breakpointName}`];
          const breakpointNumOfColumns =
            gridVars[`rayGridBreakpointColumns${breakpointName}`];

          return (
            <tr key={breakpointName}>
              <td className="ray-text--h5">{breakpointName}</td>
              <td>{breakpointMinWidth}</td>
              <td>{breakpointMaxWidth}</td>
              <td>{breakpointNumOfColumns}</td>
              <td>{breakpointGutter}</td>
              <td>{breakpointMargin}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default GridDocumentation;
