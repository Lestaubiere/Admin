import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import { Counter, Notification } from '../../../Core';

import './Link.css';

interface Props {
  /**
   * The label of the link
   */
  label: string;
  /**
   * The destination url of the link
   */
  to: string;
  /**
   * The icon shown next to the label
   */
  icon: ReactElement;
  /**
   * Value of the counter which can be shown next to the label
   */
  count?: number;
  /**
   * Should there be a notification icon be shown next to the label ?
   */
  hasAlert?: boolean;
}

export function TopNavigationLink(props: Props) {
  return (
    <NavLink
      exact
      to={props.to}
      className="TopNavigation-Link"
      activeClassName="TopNavigation-Link--is-active"
    >
      <div className="TopNavigation-Link__icon">{props.icon}</div>
      <div className="TopNavigation-Link__label">{props.label} </div>
      {props.count !== undefined && (
        <div className="TopNavigation-Link__counter">
          <Counter value={props.count} theme="clear" />
        </div>
      )}
      {props.hasAlert && (
        <div className="TopNavigation-Link__alert">
          <Notification color="#e32926" />
        </div>
      )}
    </NavLink>
  );
}

TopNavigationLink.defaultProps = {
  hasAlert: false,
};
