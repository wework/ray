import clsx from 'clsx';
import React, { ReactHTML, ReactNode } from 'react';

export type ITypographyProps = {
    as?: keyof ReactHTML;
    children?: ReactNode;
    className?: string;
    style?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body'
    | 'body-large'
    | 'body-small'
    | 'body-x-small'
    | 'display-1'
    | 'display-2';
} & typeof defaultProps;

export const Typography = ({
    as: Tag,
    children,
    style,
    className,
    ...rest
}: ITypographyProps) => {
    const classes = clsx(className, `ray-text--${style}`);
    return (
        <Tag className={classes} {...rest}>
            {children}
        </Tag>
    );
};

const defaultProps = {
    as: 'div'
};

Typography.defaultProps = defaultProps;