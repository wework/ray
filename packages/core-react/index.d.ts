import React from 'react';

export type TextFieldProps = {
  error?: boolean;
  success?: boolean;
  compact?: boolean;
} & React.HTMLProps<HTMLInputElement>;

declare const TextField: React.FC<TextFieldProps>;

export type CardProps = {
  body?: React.ReactNode;
  className?: string;
  heading?: React.ReactNode;
  img?: React.ReactNode;
  row?: boolean;
};

declare const Card: React.FC<CardProps>;

export type RadioProps = {
  className?: string;
  id?: string;
  label?: React.ReactNode;
  name?: string;
} & React.HTMLProps<HTMLInputElement>;

declare const Radio: React.FC<RadioProps>;

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

export type TextAreaProps = {
  id?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  compact?: boolean;
  value?: string;
  error?: string;
  label?: React.ReactNode;
  className?: string;
} & React.HTMLProps<HTMLTextAreaElement>;

declare const TextArea: React.FC<TextAreaProps>;

export type CheckboxProps = {
  className?: string;
  id?: string;
  label?: React.ReactNode;
  name?: string;
} & React.HTMLProps<HTMLInputElement>;

declare const Checkbox: React.FC<CheckboxProps>;

declare type IconPositions = 'iconstart' | 'iconend';

export type SelectProps = {
  className?: string;
  id?: string;
  name?: string;
  label?: React.ReactNode;
  compact?: boolean;
  disabled?: boolean;
  placeholder?: string;
  prepend?: boolean,
  icon?: React.ReactNode,
  error?:boolean,
  active?:boolean,
  iconPosition?: IconPositions;
  children?: React.ReactNode;
} & React.HTMLProps<HTMLSelectElement>;

declare const Select: React.FC<SelectProps>;

export type ImageProps = {
  className?: string;
  src: string;
  aspect: '16by9' | '1by1' | '3by4' | '4by3' | 'cinema';
  bg?: boolean;
} & React.HTMLProps<HTMLImageElement>;

declare const Image: React.FC<ImageProps>;

export type IconProps = {
  prepend?: boolean;
  icon: React.ReactNode;
} & React.HTMLProps<HTMLImageElement>;

declare const Icon: React.FC<IconProps>;

export {
  Button,
  Card,
  Checkbox,
  Container,
  Grid,
  Image,
  Radio,
  Select,
  TextArea,
  TextField
};
