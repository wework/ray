import React from 'react';

const FieldWrapper: React.FC<{
  renderWrapper?: boolean;
  fieldClass?: string;
}> = ({ children, renderWrapper, fieldClass }) =>
  renderWrapper ? (
    <div className={fieldClass}>{children}</div>
  ) : (
    <>{children}</>
  );

export default FieldWrapper;
