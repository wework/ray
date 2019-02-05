import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Content Section', module).addWithJSX('stacked', () => (
  <React.Fragment>
    <div className="ray-section ray-section--with-padding">
      <div className="ray-grid">
        <div className="ray-grid__inner">
          <div
            className="ray-grid__cell--span-10"
            style={{
              gridColumnStart: 2
            }}
          >
            <h2 className="ray-h3">Make a life not just a living</h2>
            <p className="ray-p3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
              vero doloribus quis accusamus consequatur, voluptatem,
              reprehenderit pariatur libero qui expedita placeat? Officia,
              impedit libero. Rerum cumque assumenda ipsum molestias explicabo!
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="ray-grid">
      <div className="ray-grid__inner">
        <div className="ray-grid__cell--span-12">
          <div
            className="ray-section ray-section--with-padding"
            style={{
              backgroundColor: '#FFF7F5'
            }}
          >
            <div className="ray-grid__inner">
              <div
                className="ray-grid__cell--span-5 ray-grid__cell--align-middle"
                style={{
                  gridColumnStart: 2
                }}
              >
                <h2 className="ray-h3">
                  Space for the world’s largest companies
                </h2>
                <p className="ray-p3">
                  The world’s most innovative companies are using WeWork to
                  think differently about workspace.
                </p>
              </div>
              <div
                className="ray-grid__cell--span-4"
                style={{
                  gridColumnStart: 8
                }}
              >
                <div
                  className="ray-bg ray-bg--4by3"
                  style={{
                    backgroundImage: `url(https://source.unsplash.com/random/800x800)`
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="ray-section ray-section--with-padding">
      <div className="ray-grid">
        <div className="ray-grid__inner">
          <div
            className="ray-grid__cell--span-10"
            style={{
              gridColumnStart: 2
            }}
          >
            <h2 className="ray-h3">Space for the world’s largest companies</h2>
            <p className="ray-p3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
              vero doloribus quis accusamus consequatur, voluptatem,
              reprehenderit pariatur libero qui expedita placeat? Officia,
              impedit libero. Rerum cumque assumenda ipsum molestias explicabo!
            </p>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
));
