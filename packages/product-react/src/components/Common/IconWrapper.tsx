import React from 'react';

const IconWrapper: React.FC<{
  renderWrapper?: boolean;
  iconClass?: string;
}> = ({ children, renderWrapper, iconClass }) =>
  renderWrapper && children ? (
    <div className={iconClass}>{children}</div>
  ) : (
    <>{children}</>
  );

export default IconWrapper;
