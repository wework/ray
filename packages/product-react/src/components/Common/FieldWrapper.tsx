import React from 'react';

// This is only needed when we have a prepended icon for wrapping the text field
const FieldWrapper: React.FC<{
  renderWrapper?: boolean;
  fieldClass?: string;
}> = ({ children, renderWrapper, fieldClass }) =>
  renderWrapper ? (
    <div
      className={fieldClass}
      // className="ray-select-field__wrapper"
    >
      {children}
    </div>
  ) : (
    <>{children}</>
  );

export default FieldWrapper;
