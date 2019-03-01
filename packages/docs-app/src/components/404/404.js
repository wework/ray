import React from 'react';
import ditto from '../../content/404/images/ditto.png';

class FourOhFour extends React.Component {
  render() {
    return (
      <div className="page-container fourohfour-container">
        <img
          src={ditto}
          alt="Ditto paradise"
          style={{
            maxWidth: '400px',
            borderRadius: '4px'
          }}
        />
        <h1 className="ray-h4">404</h1>
      </div>
    );
  }
}

export default FourOhFour;
