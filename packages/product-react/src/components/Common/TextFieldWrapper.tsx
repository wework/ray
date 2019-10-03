import React from 'react';

// This is only needed when we have a prepended icon for wrapping the text field
const TextFieldWrapper: React.FC<{ renderWrapper?: boolean }> = ({
  children,
  renderWrapper
}) =>
  renderWrapper ? (
    <div className="ray-text-field__wrapper">{children}</div>
  ) : (
    <>{children}</>
  );

export default TextFieldWrapper;
