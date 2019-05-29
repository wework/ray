import React from 'react';
import { storiesOf } from '@storybook/react';
import { range } from 'lodash';

import getPlaceholderURL from './util/placeholder';
/* eslint-disable react/prop-types */

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
      style={{
        position: 'relative',
        backgroundColor: 'hsl(0, 100%, 75%)',
        ...props.style
      }}
    />
  );
}

storiesOf('Grid', module)
  .add('default', () => (
    <div style={{ backgroundColor: 'hsl(144, 100%, 75%)' }}>
      <div className="ray-page-container">
        <RayGridInnerWithBackground>
          {range(12).map(n => (
            <div className="ray-grid__cell--span-1" key={n}>
              <SampleContent>{n + 1}</SampleContent>
            </div>
          ))}
          <div className="ray-grid__cell">
            <div
              style={{
                minHeight: '4vh',
                backgroundColor: 'hsl(255, 100%, 75%)'
              }}
            >
              yo
            </div>
          </div>
        </RayGridInnerWithBackground>
      </div>
    </div>
  ))
  .add('push', () => (
    <div>
      <div style={{ backgroundColor: 'hsl(144, 100%, 75%)' }}>
        <div className="ray-page-container">
          <RayGridInnerWithBackground style={{ marginBottom: '0.5rem' }}>
            {range(12).map(n => (
              <div className="ray-grid__cell--span-1" key={n}>
                <SampleContent>{n + 1}</SampleContent>
              </div>
            ))}
          </RayGridInnerWithBackground>
          <RayGridInnerWithBackground style={{ marginBottom: '0.5rem' }}>
            <div className="ray-grid__cell--span-3 ray-grid__cell--push-1">
              <SampleContent>span-3 push-1</SampleContent>
            </div>
          </RayGridInnerWithBackground>
          <RayGridInnerWithBackground style={{ marginBottom: '0.5rem' }}>
            <div className="ray-grid__cell--span-4 ray-grid__cell--push-2">
              <SampleContent>span-4 push-2</SampleContent>
            </div>
          </RayGridInnerWithBackground>
          <RayGridInnerWithBackground style={{ marginBottom: '0.5rem' }}>
            <div className="ray-grid__cell--span-9-desktop ray-grid__cell--push-2-desktop ray-grid__cell--span-2-phone ray-grid__cell--push-1-phone ray-grid__cell--span-2-tablet ray-grid__cell--push-6-tablet">
              <SampleContent>mixed usage</SampleContent>
            </div>
          </RayGridInnerWithBackground>
        </div>
      </div>
      <div className="ray-page-container" style={{ margin: '5rem 0' }}>
        <div className="ray-grid">
          <div className="ray-grid__cell--span-4 ray-grid__cell--push-1-desktop">
            <div className="ray-image ray-image--3by4">
              <img
                alt="two women on tan couch with painting, 3 by 4"
                src={getPlaceholderURL('3x4')}
              />
            </div>
          </div>
          <div className="ray-grid__cell--span-4 ray-grid__cell--push-1-desktop ray-grid__cell--align-middle">
            <h2 className="ray-text--h2">Where Company Becomes Community</h2>
            <p className="ray-text--body">
              Space has the power to transform business—unlocking the potential
              of people and organizations. Intentional design, warm hospitality,
              and flexible solutions enable your team to do its best work.
            </p>
            <a href="#" className="ray-link">
              <span>View All Locations</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  ))
  .add('overlap', () => (
    <div style={{ backgroundColor: 'hsl(144, 100%, 75%)' }}>
      <div className="ray-page-container">
        <RayGridInnerWithBackground>
          <div
            className="ray-grid__cell--span-4"
            style={{
              zIndex: '1',
              position: 'absolute',
              top: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                backgroundColor: '#fff',
                padding: '1rem',
                width: '100%'
              }}
            >
              <pre
                style={{
                  margin: 0
                }}
              >
                z-index: 1;
                <br />
                position: absolute;
                <br />
                top: 0;
                <br />
                bottom: 0;
                <br />
                display: flex;
                <br />
                align-items: center;
                <br />
              </pre>
            </div>
          </div>
          <div
            className="ray-grid__cell--span-10"
            style={{
              marginLeft: 'auto'
            }}
          >
            <div
              className="ray-bg ray-bg--16by9"
              style={{
                backgroundImage: `url(${getPlaceholderURL('16x9')})`
              }}
            />
          </div>
        </RayGridInnerWithBackground>
      </div>
    </div>
  ))
  .add('debugger', () => (
    <div>
      <div className="ray-page-container ray-page-container--debug">
        <div className="ray-grid" style={{ position: 'relative' }}>
          <div
            className="ray-grid__cell--span-4"
            style={{
              zIndex: '1',
              position: 'absolute',
              top: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                backgroundColor: '#fff',
                padding: '1rem',
                width: '100%'
              }}
            >
              <pre
                style={{
                  margin: 0
                }}
              >
                z-index: 1;
                <br />
                position: absolute;
                <br />
                top: 0;
                <br />
                bottom: 0;
                <br />
                display: flex;
                <br />
                align-items: center;
                <br />
              </pre>
            </div>
          </div>
          <div
            className="ray-grid__cell--span-10"
            style={{
              marginLeft: 'auto'
            }}
          >
            <div
              className="ray-bg ray-bg--16by9"
              style={{
                backgroundImage: `url(${getPlaceholderURL('16x9')})`
              }}
            />
          </div>
        </div>
      </div>
    </div>
  ))
  .add('sample utils', () => (
    <div style={{ backgroundColor: 'hsl(144, 100%, 75%)' }}>
      <div className="ray-page-container ray-page-container--justify-center">
        <RayGridInnerWithBackground>
          <div className="ray-grid__cell">
            <SampleContent />
          </div>
          <div className="ray-grid__cell--span-full">
            <SampleContent />
          </div>
          <div className="ray-grid__cell">
            <SampleContent />
          </div>
        </RayGridInnerWithBackground>
      </div>
    </div>
  ));
