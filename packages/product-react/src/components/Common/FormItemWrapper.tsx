import React from 'react';

// This is when the input is a form item or has a hint
const FormItemWrapper: React.FC<{ renderWrapper?: boolean }> = ({
  children,
  renderWrapper
}) =>
  renderWrapper ? (
    <div className="ray-form-item">{children}</div>
  ) : (
    <>{children}</>
  );

export default FormItemWrapper;
