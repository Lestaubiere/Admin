import React from 'react';
import classNames from 'classnames';

import { IconProps } from '.';

import './Icon.css';

function Home(props: IconProps) {
  const classes = classNames('Icon', props.className);

  return (
    <div className={classes}>
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 24 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="Icon__fill" fill={props.color} stroke="#FFFFFF" strokeMiterlimit="10">
          <path d="M20.3852 9.53552V19.853C20.3852 20.4836 19.8722 20.9966 19.2417 20.9966H14.7392V18.2596C14.7392 16.7349 13.5871 15.3993 12.0653 15.3019C10.3973 15.193 9.00728 16.517 9.00728 18.1621V20.9994H4.26409C3.63358 20.9994 3.12057 20.4864 3.12057 19.8559V9.53839H20.3852V9.53552Z" />
          <path d="M16.231 1H8.15186C7.81654 1 7.49842 1.14617 7.28061 1.40124L1.13882 8.59198C0.820701 8.96456 1.08437 9.53775 1.57445 9.53775H22.2496C22.7253 9.53775 22.9947 8.99035 22.7024 8.61204L17.1367 1.44423C16.9189 1.16336 16.5836 1 16.231 1Z" />
        </g>
      </svg>
    </div>
  );
}

Home.defaultProps = {
  color: '#000000',
  width: '24',
  height: '22',
};

export default Home;
