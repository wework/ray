import React from 'react';

export type TextFieldProps = {
  error?: boolean;
  success?: boolean;
  compact?: boolean;
} & React.HTMLProps<HTMLInputElement>;

declare const TextField: React.FC<TextFieldProps>;

export type RadioProps = {
  className?: string,
  id: string,
  label?: React.ReactNode
  name?: string,
} & React.HTMLProps<HTMLInputElement>;

declare const Radio: React.FC<RadioProps>;

export { TextField, Radio };
