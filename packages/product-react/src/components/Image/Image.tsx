import clsx from 'clsx';
import React from 'react';

import './Image.scss';

export type SizeVariations = '16by9' | '1by1' | '3by4' | '4by3' | 'cinema';

export interface IImageProps extends React.HTMLProps<HTMLImageElement> {
  className?: string;
  src: string;
  aspect: SizeVariations;
  bg?: boolean;
  alt?: string;
  height?: number | string;
  width?: number | string;
  srcSet?: string;
  useMap?: string;
  caption?: string;
  decoding?: 'async' | 'auto' | 'sync';
}

export const Image: React.FC<IImageProps> = ({
  className,
  src,
  aspect,
  alt,
  bg,
  height,
  width,
  srcSet,
  useMap,
  decoding,
  caption,
  ...rest
}) => {
  if (bg) {
    return (
      <div
        className={clsx(
          'ray-bg',
          {
            [`ray-bg--${aspect}`]: aspect
          },
          className
        )}
        {...rest}
        style={{
          ...rest.style,
          backgroundImage: `url(${src})`
        }}
      />
    );
  }

  return (
    <>
      <div
        className={clsx('ray-image', {
          [`ray-image--${aspect}`]: aspect
        })}
      >
        <img
          className={className}
          src={src}
          alt={alt}
          height={height}
          width={width}
          srcSet={srcSet}
          useMap={useMap}
          decoding={decoding}
        />
      </div>
      {caption && <div className="ray-caption">{caption}</div>}
    </>
  );
};

Image.defaultProps = {
  caption: ''
};

export default Image;
