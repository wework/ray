import React from 'react';
import { storiesOf } from '@storybook/react';

import getPlaceholderURL from './util/placeholder';

storiesOf('Card', module)
  .add('card, link, image on top', () => (
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
        <img src={getPlaceholderURL('800x450')} />
      </div>

      <div className="ray-card__content">
        <h4 className="ray-text--h4">Nicolas Boer 399</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          atque minima itaque sint! Doloremque odio quia saepe.
        </p>
      </div>
    </a>
  ))
  .add('card, link, image on bottom', () => (
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
        <h4 className="ray-text--h4">Nicolas Boer 399</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          atque minima itaque sint! Doloremque odio quia saepe.
        </p>
      </div>

      <div className="ray-card__image ray-image ray-image--16by9">
        <img src={getPlaceholderURL('800x450')} />
      </div>
    </a>
  ))
  .add('card, link, no image', () => (
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
        <h4 className="ray-text--h4">Nicolas Boer 399</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          atque minima itaque sint! Doloremque odio quia saepe.
        </p>
      </div>
    </a>
  ))
  .add('card, image on top, with buttons', () => (
    <div
      className="ray-card"
      style={{
        maxWidth: '480px'
      }}
    >
      <div className="ray-card__image ray-image ray-image--16by9">
        <img src={getPlaceholderURL('800x450')} />
      </div>

      <div className="ray-card__content">
        <h4 className="ray-text--h4">Nicolas Boer 399</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          atque minima itaque sint! Doloremque odio quia saepe.
        </p>
        <button className="ray-button ray-button--primary ray-button--compact">
          Sign Up Now
        </button>
        <button className="ray-button ray-button--secondary ray-button--compact">
          Learn More
        </button>
        <button className="ray-button ray-button--tertiary ray-button--compact">
          Share
        </button>
      </div>
    </div>
  ))
  .add('card, tertiary button', () => (
    <div
      className="ray-card"
      style={{
        maxWidth: '480px'
      }}
    >
      <div className="ray-card__content">
        <h4 className="ray-text--h4">Nicolas Boer 399</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          atque minima itaque sint! Doloremque odio quia saepe.
        </p>
        <button className="ray-button ray-button--tertiary ray-button--pull-left ray-button--compact">
          Share
        </button>
      </div>
    </div>
  ));
