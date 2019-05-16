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
        <img src={getPlaceholderURL('16x9')} />
      </div>

      <div className="ray-card__content">
        <div className="ray-card__heading">Better Together</div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem atque
        minima itaque sint! Doloremque odio quia saepe.
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
        <div className="ray-card__heading">Better Together</div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem atque
        minima itaque sint! Doloremque odio quia saepe.
      </div>

      <div className="ray-card__image ray-image ray-image--16by9">
        <img src={getPlaceholderURL('16x9')} />
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
        <div className="ray-card__heading">Better Together</div>
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
        <img src={getPlaceholderURL('16x9')} />
      </div>

      <div className="ray-card__content">
        <div className="ray-card__heading">Better Together</div>
        <p className="ray-text--body">
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
        <div className="ray-card__heading">Better Together</div>
        <p className="ray-text--body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          atque minima itaque sint! Doloremque odio quia saepe.
        </p>
        <button className="ray-link">Share</button>
      </div>
    </div>
  ))
  .add('card, as a row', () => (
    <div
      className="ray-card ray-card--row"
      style={{
        maxWidth: '480px'
      }}
    >
      <div className="ray-card__image ray-image ray-image--16by9">
        <img
          src="https://source.unsplash.com/random/800x450?minimalist"
          alt="card graphic"
        />
      </div>
      <div className="ray-card__content">
        <div className="ray-card__heading">Better Together</div>
        <p className="ray-text--body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          atque minima itaque sint! Doloremque odio quia saepe.
        </p>
      </div>
    </div>
  ));
