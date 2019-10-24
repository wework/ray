import clsx from 'clsx';
import React, { FC, CSSProperties } from 'react';
import RTLWrapper from '../Common/RTLWrapper';
import './Card.scss';

const LinkWrapper: React.FC<{ props?: ILink }> = ({ children, props }) =>
  props ? <a {...props}>{children}</a> : <>{children}</>;

export interface ILink extends React.HTMLProps<HTMLAnchorElement> {
  download?: any;
  href?: string;
  hrefLang?: string;
  media?: string;
  rel?: string;
  target?: string;
  type?: string;
  style?: CSSProperties;
  className?: string;
}

export interface ICardProps extends React.HTMLProps<HTMLDivElement> {
  image?: React.ReactNode;
  header?: string;
  content?: string;
  row?: boolean;
  compact?: boolean;
  inactive?: boolean;
  rtl?: boolean;
  linkProps?: ILink;
}

export const Card: FC<ICardProps> = ({
  image,
  header,
  content,
  row,
  compact,
  inactive,
  children,
  className,
  rtl,
  linkProps,
  ...rest
}) => {
   return (
     <LinkWrapper props={linkProps}>
      <RTLWrapper renderWrapper={rtl}>
        <div
          className={clsx(
            'ray-card',
            {
              'ray-card--row': row,
              'ray-card--compact': compact,
              'ray-card--inactive': inactive
            },
            className
          )}
          {...rest}
        >
          {image && (
            <div className="ray-card__image ray-image ray-image--16by9">
              {image}
            </div>
          )}
          <div
            className={clsx(
              'ray-card__content',
              { 'ray-card--compact': compact },
              className
            )}
          >
            {header && <div className="ray-card__heading">{header}</div>}
            {content && <div>{content}</div>}
            {children && <div>{children}</div>}
          </div>
        </div>
      </RTLWrapper>
     </LinkWrapper>
  );
};

Card.defaultProps = {
  image: '',
  header: '',
  content: '',
  row: false,
  compact: false,
  inactive: false,
  rtl: false
};

export default Card;
