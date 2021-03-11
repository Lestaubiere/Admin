import classNames from 'classnames';

import { IconProps } from '.';

import './Icon.css';

function PartialArrowRight(props: IconProps) {
  const classes = classNames('Icon', props.className);

  return (
    <div className={classes}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        viewBox="0 0 6 9"
      >
        <path
          className="Icon__fill"
          fill={props.color}
          fillRule="evenodd"
          d="M.204 1.47C-.134 1.063-.042.488.408.184c.363-.245.86-.245 1.223 0l4.077 3.673a.854.854 0 0 1 0 1.286L1.631 8.816c-.451.305-1.089.222-1.427-.183a.845.845 0 0 1 0-1.102L3.558 4.5.194 1.47h.01z"
        />
      </svg>
    </div>
  );
}

PartialArrowRight.defaultProps = {
  color: '#FFFFFF',
  width: '6',
  height: '9',
};

export default PartialArrowRight;
