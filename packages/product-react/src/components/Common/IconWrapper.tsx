import React from 'react';

// This is only needed when we have a prepended icon for wrapping the icon
const IconWrapper: React.FC<{ renderWrapper?: boolean ,iconClass?:string}> = ({
  children,
  renderWrapper,
  iconClass
}) =>
  renderWrapper && children ? (
    <div  className={iconClass}
    //className="ray-text-field__prepend"
    >{children}</div>
  ) : (
    <>{children}</>
  );

export default IconWrapper;
