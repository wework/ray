import React from 'react';
import PropTypes from 'prop-types';
import SideNav from '../SideNav';
import Search from '../Search';
import HtmlBase from './html';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    location: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      navOpen: false
    };
  }

  toggleNav = () => {
    this.setState({
      navOpen: !this.state.navOpen
    });
  };

  render() {
    const { children } = this.props;

    return (
      <HtmlBase>
        <div className="page">
          <div className="ray-page-container">
            <div className="ray-grid">
              <div className="ray-grid__cell--span-3">
                <SideNav
                  location={this.props.location}
                  clickToClose={this.clickToClose}
                  open={this.state.navOpen}
                  toggleNav={this.toggleNav}
                />
              </div>

              <div className="ray-grid__cell ray-grid__cell--span-8-tablet ray-grid__cell--span-9-desktop">
                <div
                  className="ray-page-container"
                  style={{ marginTop: '1.5rem' }}
                >
                  <Search />
                </div>
                <main className="main-content">{children}</main>
              </div>
            </div>
          </div>
        </div>
      </HtmlBase>
    );
  }
}

export default Layout;
