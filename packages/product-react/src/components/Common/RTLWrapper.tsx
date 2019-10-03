import React from 'react';

// This is needed to support rtl
const RTLWrapper: React.FC<{ renderWrapper?: boolean }> = ({
    children,
    renderWrapper,
}) => (renderWrapper ? <div dir="rtl">{children}</div> : <>{children}</>);

export default RTLWrapper;