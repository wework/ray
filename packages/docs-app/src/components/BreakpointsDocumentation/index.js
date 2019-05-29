import React from 'react';
import { pickBy } from 'lodash';

import * as gridVars from '../../../../core/src/ray-exports.scss';

/* eslint-disable react/prop-types */
function BreakpointsDocumentation() {
  const breakpoints = pickBy(gridVars, (_, key) =>
    key.startsWith('rayBreakpoint')
  );

  return <Breakpoints breakpoints={breakpoints} />;
}

function Breakpoints({ breakpoints }) {
  return (
    <table className="ray-table">
      <thead>
        <tr>
          <th>Breakpoint</th>
          <th>Scss map-get</th>
          <th>threshold</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(breakpoints).map(breakpointKey => {
          const breakpointMinWidth = breakpoints[breakpointKey];
          const breakpointName = breakpointKey.replace('rayBreakpoint', '');

          return (
            <tr key={breakpointName}>
              <td>{breakpointName.toLowerCase()}</td>
              <td>
                <code>
                  map-get($ray-layout-grid-breakpoints,{' '}
                  {breakpointName.toLowerCase()})
                </code>
              </td>
              <td>{breakpointMinWidth}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default BreakpointsDocumentation;
