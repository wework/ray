// import classNames from 'classnames/bind';
import clsx from 'clsx';
import React from 'react';
//import { Avatar } from '../Avatar';
import './List.scss';

interface IItem {
  header?: React.ReactNode;
  content?: React.ReactNode;
  icon?: React.ReactNode;
}

interface IProps extends React.HTMLProps<HTMLLIElement> {
  items: IItem[];
  selected?: boolean;
  listItemComponent?: React.ComponentType;
  onItemClick?(): void;
}

interface IListItem extends IItem {
  css: string;
}

export const ListItem: React.FC<IListItem> = ({
  css,
  header,
  content,
  icon,
  ...rest
}) => {
  const image = String(
    icon,
  ); /* this is temporary so we can show an icon  for testing purpose" */

  return (
    <li className={css} {...rest}>
      {/* {insert avatar image here} */}
      {/* {icon && <Avatar className="icon-block" image={image} size="small" />} */}
      <p className={'container'}>
        <span className="ray-list-item__header">{header}</span>
        <span className="ray-list-item__content">{content}</span>
      </p>
    </li>
  );
};

const styles = {
  selected: 'ray-list-item--selected',
};

const cx = clsx.bind(styles);

export const List: React.FC<IProps> = ({
  items,
  selected,
  onItemClick,
  listItemComponent = ListItem,
  ...rest
}) => {
  let listItems: React.ReactNode[];
  const Component = listItemComponent;

  listItems = items.map((item: IItem, index: number) => {
    return (
      <Component
        css={cx('ray-list-item', { selected })}
        key={index}
        header={item.header}
        content={item.content}
        icon={item.icon}
        onClick={onItemClick}
        {...rest}
      />
    );
  });
  return <ul>{listItems}</ul>;
};

List.defaultProps = {
  items: [],
  selected: false,
};

export default List;
