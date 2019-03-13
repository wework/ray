import React from 'react';
import { storiesOf } from '@storybook/react';

import getPlaceholderURL from './util/placeholder';

storiesOf('Image', module)
  .add('16/9 img', () => (
    <div style={{ maxWidth: '500px' }}>
      <div className="ray-image ray-image--16by9">
        <img src={getPlaceholderURL('800x800')} />
      </div>
    </div>
  ))
  .add('3/4 img', () => (
    <div style={{ maxWidth: '400px' }}>
      <div className="ray-image ray-image--3by4">
        <img src={getPlaceholderURL('800x1200')} />
      </div>
    </div>
  ))
  .add('4/3 img', () => (
    <div style={{ maxWidth: '400px' }}>
      <div className="ray-image ray-image--4by3">
        <img src={getPlaceholderURL('1200x800')} />
      </div>
    </div>
  ))
  .add('16/9 background', () => (
    <div style={{ maxWidth: '500px' }}>
      <div
        className="ray-bg ray-bg--16by9"
        style={{
          backgroundImage: `url(${getPlaceholderURL('800x800')})`
        }}
      />
    </div>
  ))
  .add('3/4 background', () => (
    <div style={{ maxWidth: '400px' }}>
      <div
        className="ray-bg ray-bg--3by4"
        style={{
          backgroundImage: `url(${getPlaceholderURL('800x1200')})`
        }}
      />
    </div>
  ))
  .add('4/3 background', () => (
    <div style={{ maxWidth: '400px' }}>
      <div
        className="ray-bg ray-bg--4by3"
        style={{
          backgroundImage: `url(${getPlaceholderURL('1200x800')})`
        }}
      />
    </div>
  ))
  .add('img with caption', () => (
    <div style={{ maxWidth: '500px' }}>
      <div className="ray-image ray-image--16by9">
        <img src={getPlaceholderURL('800x800')} />
      </div>
      <div className="ray-caption">
        12pt apercu mono caption relating to this image
      </div>
    </div>
  ))
  .add('img with long caption', () => (
    <div style={{ maxWidth: '500px' }}>
      <div className="ray-image ray-image--16by9">
        <img src={getPlaceholderURL('800x800')} />
      </div>
      <div className="ray-caption">
        12pt apercu mono caption relating to this image but the caption is
        longer than something ideal and maybe it has for some reason scaled
      </div>
    </div>
  ))
  .add('bg with caption', () => (
    <div style={{ maxWidth: '400px' }}>
      <div
        className="ray-bg ray-bg--3by4"
        style={{
          backgroundImage: `url(${getPlaceholderURL('800x1200')})`
        }}
      />
      <div className="ray-caption">
        12pt apercu mono caption relating to this image but the caption is
        longer than something ideal and maybe it has for some reason scaled
      </div>
    </div>
  ));
