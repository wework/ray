import React from 'react';
import clsx from 'clsx';

export interface IRadio extends React.HTMLProps<HTMLInputElement> {
  className?: string;
  id: string;
  label?: string;
  name?: string;
  pill?: boolean;
}

export const Radio: React.FC<IRadio> = ({
  className,
  id,
  name,
  label,
  pill,
  ...rest
}) => {
  const wrapperClass = clsx(
    {
      'ray-radio': !pill,
      'ray-radio-pill': pill
    },
    className
  );

  return (
    <div className={wrapperClass}>
      <input
        className={pill ? 'ray-radio-pill__input' : 'ray-radio__input'}
        type="radio"
        id={id}
        name={name}
        {...rest}
      />
      <label
        className={pill ? 'ray-radio-pill__label' : 'ray-radio__label'}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};
Radio.defaultProps = {
  pill: false
};
export default Radio;
