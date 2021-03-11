import { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import classNames from 'classnames';

import { Booking as IBooking, Statuses, TitleMapper } from '../../../../../../types';
import { format } from '../../../../../../plugins/date-fns';
import { LestaubiereApi } from '../../../../../../api';
import { useAccordion } from '../../../../../../hooks';
import { setBooking } from '../../../../../../store/booking';

import { Status } from '../../../../../Core';
import { PartialArrowDown } from '../../../../../Icons';

import { Details } from './Details';

import './Booking.css';

interface Props {
  booking: IBooking;
  isVisible?: boolean;
}

export function Booking(props: Props) {
  const contentRef = useRef<HTMLDivElement>(null);

  const history = useHistory();

  const dispatch = useDispatch();

  const [contentHeight] = useAccordion(contentRef, props.isVisible);

  const setBookingStatus = useCallback(async () => {
    try {
      const booking = await LestaubiereApi.getInstance().setBookingAsPending(props.booking.id);

      dispatch(setBooking(props.booking.id, booking));
    } catch {}
  }, [props.booking, dispatch]);

  useEffect(() => {
    if (props.isVisible && props.booking.status === Statuses.NEW) {
      setBookingStatus();
    }
  }, [props.isVisible, props.booking.status, setBookingStatus]);

  function handleToggle() {
    if (props.isVisible) {
      history.push('/gestion-clients/reservations');
    } else {
      history.push(`/gestion-clients/reservations/${props.booking.id}`);
    }
  }

  const classes = classNames('CM-Booking', {
    'CM-Booking--is-visible': props.isVisible,
  });

  return (
    <div className={classes}>
      <div className="CM-Booking__header">
        <div className="CM-Booking__column CM-Booking__column--status">
          <Status status={props.booking.status} />
        </div>
        <div className="CM-Booking__column CM-Booking__column--title">
          {TitleMapper[props.booking.title]}
        </div>
        <div className="CM-Booking__column CM-Booking__column--name">{props.booking.name}</div>
        <div className="CM-Booking__column CM-Booking__column--season">{props.booking.season}</div>
        <div className="CM-Booking__column CM-Booking__column--arrival">
          {format(new Date(props.booking.dateOfArrival), 'd MMMM')}
        </div>
        <div className="CM-Booking__column CM-Booking__column--departure">
          {format(new Date(props.booking.dateOfDeparture), 'd MMMM')}
        </div>
        <div className="CM-Booking__column CM-Booking__column--created">
          {format(new Date(props.booking.createdAt), 'dd/MM/yyyy à HH:mm')}
        </div>
        <div className="CM-Booking__column CM-Booking__column--toggle">
          <button className="CM-Button__toggle" onClick={handleToggle}>
            {props.isVisible ? 'Replier' : 'Déplier'}
            <PartialArrowDown color="var(--color-text)" />
          </button>
        </div>
      </div>
      <div className="CM-Booking__content-container" style={{ height: contentHeight }}>
        <div ref={contentRef} className="CM-Booking__content">
          <Details booking={props.booking} />
        </div>
      </div>
    </div>
  );
}

Booking.defaultProps = {
  isVisible: false,
};
