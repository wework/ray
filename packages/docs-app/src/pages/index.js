import React from 'react';

import '../polyfills';

class Homepage extends React.Component {
  render() {
    return (
      <div className="ray-page-container">
        <div
          className="ray-grid"
          style={{
            minHeight: '100vh',
            alignItems: 'center'
          }}
        >
          <div className="ray-grid__cell--span-full ray-grid__cell--push-1">
            <div className="ray-text--h1" style={{ marginBottom: '0.5rem' }}>
              Ray
              <br />
              Design
              <span
                className="ray-text--body-small ray-text--monospace"
                style={{
                  marginLeft: '1rem',
                  marginBottom: '1rem',
                  opacity: 0.7
                }}
              >
                by WeWork
              </span>
            </div>

            <div
              className="ray-text--body-large"
              style={{
                marginBottom: '2rem',
                opacity: 0.7
              }}
            >
              Resources for building user interfaces
              <br />
              with the WeWork design language.
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <a
                href="/getting-started"
                className="ray-button ray-button--primary"
              >
                Docs
              </a>
              <a
                href="https://github.com/wework/ray"
                className="ray-button ray-button--secondary"
              >
                GitHub
              </a>
              <a
                href="https://www.npmjs.com/package/@wework/ray-core"
                className="ray-button ray-button--tertiary ray-text--monospace"
              >
                yarn add @wework/ray-core
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
