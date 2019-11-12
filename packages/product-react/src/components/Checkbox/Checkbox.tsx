import clsx from 'clsx';
import React from 'react';

export interface ICheckboxProps extends React.HTMLProps<HTMLInputElement> {
  className?: string;
  id: string;
  label?: string;
  name?: string;
}

export const Checkbox: React.FC<ICheckboxProps> = ({
  className,
  id,
  name,
  label,
  ...rest
}) => {
  return (
    <div className={clsx('ray-checkbox', className)}>
      <input
        className="ray-checkbox__input"
        type="checkbox"
        id={id}
        name={name}
        {...rest}
      />
      <label className="ray-checkbox__label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
