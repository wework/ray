import React from 'react';
import { pickBy, range } from 'lodash';

import * as gridVars from '../../../../core/src/ray-exports.scss';

/* eslint-disable react/prop-types */
function GridDocumentation() {
  const breakpoints = pickBy(gridVars, (_, key) =>
    key.startsWith('rayBreakpoint')
  );

  return (
    <div>
      <h4 className="ray-text--h4">Live Example</h4>
      <p>Try resizing your browser!</p>
      <GridExample />

      <h4 className="ray-text--h4" style={{ marginTop: '4rem' }}>
        Debug Overlay
      </h4>
      <p className="ray-text--body">
        You can enable a visual grid overlay by adding a{' '}
        <code>ray-page-container--debug</code> class name to either the{' '}
        <code>ray-grid</code> div or any parent, full-width container (ie, html
        or body). Grid overlay is aware of phone/tablet/desktop breakpoints and
        will adjust accordingly.
      </p>
      <p>
        <strong>Note:</strong> These classes are not available in the compiled
        css output, but are available in the non-minified version as well as the{' '}
        <code>scss/ray-debug.scss</code> file.
      </p>
      <GridDebugExample />

      <h4 className="ray-text--h4" style={{ marginTop: '4rem' }}>
        Breakpoints
      </h4>
      <Breakpoints breakpoints={breakpoints} />
    </div>
  );
}

function SampleContent(props) {
  return (
    <div
      {...props}
      style={{
        minHeight: '4vh',
        backgroundColor: 'hsl(255, 100%, 75%)'
      }}
    />
  );
}

function RayGridInnerWithBackground(props) {
  return (
    <div
      {...props}
      className="ray-grid"
      style={{ backgroundColor: 'hsl(0, 100%, 75%)', ...props.style }}
    />
  );
}

function GridExample() {
  return (
    <div style={{ backgroundColor: 'hsl(144, 100%, 75%)' }}>
      <div className="ray-page-container">
        <RayGridInnerWithBackground>
          {range(12).map(n => (
            <div className="ray-grid__cell--span-1" key={n}>
              <SampleContent>cell</SampleContent>
            </div>
          ))}
          <div className="ray-grid__cell">
            <SampleContent>cell</SampleContent>
          </div>
          <div className="ray-grid__cell--span-full">
            <SampleContent>
              {"I'm a cell that will always span full width"}
            </SampleContent>
          </div>
          <div className="ray-grid__cell ray-grid__cell--push-2">
            <SampleContent>{"I'm a cell with a push modifier"}</SampleContent>
          </div>
        </RayGridInnerWithBackground>
      </div>
    </div>
  );
}

function GridDebugExample() {
  return (
    <div className="ray-page-container ray-page-container--debug">
      <div className="ray-grid">
        <div className="ray-grid__cell ray-grid__cell--push-2-desktop">
          <div
            className="ray-bg ray-bg--16by9"
            style={{
              backgroundImage: `url(https://source.unsplash.com/random/1280x720?minimalist)`
            }}
          />
        </div>
        <div className="ray-grid__cell">
          <h3 className="ray-text--h3">Better Together</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
