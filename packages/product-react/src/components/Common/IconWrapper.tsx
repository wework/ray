import React from 'react';

// This is only needed when we have a prepended icon for wrapping the icon
const IconWrapper: React.FC<{ renderWrapper?: boolean }> = ({
  children,
  renderWrapper
}) =>
  renderWrapper && children ? (
    <div className="ray-text-field__prepend">{children}</div>
  ) : (
    <>{children}</>
  );

export default IconWrapper;
