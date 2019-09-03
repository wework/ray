import React from 'react';

export type TextFieldProps = {
  error?: boolean;
  success?: boolean;
  compact?: boolean;
} & React.HTMLProps<HTMLInputElement>;

declare const TextField: React.FC<TextFieldProps>;

export { TextField };

export type CardProps = {
  body?: React.ReactNode,
  className?: string,
  heading?: React.ReactNode,
  img?: React.ReactNode,
  row?: boolean,
};

declare const Card: React.FC<CardProps>;

export { TextField, Card };
