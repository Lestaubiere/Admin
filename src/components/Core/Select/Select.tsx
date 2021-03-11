import { useState, useEffect } from 'react';
import ReactSelect, { ValueType, OptionsType } from 'react-select';
import classNames from 'classnames';

import './Select.css';

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  value: string | null;
  options: OptionsType<{ label: string; value: string }>;
  searchable?: boolean;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  onChange: (name: string, value: string | null) => void;
  onDelete?: (name: string, row?: number) => void;
}

function Select(props: Props) {
  const [error, setError] = useState<string | undefined>(props.error);

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

  function handleChange(option: ValueType<{ label: string; value: string }, false>) {
    if (option) {
      const formattedOption: { label: string; value: string } = Array.isArray(option)
        ? option[0]
        : option;

      props.onChange(props.name, formattedOption.value);
    } else if (!props.required) {
      if (props.onDelete) {
        props.onDelete(props.name);
      } else {
        props.onChange(props.name, null);
      }
    }
  }

  const classes = classNames('Select', {
    'Select--no-value': props.value === null,
    'Select--disabled': props.disabled,
    'Select--has-error': props.error !== undefined,
  });

  return (
    <div className={classes}>
      {props.label && (
        <div className="Select__header">
          <label className="Select__label" htmlFor={props.name}>
            {props.label}
          </label>
        </div>
      )}
      <div className="Select__container">
        <div className="Select__input-container">
          <ReactSelect
            className="Select__input"
            classNamePrefix="Select"
            name={props.name}
            value={props.options.find((item) => item.value === props.value)}
            placeholder={props.placeholder || ''}
            isDisabled={props.disabled}
            isSearchable={props.searchable}
            isClearable={!props.required}
            options={props.options}
            menuPortalTarget={document.body}
            styles={{ menuPortal: (styles) => ({ ...styles, zIndex: 1001 }) }}
            onChange={handleChange}
          />
        </div>
        <div className="Select__errors">{error}</div>
      </div>
    </div>
  );
}

Select.defaultProps = {
  searchable: false,
  required: true,
  disabled: false,
};

export default Select;
