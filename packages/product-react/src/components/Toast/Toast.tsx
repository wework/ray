import clsx from 'clsx';
import React from 'react';
import '../Toast/Toast.scss';

// import '../Select/Select.scss';

export interface TagProps extends React.HTMLProps<HTMLButtonElement> {
  label?: string;
  open?: boolean;
  variant?: string;
  animation?: boolean;
  index?: number;
  onClick?(): void;
}

// const cx = clsx.bind(styles);

export const Toast: React.FC<TagProps> = ({
  label,
  open,
  variant,
  animation,
  index,
  onClick,
  ...rest
}) => {
  const offsetStyle = {
    transform: `translateY(calc(50vh - 30px - (${index}*65px)))`
  };
  const [dropin, setAnimationDropIn] = React.useState(true);
  const [offset, setOffsetstyle] = React.useState(offsetStyle);

  React.useEffect(() => {
    console.log(
      'useEffect>>>>>',
      index,
      '****',
      label !== undefined ? label.length : ''
    );
    setAnimationDropIn(false);
    const timeout = setTimeout(
      () => {
        const offsetStyle = {
          transform: '',
          opacity: 0
        };
    setOffsetstyle(offsetStyle);
      },
      index !== undefined ? index * 100000 : 1000
    );
    return () => clearTimeout(timeout);
  }, []);

  let withaction: string = '';
  let withoutaction: string = '';
  const success: boolean = variant === 'success';
  const error: boolean = variant === 'error';
  const warning: boolean = variant === 'warning';
  const original: boolean = variant === 'original';

  if (onClick !== undefined) {
    withaction = 'toast-with-action';
  } else {
    withoutaction = 'toast-without-action';
  }

  const classes = clsx({
    'ray-toast-with-action': withaction,
    'ray-toast-without-action': withoutaction,
    'ray-toast--error': error,
    'ray-toast--success': success,
    'ray-toast--warning': warning,
    'ray-toast--original': original,
    'ray-toast-drop-in': dropin
  });

  return (
    <div>
      <span className={classes} style={offset}>
        <span className="ray-toast">{label}</span>
        <span className="ray-toast ray-toast-float">
          {withaction !== '' && (
            <a className="ray-toast-action" onClick={onClick}>
              Undo
            </a>
          )}
        </span>
        {/* <span className="toast-close">x</span> */}
      </span>
    </div>
  );
};

Toast.defaultProps = {
  label: '',
  open: false,
  variant: 'default',
  animation: true,
  index: 0
};

export default Toast;
