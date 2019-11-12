import clsx from 'clsx';
import React, { ReactHTML, ReactNode } from 'react';

export enum CellAlign {
  TOP = 'top',
  MIDDLE = 'middle',
  BOTTOM = 'bottom'
}

export enum CellDevice {
  DESKTOP = 'desktop',
  TABLET = 'tablet',
  PHONE = 'phone'
}

export enum CellJustify {
  TOP = 'top',
  MIDDLE = 'middle',
  BOTTOM = 'bottom'
}

export type CellProps = {
  align?: CellAlign;
  as: keyof ReactHTML;
  children?: ReactNode;
  className?: string;
  device?: CellDevice;
  full?: boolean;
  justify?: CellJustify;
  pushColumn?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
} & typeof defaultProps;

const cellSpanClass = (span?: number, device?: CellDevice) => {
  if (span && device) {
    return 'ray-grid__cell--span-' + span + '-' + device;
  } else if (span && !device) {
    return 'ray-grid__cell--span-' + span;
  } else {
    return null;
  }
};

const cellAlignClass = (align?: CellAlign) => {
  if (align) {
    return 'ray-grid__cell--align-' + align;
  } else {
    return null;
  }
};

const cellPushClass = (pushColumn?: number, device?: CellDevice) => {
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
      className
    )}
    {...rest}
  >
    {children}
  </ComponentType>
);

Cell.CellAlign = CellAlign;
Cell.CellDevice = CellDevice;
Cell.CellJustify = CellJustify;

const defaultProps = {
  as: 'div'
};

Cell.defaultProps = defaultProps;

export default Cell;
