import clsx from 'clsx';
import React from 'react';
import { Avatar } from '../Avatar';
import './List.scss';

export interface IItems {
  header?: string;
  content?: string;
  icon?: string;
}

export interface IListProps extends React.HTMLProps<HTMLLIElement> {
  items: IItems[];
  listItemComponent?: any;
  showAvatar?: boolean;
  onClick?(event: React.MouseEvent<HTMLLIElement>): void;
}

const ListItem: React.FC<IListProps> = ({
  items,
  showAvatar,
  className,
  ...rest
}) => {
  let listItems: React.ReactNode[];
  listItems = items.map((item: IItems, index: number) => {
    return (
      <li className={className} {...rest} key={index}>
        {showAvatar && (
          <Avatar
            className="ray-list-item__icon-block"
            image={item.icon}
            size="medium"
            name={item.header}
          />
        )}
        <p className="ray-list-item__container">
          <span className="ray-list-item__header">{item.header}</span>
          <span className="ray-list-item__content">{item.content}</span>
        </p>
      </li>
    );
  });
  return <ul>{listItems}</ul>;
};

export const List: React.FC<IListProps> = ({
  items,
  selected,
  listItemComponent,
  className,
  ...rest
}) => {
  const Component = listItemComponent;
  const wrapperClass = clsx('ray-list-item', className);

  return <Component items={items} className={wrapperClass} {...rest} />;
};

List.defaultProps = {
  items: [],
  listItemComponent: ListItem
};

export default List;
