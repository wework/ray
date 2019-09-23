import clsx from 'clsx';
import React, { ReactHTML, ReactNode } from 'react';

export type ContainerProps = {
  align?: 'left' | 'right';
  as?: keyof ReactHTML;
  center?: any;
  children?: ReactNode;
  className?: string;
  debug?: boolean;
  fixed?: boolean;
  justify?: 'left' | 'center' | 'right';
} & typeof defaultProps;

const containerJustifyClass = (justify?: string) => {
  switch (justify) {
    case 'left':
      return 'ray-page-container—justify-left';
    case 'center':
      return 'ray-page-container—justify-center';
    case 'right':
      return 'ray-page-container—justify-right';
    default:
      return '';
  }
};

const containerAlignClass = (align?: string) => {
  switch (align) {
    case 'left':
      return 'ray-page-container—align-left';
    case 'right':
      return 'ray-page-container—align-right';
    default:
      return '';
  }
};

export const Container = ({
  align,
  as: ComponentType,
  children,
  className,
  debug,
  fixed,
  justify,
  ...rest
}: ContainerProps) => (
  <ComponentType
    className={clsx(
      'ray-page-container',
      { 'ray-page-container--debug': debug },
      { 'lucia-page-container-fixed-left': fixed },
      containerJustifyClass(justify),
      containerAlignClass(align),
      className,
    )}
    {...rest}
  >
    {children}
  </ComponentType>
);
const defaultProps = {
  as: 'div',
};

Container.defaultProps = defaultProps;

