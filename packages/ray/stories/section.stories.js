import React from 'react';
import { storiesOf } from '@storybook/react';

import withPadding from './util/withPadding';

storiesOf('Section', module).addWithJSX('stacked', () =>
  withPadding(
    <React.Fragment>
      <div className="Section Section--withPadding">
        <div className="container">
          <div className="row">
            <div className="offset-1 col-10">
              <h2 className="h2">Make a life not just a living</h2>
              <p className="p3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
                vero doloribus quis accusamus consequatur, voluptatem,
                reprehenderit pariatur libero qui expedita placeat? Officia,
                impedit libero. Rerum cumque assumenda ipsum molestias
                explicabo!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="Section Section--withPadding"
              style={{
                backgroundColor: '#FFF7F5'
              }}
            >
              <div className="row align-items-center">
                <div className="offset-1 col-5">
                  <h2 className="h3">
                    Space for the world’s largest companies
                  </h2>
                  <p className="p3">
                    The world’s most innovative companies are using WeWork to
                    think differently about workspace.
                  </p>
                </div>
                <div className="offset-1 col-4">
                  <div
                    className="Background--4by3"
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

      <div className="Section Section--withPadding">
        <div className="container">
          <div className="row">
            <div className="offset-1 col-10">
              <h2 className="h2">Space for the world’s largest companies</h2>
              <p className="p3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
                vero doloribus quis accusamus consequatur, voluptatem,
                reprehenderit pariatur libero qui expedita placeat? Officia,
                impedit libero. Rerum cumque assumenda ipsum molestias
                explicabo!
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
);
