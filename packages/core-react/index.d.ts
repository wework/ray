import React from 'react';

export type TextFieldProps = {
  error?: boolean;
  success?: boolean;
  compact?: boolean;
} & React.HTMLProps<HTMLInputElement>;

declare const TextField: React.FC<TextFieldProps>;

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

export { TextField, Button };
