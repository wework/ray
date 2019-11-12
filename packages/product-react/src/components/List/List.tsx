import clsx from 'clsx';
import React from 'react';
import { Avatar } from '../Avatar';
import './List.scss';

export interface IItems {
  header?: React.ReactNode;
  content?: React.ReactNode;
  icon?: React.ReactNode;
}

export interface IListProps extends React.HTMLProps<HTMLLIElement> {
  items: IItems[];
  listItemComponent?: any;
  onClick?(event: React.MouseEvent<HTMLLIElement>): void;
}

const ListItem: React.FC<IListProps> = ({ items, className, ...rest }) => {
  let listItems: React.ReactNode[];
  listItems = items.map((item: IItems, index: number) => {
    return (
      <li className={className} {...rest} key={index}>
        {item.icon && (
          <Avatar
            className="icon-block"
            image={String(item.icon)}
            size="medium"
          />
        )}
        <p className={'container'}>
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
