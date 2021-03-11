import './Header.css';

export function Header() {
  return (
    <div className="CM-ClientsListHeader">
      <div className="CM-ClientsListHeader-column CM-ClientsListHeader-column--title">Titre</div>
      <div className="CM-ClientsListHeader-column CM-ClientsListHeader-column--name">Nom</div>
      <div className="CM-ClientsListHeader-column CM-ClientsListHeader-column--email">Email</div>
      <div className="CM-ClientsListHeader-column CM-ClientsListHeader-column--phone">
        Téléphone
      </div>
    </div>
  );
}
