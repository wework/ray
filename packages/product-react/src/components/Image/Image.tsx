
import clsx from 'clsx';
import React from 'react';

function ratioToPercentageString(ratio:any) {
  return `${100 / ratio}%`;
}

export enum SizeVariations {
  by9 = ratioToPercentageString(16 / 9),
  medium = 'medium',
  large = 'large',
}

const AspectRatios = {
  '16by9': ratioToPercentageString(16 / 9),
  '1by1': ratioToPercentageString(1),
  '3by4': ratioToPercentageString(3 / 4),
  '4by3': ratioToPercentageString(4 / 3),
  cinema: ratioToPercentageString(2.4)
};

const ASPECT_RATIOS = Object.keys(AspectRatios);

// export default function Image({ className, src, aspect, bg, ...rest }) {
//   if (bg) {
//     return (
//       <div
//         className={clsx(
//           'ray-bg',
//           {
//             [`ray-bg--${aspect}`]: aspect
//           },
//           className
//         )}
//         {...rest}
//         style={{
//           ...rest.style,
//           backgroundImage: `url(${src})`
//         }}
//       />
//     );
//   }

//   return (
//     <div
//       className={clsx('ray-image', {
//         [`ray-image--${aspect}`]: aspect
//       })}
//     >
//       <img className={className} src={src} {...rest} />
//     </div>
//   );
// }

// Image.propTypes = {
//   className: PropTypes.string,
//   src: PropTypes.string,
//   aspect: PropTypes.oneOf(ASPECT_RATIOS),
//   bg: PropTypes.bool
// };


export interface IImageProps extends React.HTMLProps<HTMLImageElement> {
  className?: string;
  src?: string;
  aspect: SizeVariations;
  //  ?, bg, ...rest

  alt?: string;
  crossOrigin?: "anonymous" | "use-credentials" | "";
  decoding?: "async" | "auto" | "sync";
  height?: number | string;
  sizes?: string;

  srcSet?: string;
  useMap?: string;
  width?: number | string;




}

export const Image: React.FC<IImageProps> = ({
  className,
  id,
  name,
  label,
  ...rest
}) => {
  return (
    <div className={clsx('ray-checkbox', className)}>
      <input
        className="ray-checkbox__input"
        id={id}
        name={name}
        {...rest}
      />
      <label className="ray-checkbox__label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Image;

