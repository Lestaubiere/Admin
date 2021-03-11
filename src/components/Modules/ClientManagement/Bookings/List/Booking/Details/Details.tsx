import { format } from '../../../../../../../plugins/date-fns';
import { Booking, ElectricityMapper, EquipmenteMapper } from '../../../../../../../types';
import './Details.css';

interface Props {
  booking: Booking;
}

export function Details(props: Props) {
  return (
    <div className="CM-BookingDetails">
      <div className="CM-BookingDetails__column">
        <div className="CM-BookingDetails__row">
          <div className="CM-BookingDetails__field">
            <div className="CM-BookingDetails__label">Adresse</div>
            <div className="CM-BookingDetails__value">{props.booking.address}</div>
          </div>
          <div className="CM-BookingDetails__field">
            <div className="CM-BookingDetails__label">Code postal</div>
            <div className="CM-BookingDetails__value">{props.booking.zipCode}</div>
          </div>
          <div className="CM-BookingDetails__field">
            <div className="CM-BookingDetails__label">Ville</div>
            <div className="CM-BookingDetails__value">{props.booking.city}</div>
          </div>
          <div className="CM-BookingDetails__field">
            <div className="CM-BookingDetails__label">Pays</div>
            <div className="CM-BookingDetails__value">{props.booking.country}</div>
          </div>
        </div>
        <div className="CM-BookingDetails__row">
          <div className="CM-BookingDetails__field">
            <div className="CM-BookingDetails__label">Adresse e-mail</div>
            <div className="CM-BookingDetails__value">{props.booking.email}</div>
          </div>
          <div className="CM-BookingDetails__field">
            <div className="CM-BookingDetails__label">Numéro de téléphone</div>
            <div className="CM-BookingDetails__value">{props.booking.phoneNumber}</div>
          </div>
        </div>
        <div className="CM-BookingDetails__row">
          <div className="CM-BookingDetails__field">
            <div className="CM-BookingDetails__label">Commentaires</div>
            <div className="CM-BookingDetails__value">{props.booking.comment || '-'}</div>
          </div>
        </div>
      </div>
      <div className="CM-BookingDetails__column">
        <div className="CM-BookingDetails__row">
          <div className="CM-BookingDetails__information">
            <div className="CM-BookingDetails__label">Equipement</div>
            <div className="CM-BookingDetails__value">
              {EquipmenteMapper[props.booking.equipment]}
            </div>
          </div>
          <div className="CM-BookingDetails__information">
            <div className="CM-BookingDetails__label">Electricité</div>
            <div className="CM-BookingDetails__value">
              {props.booking.electricity === 'none'
                ? ElectricityMapper.none
                : props.booking.electricity === '6'
                ? ElectricityMapper.six
                : ElectricityMapper.ten}
            </div>
          </div>
        </div>
        <div className="CM-BookingDetails__row">
          <div className="CM-BookingDetails__information">
            <div className="CM-BookingDetails__label">
              Personnes ({props.booking.people.length})
            </div>
            <ul className="CM-BookingDetails__people">
              {props.booking.people.map((person) => (
                <li key={person.id} className="CM-BookingDetails__person">
                  {format(new Date(person.dateOfBirth), 'd MMMM yyyy')} ({person.ageAtArrival} ans)
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
