import React from 'react';
import { storiesOf } from '@storybook/react';

import withPadding from './util/withPadding';

storiesOf('Card', module)
  .addWithJSX('card, link, image on top', () =>
    withPadding(
      <a
        href="https://wework.com"
        target="_blank"
        rel="noopener noreferrer"
        className="ray-card ray-card--link"
        style={{
          maxWidth: '480px'
        }}
      >
        <div className="ray-card__image ray-image ray-image--16by9">
          <img src="https://source.unsplash.com/random/800x450?minimalist" />
        </div>

        <div className="ray-card__content">
          <h2 className="ray-h6">Nicolas Boer 399</h2>
          <p className="ray-copy5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            atque minima itaque sint! Doloremque odio quia saepe.
          </p>
        </div>
      </a>
    )
  )
  .addWithJSX('card, link, image on bottom', () =>
    withPadding(
      <a
        href="https://wework.com"
        target="_blank"
        rel="noopener noreferrer"
        className="ray-card ray-card--link"
        style={{
          maxWidth: '480px'
        }}
      >
        <div className="ray-card__content">
          <h2 className="ray-h6">Nicolas Boer 399</h2>
          <p className="ray-copy5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            atque minima itaque sint! Doloremque odio quia saepe.
          </p>
        </div>

        <div className="ray-card__image ray-image ray-image--16by9">
          <img src="https://source.unsplash.com/random/800x450?minimalist" />
        </div>
      </a>
    )
  )
  .addWithJSX('card, link, no image', () =>
    withPadding(
      <a
        href="https://wework.com"
        target="_blank"
        rel="noopener noreferrer"
        className="ray-card ray-card--link"
        style={{
          maxWidth: '480px'
        }}
      >
        <div className="ray-card__content">
          <h2 className="ray-h6">Nicolas Boer 399</h2>
          <p className="ray-copy5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            atque minima itaque sint! Doloremque odio quia saepe.
          </p>
        </div>
      </a>
    )
  )
  .addWithJSX('card, image on top, with buttons', () =>
    withPadding(
      <div
        className="ray-card"
        style={{
          maxWidth: '480px'
        }}
      >
        <div className="ray-card__image ray-image ray-image--16by9">
          <img src="https://source.unsplash.com/random/800x450?minimalist" />
        </div>

        <div className="ray-card__content">
          <h2 className="ray-h6">Nicolas Boer 399</h2>
          <p className="ray-copy5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            atque minima itaque sint! Doloremque odio quia saepe.
          </p>
          <button className="ray-btn ray-btn--primary ray-btn--compact">
            Sign Up Now
          </button>
          <button className="ray-btn ray-btn--secondary ray-btn--compact">
            Learn More
          </button>
          <button className="ray-btn ray-btn--tertiary ray-btn--compact">
            Share
          </button>
        </div>
      </div>
    )
  )
  .addWithJSX('card, tertiary button', () =>
    withPadding(
      <div
        className="ray-card"
        style={{
          maxWidth: '480px'
        }}
      >
        <div className="ray-card__content">
          <h2 className="ray-h6">Nicolas Boer 399</h2>
          <p className="ray-copy5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            atque minima itaque sint! Doloremque odio quia saepe.
          </p>
          <button className="ray-btn ray-btn--tertiary ray-btn--pull-left ray-btn--compact">
            Share
          </button>
        </div>
      </div>
    )
  );
