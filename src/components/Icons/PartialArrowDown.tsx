import classNames from 'classnames';

import { IconProps } from '.';

import './Icon.css';

function PartialArrowDown(props: IconProps) {
  const classes = classNames('Icon', props.className);

  return (
    <div className={classes}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        viewBox="0 0 10 7"
      >
        <g transform="translate(5.000000, 3.500000) rotate(-90.000000) translate(-5.000000, -3.500000) translate(2.000000, -1.000000)">
          <path
            className="Icon__fill"
            fill={props.color}
            fillRule="nonzero"
            d="M5.796,1.47 C6.134,1.063 6.042,0.488 5.592,0.184 C5.22125327,-0.0613652602 4.73974673,-0.0613652602 4.369,0.184 L0.292,3.857 C0.10646333,4.01917015 2.04622609e-05,4.2535796 2.04622609e-05,4.5 C2.04622609e-05,4.7464204 0.10646333,4.98082985 0.292,5.143 L4.369,8.816 C4.82,9.121 5.458,9.038 5.796,8.633 C6.06847543,8.31619493 6.06847543,7.84780507 5.796,7.531 L2.442,4.5 L5.806,1.47 L5.796,1.47 Z"
          />
        </g>
      </svg>
    </div>
  );
}

PartialArrowDown.defaultProps = {
  color: '#FFFFFF',
  width: '10',
  height: '7',
};

export default PartialArrowDown;
