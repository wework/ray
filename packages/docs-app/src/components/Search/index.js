import React from 'react';
import { TextField } from '@wework/ray-core';

export default class Search extends React.Component {
  state = {
    error: null
  };

  componentDidMount() {
    if (typeof document !== `undefined`) {
      TextField.create(document.getElementById('docsearch_wrapper'));
    }

    if (
      typeof document === `undefined` ||
      typeof window.docsearch === `undefined`
    ) {
      // eslint-disable-next-line no-console
      console.warn(`Search has failed to load and now is being disabled`);
    } else {
      try {
        window.docsearch({
          apiKey: `20ea705293844d98a4268ae2f85bace6`,
          indexName: `wework-ray`,
          inputSelector: `#docsearch`,
          // set this to true if you need to debug css
          debug: false
        });
      } catch (error) {
        this.setState({ error });
      }
    }
  }

  render() {
    if (this.state.error) {
      return null;
    }

    return (
      <div
        className="ray-text-field ray-text-field--compact ray-text-field--with-icon-start"
        id="docsearch_wrapper"
      >
        <svg
          className="ray-text-field__icon--start"
          width="19px"
          height="19px"
          viewBox="0 0 19 19"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Desktop-HD"
              transform="translate(-533.000000, -235.000000)"
              stroke="#b3b3b3"
              strokeWidth="2"
            >
              <circle id="Oval-125" cx="540" cy="242" r="6" />
              <path
                d="M544.5,246.5 L550.02268,252.02268"
                id="Line"
                strokeLinecap="square"
              />
            </g>
          </g>
        </svg>

        <input
          className="ray-text-field__input"
          type="text"
          id="docsearch"
          name="docsearch"
          placeholder="Start typing..."
        />
        <label className="ray-text-field__label" htmlFor="docsearch">
          Search
        </label>
      </div>
    );
  }
}
