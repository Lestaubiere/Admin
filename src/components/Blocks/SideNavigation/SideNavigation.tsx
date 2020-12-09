import React, { ReactElement, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { SideNavigationGroup } from './Group';

import logoIcon from '../../../assets/images/logo-icon.svg';
import logoText from '../../../assets/images/logo-text.svg';

import './SideNavigation.css';

export interface Props {
  children: ReactElement<typeof SideNavigationGroup> | ReactElement<typeof SideNavigationGroup>[];
}

export function SideNavigation(props: Props) {
  const [isExtended, setIsExtended] = useState(false);

  const classes = classNames('SideNavigation', {
    'SideNavigation--is-extended': isExtended,
  });

  function handleHove(): void {
    setIsExtended((oldValue) => !oldValue);
  }

  return (
    <div className={classes} onMouseEnter={() => handleHove()} onMouseLeave={() => handleHove()}>
      <div className="SideNavigation__header">
        <NavLink to="/" className="SideNavigation__item">
          <img className="SideNavigation__logo" src={logoIcon} alt="Icon logo Elwin" />
          <img
            className="SideNavigation__logo SideNavigation__logo--extended"
            src={logoText}
            alt="Text logo Elwin"
          />
        </NavLink>
      </div>

      {props.children}
    </div>
  );
}
