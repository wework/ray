import clsx from 'clsx';
import React, { ReactHTML, ReactNode } from 'react';
import Cell from './Cell';

type GridProps = {
  as?: keyof ReactHTML;
  children?: ReactNode;
  className?: string;
} & typeof defaultProps;

export const Grid = ({
  as: ComponentType,
  children,
  className,
  ...rest
}: GridProps) => {
  return (
    <ComponentType className={clsx('ray-grid', className)} {...rest}>
      {children}
    </ComponentType>
  );
};

const defaultProps = {
  as: 'div',
};

Grid.defaultProps = defaultProps;
Grid.Cell = Cell;
