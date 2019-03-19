import React from 'react';
import { TextField } from '@wework/ray-core';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const icons = require('@wework/ray-icons/.out/icons.json');

const GITHUB_SOURCE_URL =
  'https://github.com/WeConnect/ray/blob/master/packages/icons/';

/* eslint-disable no-script-url */
class DocsIcons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  componentDidMount() {
    this.search = TextField.create(document.querySelector('#ray-icon-search'));
  }

  componentWillUnmount() {
    this.search.destroy();
  }

  render() {
    const filteredIcons = icons.filter(icon => icon.includes(this.state.query));
    const iconsToRender = filteredIcons.slice(0, 50);

    return (
      <>
        <div className="ray-form-item">
          <div
            className="ray-text-field ray-text-field--with-icon-left"
            id="ray-icon-search"
          >
            <div className="ray-text-field__icon--left">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                <title>search-a</title>
                <g id="budicon-search-a">
                  <path
                    className="cls-1"
                    d="M13.8033,3.1968a7.4626,7.4626,0,0,0-2.9982-1.8322,7.5725,7.5725,0,0,1,.9982.8322A7.4981,7.4981,0,0,1,4.195,14.6354,7.4973,7.4973,0,0,0,13.8033,3.1968Z"
                  />
                  <path
                    className="cls-2"
                    d="M23.5607,21.4395l-4.95-4.95a1.4489,1.4489,0,0,0-1.6963-.2822l-2.0684-2.0684a8.5288,8.5288,0,1,0-.7073.707l2.0685,2.0684a1.488,1.488,0,0,0,.2821,1.6963l4.95,4.95a1.5,1.5,0,0,0,2.1213-2.1211ZM8.5,16A7.5,7.5,0,0,1,3.1968,3.1968,7.5,7.5,0,0,1,13.8033,13.8032,7.4513,7.4513,0,0,1,8.5,16Zm14.3535,6.8535a.5.5,0,0,1-.707,0l-4.95-4.95a.5.5,0,1,1,.7072-.707l4.95,4.95a.5.5,0,0,1,0,.707Z"
                  />
                </g>
              </svg>
            </div>
            <input
              type="text"
              className="ray-text-field__input"
              placeholder="smart-watch-smile"
              id="search"
              onChange={event => this.setState({ query: event.target.value })}
            />
            <label className="ray-text-field__label" htmlFor="search">
              Search for an icon
            </label>
          </div>
        </div>

        <div className="ray-caption">
          total results: {filteredIcons.length} &nbsp;–&nbsp; showing:{' '}
          {iconsToRender.length}
        </div>

        <table className="ray-table">
          <thead>
            <tr>
              <th>icon</th>
              <th>name</th>
              <th>path</th>
              <th>download</th>
            </tr>
          </thead>
          <tbody>
            {iconsToRender.map(iconRelativePath => {
              const iconSVG = require(`@wework/ray-icons/${iconRelativePath}`); // eslint-disable-line global-require, import/no-dynamic-require
              const caption = iconRelativePath
                .split('/')
                .pop()
                .replace('.svg', '');

              return (
                <tr className="docs-icons__icon" key={iconRelativePath}>
                  <td className="docs-icons__img-wrapper">
                    <img src={iconSVG} alt={iconRelativePath} />
                  </td>
                  <td>{caption}</td>
                  <td>
                    <CopyToClipboard
                      text={`@wework/ray-icons/${iconRelativePath}`}
                    >
                      <a href="javascript:;">Copy import path</a>
                    </CopyToClipboard>
                  </td>
                  <td>
                    <a href={`${GITHUB_SOURCE_URL}${iconRelativePath}`}>
                      Download SVG
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default DocsIcons;
