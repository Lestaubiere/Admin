import { useState, useEffect, ChangeEvent } from 'react';
import NumberFormat from 'react-number-format';
import PhoneInput from 'react-phone-input-2';
import classNames from 'classnames';

import { View } from '../../Icons';

import './Input.css';

interface Props {
  name: string;
  type: 'text' | 'number' | 'email' | 'tel' | 'date' | 'password';
  label?: string;
  placeholder?: string;
  annotation?: string;
  autocomplete?: string;
  value: string | null;
  min?: number | null;
  max?: number | null;
  suffix?: string;
  required?: boolean;
  showRequired?: boolean;
  disabled?: boolean;
  hasPasswordToggle?: boolean;
  error?: string;
  tabIndex?: number;
  onChange: (name: string, value: string) => void;
  onBlur?: () => void;
}

function Input(props: Props) {
  const [error, setError] = useState<string | undefined>(props.error);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  useEffect(() => {
    if (props.error) {
      setError(props.error);
    } else {
      const timeout = setTimeout(() => {
        setError(props.error);
      }, 300);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [props.error]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    props.onChange(props.name, event.target.value);
  }

  function handleNumberChange({ value }: any) {
    props.onChange(props.name, value);
  }

  function handlePhoneChange(
    _value: string,
    _data: any,
    _event: ChangeEvent<HTMLInputElement>,
    formattedValue: string,
  ) {
    props.onChange(props.name, formattedValue.replaceAll(' ', ''));
  }

  function handlePasswordToggle() {
    setShowPassword(!showPassword);
  }

  function getType() {
    if (props.hasPasswordToggle && showPassword) {
      return 'text';
    }

    return props.type;
  }

  function renderInput() {
    switch (props.type) {
      case 'tel':
        return (
          <PhoneInput
            country="fr"
            value={props.value || ''}
            placeholder={props.placeholder}
            disabled={props.disabled}
            enableSearch
            searchPlaceholder="Rechercher un indicatif"
            searchNotFound="Aucun indicatif correspond à votre recherche"
            inputProps={{ className: 'Input__input', tabIndex: props.tabIndex }}
            onChange={handlePhoneChange}
            onBlur={props.onBlur}
          />
        );

      case 'number':
        return (
          <NumberFormat
            className="Input__input"
            type="text"
            value={props.value || ''}
            name={props.name}
            thousandSeparator=" "
            decimalSeparator=","
            isNumericString
            min={props.min || undefined}
            max={props.max || undefined}
            suffix={props.suffix}
            placeholder={props.placeholder}
            disabled={props.disabled}
            tabIndex={props.tabIndex}
            onValueChange={handleNumberChange}
            onBlur={props.onBlur}
          />
        );

      default:
        return (
          <input
            className="Input__input"
            type={getType()}
            name={props.name}
            value={props.value || ''}
            placeholder={props.placeholder}
            autoComplete={props.autocomplete}
            disabled={props.disabled}
            tabIndex={props.tabIndex}
            onChange={handleChange}
            onBlur={props.onBlur}
          />
        );
    }
  }

  const classes = classNames('Input', {
    'Input--no-value': props.value === null,
    'Input--disabled': props.disabled,
    'Input--has-error': props.error !== undefined,
    'Input--has-password-toggle': props.hasPasswordToggle,
    'Input--password-is-visible': showPassword,
  });

  return (
    <div className={classes}>
      {(props.label || props.annotation) && (
        <div className="Input__header">
          <label className="Input__label" htmlFor={props.name}>
            {props.label}
          </label>
          {props.annotation && <div className="Input__annotation">{props.annotation}</div>}
        </div>
      )}
      <div className="Input__container">
        <div className="Input__input-container">
          {renderInput()}
          {props.hasPasswordToggle && props.type === 'password' && (
            <button
              className="Input__passsword-toggle"
              type="button"
              tabIndex={-1}
              disabled={props.disabled}
              onClick={handlePasswordToggle}
            >
              <View color="var(--color-grey-30)" />
            </button>
          )}
        </div>
        <div className="Input__errors">{error}</div>
      </div>
    </div>
  );
}

Input.defaultProps = {
  required: true,
  showRequired: false,
  disabled: false,
  hasPasswordToggle: false,
};

export default Input;
