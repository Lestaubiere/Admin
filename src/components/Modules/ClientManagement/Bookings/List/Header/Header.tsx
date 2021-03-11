import './Header.css';

export function Header() {
  return (
    <div className="CM-BookingsListHeader">
      <div className="CM-BookingsListHeader-column CM-BookingsListHeader-column--status">
        Statut
      </div>
      <div className="CM-BookingsListHeader-column CM-BookingsListHeader-column--title">Titre</div>
      <div className="CM-BookingsListHeader-column CM-BookingsListHeader-column--name">Nom</div>
      <div className="CM-BookingsListHeader-column CM-BookingsListHeader-column--season">
        Saison
      </div>
      <div className="CM-BookingsListHeader-column CM-BookingsListHeader-column--arrival">
        Arrivée le
      </div>
      <div className="CM-BookingsListHeader-column CM-BookingsListHeader-column--departure">
        Départ le
      </div>
      <div className="CM-BookingsListHeader-column CM-BookingsListHeader-column--created">
        Reçue le
      </div>
    </div>
  );
}
