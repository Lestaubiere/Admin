import * as React from 'react';
import classNames from 'classnames';

import { IconProps } from '.';

import './Icon.css';

function View(props: IconProps) {
  const classes = classNames('Icon', props.className);

  return (
    <div className={classes}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        viewBox="0 0 24 18"
      >
        <path
          className="Icon__fill"
          fill={props.color}
          fillRule="nonzero"
          d="M12 0C4 0 0 9.041 0 9.041S4 18 12 18s12-9 12-9-4-9-12-9zm0 16c-5.287 0-8.624-4.97-9.75-6.963C3.376 7.025 6.714 2 12 2c5.288 0 8.625 5 9.75 7-1.127 2.004-4.464 7-9.75 7zm0-11a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"
        />
      </svg>
    </div>
  );
}

View.defaultProps = {
  color: '#FFFFFF',
  width: '24',
  height: '18',
};

export default View;
