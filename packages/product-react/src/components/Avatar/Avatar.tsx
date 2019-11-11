import clsx from 'clsx';
import React, { FC } from 'react';
import './Avatar.scss';
import { AvatarAddIcon, AvatarEditIcon } from './AvatarIcons';

export enum SizeVariations {
  small = 'small',
  medium = 'medium',
  large = 'large'
}

export interface AvatarProps {
  add?: boolean;
  alt?: string;
  edit?: boolean;
  name?: string;
  image?: string;
  size?: keyof typeof SizeVariations;
  className?: string;
  onAddImageClick?: (event?: React.SyntheticEvent<EventTarget>) => void;
}

export const Avatar: FC<AvatarProps> = ({
  add,
  alt,
  edit,
  image,
  name,
  size,
  onAddImageClick,
  className,
  ...rest
}) => {
  const wrapperClass = clsx(
    'lucia-avatar',
    {
      'lucia-avatar--small': size === 'small',
      'lucia-avatar--medium': size === 'medium',
      'lucia-avatar--large': size === 'large',
      'lucia-no-avatar': image === undefined
    },
    className
  );

  const getInitialFontSize = (size: any) => {
    switch (size) {
      case SizeVariations.small:
        return 'ray-text--body-x-small';
      case SizeVariations.large:
        return 'ray-text--body-large';
      default:
        return 'ray-text--body';
    }
  };

  const onAddImageClickAction = (
    event: React.SyntheticEvent<EventTarget>
  ): void => {
    onAddImageClick && onAddImageClick();
  };
  return (
    <div className={wrapperClass} {...rest}>
      {size === SizeVariations.large && (
        <div className="lucia-avatar--action" onClick={onAddImageClickAction}>
          {add && AvatarAddIcon}
          {edit && AvatarEditIcon}
        </div>
      )}
      {image ? (
        <img src={image} alt={alt} />
      ) : (
        name && <span className={getInitialFontSize(size)}>{name[0]} </span>
      )}
    </div>
  );
};

Avatar.defaultProps = {
  add: false,
  edit: false,
  size: SizeVariations.medium
};

export default Avatar;
