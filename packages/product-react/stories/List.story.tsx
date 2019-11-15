import { storiesOf } from '@storybook/react';
import React from 'react';
import { List, IListProps, IItems } from '../src/components/List/List';
import { Checkbox } from '../src/components/Checkbox';
import '../src/components/List/List.scss';

const customListItem: React.FC<IListProps> = ({
  items,
  className,
  ...rest
}) => {
  let listItems: React.ReactNode[];
  listItems = items.map((item: IItems, index: number) => {
    return (
      <span>
        <p>
          <Checkbox id="1" style={{ display: 'inline-block' }} />
        </p>
        <p
          style={{
            marginLeft: '38px',
            marginBottom: '17px',
            marginTop: '-12px'
          }}
        >
          <span className="ray-list-item__header">{item.header}</span>
          <span className="ray-list-item__content">{item.content}</span>
        </p>
      </span>
    );
  });
  return <ul>{listItems}</ul>;
};

const fauxAvatarImage =
  'https://pbs.twimg.com/profile_images/624249118114881536/qxn_I_oR_400x400.jpg';

const fauxBrokenAvatarImage =
  'https://pbs.twimg.com3333/profile_images/624249118114881536/qxn_I_oR_400x400.jpg';

storiesOf('Core Comps | List', module)
  .add('default', () => {
    return <List items={[{ header: '', content: '' }]} />;
  })
  .add('ListItem with icon', () => {
    return (
      <List
        showAvatar={true}
        items={[
          {
            header: 'Sammy Lawson',
            content: 'Product Designer',
            icon: fauxAvatarImage
          },
          {
            header: 'Arnold Schwarzenegger',
            content: 'Product Designer',
            icon: fauxAvatarImage
          },
          {
            header: 'Michael Jordan',
            content: 'Product Designer',
            icon: fauxAvatarImage
          }
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
            content: 'Product Designer'
          },
          {
            header: 'Arnold Schwarzenegger',
            content: 'Product Designer'
          },
          {
            header: 'Michael Jordan',
            content: 'Product Designer'
          }
        ]}
      />
    );
  })
  .add('List without items', () => {
    return <List items={[]} />;
  })
  .add('List without custom list checkboxes', () => {
    return (
      <List
        listItemComponent={customListItem}
        items={[
          {
            header: 'Sammy Lawson',
            content: 'Product Designer',
            icon: fauxAvatarImage
          },
          {
            header: 'Arnold Schwarzenegger',
            content: 'Product Designer',
            icon: fauxAvatarImage
          },
          {
            header: 'Michael Jordan',
            content: 'Product Designer',
            icon: fauxAvatarImage
          }
        ]}
      />
    );
  })
  .add('ListItem with empty icons', () => {
    return (
      <List
        showAvatar={true}
        items={[
          {
            header: 'Sammy Lawson',
            content: 'Product Designer',
            icon: ''
          },
          {
            header: 'Arnold Schwarzenegger',
            content: 'Product Designer',
            icon: fauxAvatarImage
          },
          {
            header: 'Michael Jordan',
            content: 'Product Designer',
            icon: ''
          }
        ]}
      />
    );
  })
  .add('ListItem with broken icons', () => {
    return (
      <List
        showAvatar={true}
        items={[
          {
            header: 'Sammy Lawson',
            content: 'Product Designer',
            icon: fauxBrokenAvatarImage
          },
          {
            header: 'Arnold Schwarzenegger',
            content: 'Product Designer',
            icon: fauxAvatarImage
          },
          {
            header: 'Michael Jordan',
            content: 'Product Designer',
            icon: fauxBrokenAvatarImage
          }
        ]}
      />
    );
  });
