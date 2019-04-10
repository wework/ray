import React from 'react';
import { storiesOf } from '@storybook/react';

import getPlaceholderURL from './util/placeholder';

/* eslint-disable no-script-url */
storiesOf('Card', module)
  .add('card, with image on top', () => (
    <div
      className="ray-card"
      style={{
        maxWidth: '480px'
      }}
    >
      <div className="ray-card__image ray-image ray-image--16by9">
        <img src={getPlaceholderURL('16x9')} />
      </div>

      <div className="ray-card__content">
        <div className="ray-text--body-large">
          <a href="javascript:;">Better Together</a>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          atque minima itaque sint! Doloremque odio quia saepe.
        </p>
      </div>
    </div>
  ))
  .add('card, with image on bottom', () => (
    <div
      className="ray-card"
      style={{
        maxWidth: '480px'
      }}
    >
      <div className="ray-card__content">
        <div className="ray-text--body-large">
          <a href="javascript:;">Better Together</a>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          atque minima itaque sint! Doloremque odio quia saepe.
        </p>
      </div>

      <div className="ray-card__image ray-image ray-image--16by9">
        <img src={getPlaceholderURL('16x9')} />
      </div>
    </div>
  ))
  .add('card, no image', () => (
    <div
      href="https://wework.com"
      target="_blank"
      rel="noopener noreferrer"
      className="ray-card ray-card--link"
      style={{
        maxWidth: '480px'
      }}
    >
      <div className="ray-card__content">
        <div className="ray-text--body-large">
          <a href="javascript:;">Better Together</a>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          atque minima itaque sint! Doloremque odio quia saepe.
        </p>
      </div>
    </div>
  ))
  .add('card, image on top, with buttons', () => (
    <div
      className="ray-card"
      style={{
        maxWidth: '480px'
      }}
    >
      <div className="ray-card__image ray-image ray-image--16by9">
        <img src={getPlaceholderURL('16x9')} />
      </div>

      <div className="ray-card__content">
        <div className="ray-text--body-large">
          <a href="javascript:;">Better Together</a>
        </div>

        <p className="ray-text--body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          atque minima itaque sint! Doloremque odio quia saepe.
        </p>

        <button className="ray-button ray-button--primary ray-button--compact">
          Sign Up Now
        </button>
        <button className="ray-button ray-button--tertiary ray-button--compact">
          Share
        </button>
      </div>
    </div>
  ));
