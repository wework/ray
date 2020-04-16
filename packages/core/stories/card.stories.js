import React from 'react';
import { storiesOf } from '@storybook/react';

import getPlaceholderURL from './util/placeholder';
import settings from '../src/global/js/settings';

const viewports = Object.values(settings.breakpointsInPixels).filter(Boolean);

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
  .add('card, as a row, image on left', () => (
    <div className="ray-card ray-card--row">
      <div className="ray-card__image ray-image ray-image--16by9">
        <img src={getPlaceholderURL('16x9')} alt="card graphic" />
      </div>
      <div className="ray-card__content">
        <div className="ray-card__heading">Better Together</div>
        <p className="ray-text--body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          atque minima itaque sint! Doloremque odio quia saepe.
        </p>
      </div>
    </div>
  ))
  .add('card, as a row, image on right', () => (
    <div className="ray-card ray-card--row">
      <div className="ray-card__content">
        <div className="ray-card__heading">Better Together</div>
        <p className="ray-text--body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          atque minima itaque sint! Doloremque odio quia saepe.
        </p>
      </div>
      <div className="ray-card__image ray-image ray-image--16by9">
        <img src={getPlaceholderURL('16x9')} alt="card graphic" />
      </div>
    </div>
  ))
  .add('card, as a row, 4x3 image on left', () => (
    <div className="ray-card ray-card--row">
      <div className="ray-card__image ray-image ray-image--4by3">
        <img src={getPlaceholderURL('4x3')} alt="card graphic" />
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
