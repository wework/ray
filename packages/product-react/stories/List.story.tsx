import { storiesOf } from '@storybook/react';
import React from 'react';
import { List } from '../src/components/List/List';

const fauxAvatarImage =
  'https://pbs.twimg.com/profile_images/624249118114881536/qxn_I_oR_400x400.jpg';

storiesOf('Core Comps | List', module)
  .add('default', () => {
    return <List items={[{ header: '', content: '' }]} />;
  })
  .add('ListItem with icon', () => {
    return (
      <List
        items={[
          {
            header: 'Sammy Lawson',
            content: 'Product Designer',
            icon: fauxAvatarImage,
          },
          {
            header: 'Arnold Schwarzenegger',
            content: 'Product Designer',
            icon: fauxAvatarImage,
          },
          {
            header: 'Michael Jordan',
            content: 'Product Designer',
            icon: fauxAvatarImage,
          },
        ]}
      />
    );
  })
  .add('List without icon', () => {
    return (
      <List
        items={[
          {
            header: 'Sammy Lawson',
            content: 'Product Designer',
          },
          {
            header: 'Arnold Schwarzenegger',
            content: 'Product Designer',
          },
          {
            header: 'Michael Jordan',
            content: 'Product Designer',
          },
        ]}
      />
    );
  })
  .add('List without items', () => {
    return <List items={[]} />;
  });
