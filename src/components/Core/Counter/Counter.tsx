import classNames from 'classnames';

import './Counter.css';

type Theme = 'clear' | 'primary' | 'secondary';

interface Props {
  /**
   * The value displayed by the counter
   */
  value: Number;
  /**
   * The theme of the counter
   */
  theme?: Theme;
}

function Counter(props: Props) {
  const classes = classNames('Counter', [`Counter--${props.theme}`]);

  return (
    <div className={classes}>
      <span className="Counter__value">{props.value}</span>
    </div>
  );
}

Counter.defaultProps = {
  theme: 'primary',
};

export default Counter;
