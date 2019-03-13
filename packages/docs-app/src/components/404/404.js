import React from 'react';

class FourOhFour extends React.Component {
  render() {
    return (
      <div className="page-container fourohfour-container">
        <div style={{ maxWidth: '300px', width: '100%' }}>
          <div
            className="ray-bg ray-bg--16by9"
            style={{
              backgroundImage: `url(https://media.giphy.com/media/l1J9EdzfOSgfyueLm/giphy.gif)`
            }}
          />

          <div className="ray-caption">404: Page not found</div>
        </div>
      </div>
    );
  }
}

export default FourOhFour;
