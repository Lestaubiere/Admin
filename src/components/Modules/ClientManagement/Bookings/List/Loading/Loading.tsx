import { LoadingGradient } from '../../../../../Core';

export function Loading() {
  return (
    <div className="CM-BookingsList CM-BookingsList--loading">
      <div className="CM-BookingsListHeader">
        <div className="CM-BookingsListHeader-column CM-BookingsListHeader-column--status">
          <LoadingGradient width="100%" height="24px" />
        </div>
        <div className="CM-BookingsListHeader-column CM-BookingsListHeader-column--title">
          <LoadingGradient width="100%" height="24px" />
        </div>
        <div className="CM-BookingsListHeader-column CM-BookingsListHeader-column--name">
          <LoadingGradient width="100%" height="24px" />
        </div>
        <div className="CM-BookingsListHeader-column CM-BookingsListHeader-column--season">
          <LoadingGradient width="100%" height="24px" />
        </div>
        <div className="CM-BookingsListHeader-column CM-BookingsListHeader-column--arrival">
          <LoadingGradient width="100%" height="24px" />
        </div>
        <div className="CM-BookingsListHeader-column CM-BookingsListHeader-column--departure">
          <LoadingGradient width="100%" height="24px" />
        </div>
        <div className="CM-BookingsListHeader-column CM-BookingsListHeader-column--created">
          <LoadingGradient width="140px" height="24px" />
        </div>
      </div>
      <div className="CM-BookingsList__content">
        {[1, 2, 3, 4, 5, 6].map((key) => (
          <div key={key} className="CM-Booking">
            <div className="CM-Booking__header">
              <div className="CM-Booking__column CM-Booking__column--status">
                <LoadingGradient width="100%" height="24px" />
              </div>
              <div className="CM-Booking__column CM-Booking__column--title">
                <LoadingGradient width="100%" height="24px" />
              </div>
              <div className="CM-Booking__column CM-Booking__column--name">
                <LoadingGradient width="100%" height="24px" />
              </div>
              <div className="CM-Booking__column CM-Booking__column--season">
                <LoadingGradient width="100%" height="24px" />
              </div>
              <div className="CM-Booking__column CM-Booking__column--arrival">
                <LoadingGradient width="100%" height="24px" />
              </div>
              <div className="CM-Booking__column CM-Booking__column--departure">
                <LoadingGradient width="100%" height="24px" />
              </div>
              <div className="CM-Booking__column CM-Booking__column--created">
                <LoadingGradient width="140px" height="24px" />
              </div>
              <div className="CM-Booking__column CM-Booking__column--toggle">
                <LoadingGradient width="70px" height="24px" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
