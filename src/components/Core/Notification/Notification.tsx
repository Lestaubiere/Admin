import './Notification.css';

interface Props {
  /**
   * The color of the notification
   */
  color?: string;
  /**
   * The size of the notification (with unit)
   */
  size?: string;
}

function Notification(props: Props) {
  return (
    <span
      className="Notification"
      style={{ backgroundColor: props.color, width: props.size, height: props.size }}
    />
  );
}

Notification.defaultProps = {
  color: 'var(--color-error)',
  size: '6px',
};

export default Notification;
