import React from 'react';

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
