import React, { ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { useRoute } from '../../../../hooks';

import { TopNavigation } from '../../../Blocks';

import './Header.css';

interface Props {
  children?: ReactElement<typeof TopNavigation>;
}

function Header(props: Props) {
  const location = useLocation();

  const route = useRoute(location.pathname);

  return (
    <div className="Header">
      <div className="Header__breadcrumbs">
        {route?.items.map((item) => {
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
      <div className="Header__content">{route?.label}</div>
      {props.children && <div className="Header__navigation">{props.children}</div>}
    </div>
  );
}

export default Header;
