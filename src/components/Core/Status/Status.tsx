import classNames from 'classnames';

import { Status as IStatus, StatusMapper } from '../../../types';

import './Status.css';

interface Props {
  status: IStatus;
}

function Status(props: Props) {
  const classes = classNames('Status', {
    [`Status--${props.status}`]: true,
  });

  return (
    <div className={classes}>
      <span className="Status__bullet" />
      <span className="Status__label">{StatusMapper[props.status]}</span>
    </div>
  );
}

export default Status;
