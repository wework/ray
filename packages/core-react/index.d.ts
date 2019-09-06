import React from 'react';

export type TextFieldProps = {
  error?: boolean;
  success?: boolean;
  compact?: boolean;
} & React.HTMLProps<HTMLInputElement>;

declare const TextField: React.FC<TextFieldProps>;

export type ContainerProps = {
  Tag?: React.ElementType<any>;
} & React.HTMLProps<HTMLElement>;

declare const Container: React.FC<ContainerProps>;

export type GridProps = React.HTMLProps<HTMLElement>;

declare const Grid: React.FC<GridProps>;

export type CellProps = {
  push?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
} & React.HTMLProps<HTMLElement>;

declare const Cell: React.FC<CellProps>;

export type ButtonProps = {
  Tag?: 'button' | 'a';
  children?: React.ReactNode;
  type?: 'primary' | 'secondary' | 'tertiary';
  compact?: boolean;
  danger?: boolean;
  disabled?: boolean;
  className?: string;
} & React.HTMLProps<HTMLButtonElement>;

declare const Button: React.FC<ButtonProps>;

export type CheckboxProps = {
  className?: string,
  id?: string,
  label?: React.ReactNode
  name?: string,
} & React.HTMLProps<HTMLInputElement>;

declare const Checkbox: React.FC<CheckboxProps>;

export { 
  Button, 
  Container, 
  Grid, 
  TextField, 
  Checkbox
};
