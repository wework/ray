import React from 'react';
import { storiesOf } from '@storybook/react';
import { range } from 'lodash';

storiesOf('Grid', module)
  .add('default', () => (
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
                {n + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ))
  .add('overlap', () => (
    <div style={{ backgroundColor: 'hsl(144, 100%, 75%)' }}>
      <div className="ray-grid">
        <div
          className="ray-grid__inner"
          style={{
            position: 'relative'
          }}
        >
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
                padding: '1rem'
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
                backgroundImage: `url(//cdn.wework.com/6vy33zo2mgy3/2C7F8u8yfW4kKAI6OUa0a2/aae67b57aa0e7a26fcc84c561e823ee8/1_Web_150DPI-20180717_WeWork_Constellation_-_Common_Areas_-_Internal_Staircase.jpg?auto=compress&faces=false&w=1000&fit=crop&dpr=2&h=)`
              }}
            />
          </div>
        </div>
      </div>
    </div>
  ));
