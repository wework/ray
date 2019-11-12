import clsx from 'clsx';
import React, { ReactHTML, ReactNode } from 'react';

export enum ContainerAlign {
  LEFT = 'left',
  RIGHT = 'right',
}

export enum ContainerJustify {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

export type ContainerProps = {
  align?: ContainerAlign;
  as?: keyof ReactHTML;
  center?: any;
  children?: ReactNode;
  className?: string;
  debug?: boolean;
  fixed?: boolean;
  justify?: ContainerJustify;
} & typeof defaultProps;

const containerJustifyClass = (justify?: ContainerJustify) => {
  switch (justify) {
    case ContainerJustify.LEFT:
      return 'ray-page-container—justify-left';
    case ContainerJustify.CENTER:
      return 'ray-page-container—justify-center';
    case ContainerJustify.RIGHT:
      return 'ray-page-container—justify-right';
    default:
      return '';
  }
};

const containerAlignClass = (align?: ContainerAlign) => {
  switch (align) {
    case ContainerAlign.LEFT:
      return 'ray-page-container—align-left';
    case ContainerAlign.RIGHT:
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

Container.ContainerAlign = ContainerAlign;
Container.ContainerJustify = ContainerJustify;

const defaultProps = {
  as: 'div',
};

Container.defaultProps = defaultProps;

