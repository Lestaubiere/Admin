import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { State } from '../../../../store';

import { TopNavigation } from '../../../Blocks';

import './Header.css';

interface Props {
  children?: ReactElement<typeof TopNavigation>;
}

function Header(props: Props) {
  const { breadcrumbs, title } = useSelector((state: State) => state.navigationState);

  const location = useLocation();

  return (
    <div className="Header">
      <div className="Header__breadcrumbs">
        <Link className="Header__breadcrumbs-item" to="/">
          Accueil
        </Link>
        {breadcrumbs.map((item) => {
          const classes = classNames('Header__breadcrumbs-item', {
            'Header__breadcrumbs-item--is-active': location.pathname === item.path,
          });

          return (
            <Link key={item.path} className={classes} to={item.path}>
              {item.label}
            </Link>
          );
        })}
      </div>
      <div className="Header__content">{title}</div>
      {props.children && <div className="Header__navigation">{props.children}</div>}
    </div>
  );
}

export default Header;
