import * as React from 'react';

import './Spinner.css';

interface Props {
  /**
   * The color of the spinner
   */
  color?: string;
  /**
   * The size of the spinner
   */
  size?: string;
}

function Spinner(props: Props) {
  return (
    <span
      className="Spinner"
      style={{
        borderColor: props.color && `${props.color} transparent ${props.color} ${props.color}`,
        height: props.size,
        width: props.size,
      }}
    />
  );
}

Spinner.defaultProps = {
  color: 'var(--color-primary)',
  size: '20px',
};

export default Spinner;
