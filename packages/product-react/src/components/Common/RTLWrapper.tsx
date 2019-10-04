import React from 'react';

const RTLWrapper: React.FC<{ renderWrapper?: boolean }> = ({
  children,
  renderWrapper
}) => (renderWrapper ? <div dir="rtl">{children}</div> : <>{children}</>);

export default RTLWrapper;
