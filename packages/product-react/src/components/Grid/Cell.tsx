import clsx from 'clsx';
import React, { ReactHTML, ReactNode } from 'react';

export type CellProps = {
  align?: 'top' | 'middle' | 'bottom';
  as: keyof ReactHTML;
  children?: ReactNode;
  className?: string;
  device?: 'desktop' | 'tablet' | 'phone';
  full?: boolean;
  justify?: 'top' | 'middle' | 'bottom';
  pushColumn?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
} & typeof defaultProps;

const cellSpanClass = (span?: number, device?: string) => {
  if (span && device) {
    return 'ray-grid__cell--span-' + span + '-' + device;
  } else if (span && !device) {
    return 'ray-grid__cell--span-' + span;
  } else {
    return null;
  }
};

const cellAlignClass = (align?: string) => {
  if (align) {
    return 'ray-grid__cell--align-' + align;
  } else {
    return null;
  }
};

const cellPushClass = (pushColumn?: number, device?: string) => {
  if (pushColumn && device) {
    return 'ray-grid__cell--push-' + pushColumn + '-' + device;
  } else if (pushColumn && !device) {
    return 'ray-grid__cell--push-' + pushColumn;
  } else {
    return null;
  }
};

export const Cell = ({
  align,
  as: ComponentType,
  children,
  className,
  device,
  full,
  pushColumn,
  span,
  ...rest
}: CellProps) => (
  <ComponentType
    className={clsx(
      'ray-grid__cell',
      { 'ray-grid__cell--span-full': full },
      cellSpanClass(span, device),
      cellAlignClass(align),
      cellPushClass(pushColumn, device),
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

Cell.defaultProps = defaultProps;

export default Cell;