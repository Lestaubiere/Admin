import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import Spinner from '../Spinner';

import './Button.css';

type Target = '_blank' | '_self' | '_parent';

interface Props {
  className?: string;
  href?: string;
  target?: Target;
  to?: string;
  type?: 'default' | 'primary' | 'secondary' | 'white' | 'bordered';
  purpose?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  disabled?: boolean;
  tabIndex?: number;
  icon?: React.ReactNode;
  iconSide?: 'left' | 'right';
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button = React.forwardRef((props: Props, ref: React.Ref<any>) => {
  function handleClick() {
    if (!props.loading && !props.disabled && props.onClick) {
      props.onClick();
    }
  }

  const classes = classNames('Button', [props.className], {
    [`Button--${props.type}`]: true,
    'Button--loading': props.loading,
    'Button--disabled': props.disabled,
    'Button--has-icon': props.icon !== undefined,
    'Button--icon-left': props.iconSide === 'left',
    'Button--icon-right': props.iconSide === 'right',
    'Button--icon-only': props.children === undefined,
  });

  if (props.href !== undefined) {
    return (
      <a
        ref={ref}
        className={classes}
        href={props.href}
        target={props.target}
        tabIndex={props.disabled ? -1 : props.tabIndex}
        onClick={handleClick}
      >
        <div className="Button__icon">{props.icon}</div>
        <span className="Button__label">{props.children}</span>
        <span className="Button__loader">
          <Spinner color="var(--color-primary)" />
        </span>
      </a>
    );
  }

  if (props.to !== undefined) {
    return (
      <Link
        ref={ref}
        className={classes}
        to={props.to}
        tabIndex={props.disabled ? -1 : props.tabIndex}
        onClick={handleClick}
      >
        <div className="Button__icon">{props.icon}</div>
        <span className="Button__label">{props.children}</span>
        <span className="Button__loader">
          <Spinner color="var(--color-primary)" />
        </span>
      </Link>
    );
  }

  return (
    <button
      ref={ref}
      className={classes}
      type={props.purpose}
      disabled={props.disabled}
      tabIndex={props.disabled ? -1 : props.tabIndex}
      onClick={handleClick}
    >
      <div className="Button__icon">{props.icon}</div>
      <span className="Button__label">{props.children}</span>
      <span className="Button__loader">
        <Spinner color="var(--color-primary)" />
      </span>
    </button>
  );
});

Button.defaultProps = {
  type: 'default',
  purpose: 'button',
  loading: false,
  disabled: false,
  iconSide: 'right',
};

export default Button;
