import classNames from 'classnames';

import './LoadingGradient.css';

interface Props {
  className?: string;
  width: string;
  height: string;
}

function LoadingGradient(props: Props) {
  const classes = classNames('LoadingGradient', props.className);

  return <div className={classes} style={{ width: props.width, height: props.height }} />;
}

export default LoadingGradient;
