import clsx from 'clsx';
import React from 'react';

export interface ITypeProps {
  Tag?: keyof React.ReactHTML;
  style:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body'
    | 'body-large'
    | 'body-small'
    | 'body-x-small'
    | 'display-1'
    | 'display-2';
  className?: string;
  children?: React.ReactNode;
}

export const Type: React.FC<ITypeProps> = ({
  Tag,
  style,
  className,
  children,
  ...rest
}) => {
  const classes = clsx(className, `ray-text--${style}`);
  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
};

const defaultProps = {
  Tag: 'div',
  style: 'body'
};

export default Type;
