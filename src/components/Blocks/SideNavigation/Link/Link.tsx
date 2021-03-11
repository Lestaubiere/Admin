import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import { Notification } from '../../../Core';

import './Link.css';

interface Props {
  label: string;
  to?: string;
  icon: React.ReactElement;
  exact?: boolean;
  hasAlert?: boolean;
  onClick?: () => {};
}

export function SideNavigationLink(props: Props) {
  function renderContent() {
    return (
      <Fragment>
        <div className="SideNavigation-Link__icon-container">
          <div className="SideNavigation-Link__icon">
            {props.icon}
            {props.hasAlert && (
              <div className="SideNavigation-Link__alert">
                <Notification />
              </div>
            )}
          </div>
        </div>
        <span className="SideNavigation-Link__label">{props.label}</span>
      </Fragment>
    );
  }

  if (props.to) {
    return (
      <NavLink
        exact={props.exact}
        to={props.to}
        className="SideNavigation-Link"
        activeClassName="SideNavigation-Link--is-active"
      >
        {renderContent()}
      </NavLink>
    );
  }

  if (props.onClick) {
    return (
      <button className="SideNavigation-Link" onClick={props.onClick}>
        {renderContent()}
      </button>
    );
  }

  throw new Error(`And item should have a desitnation url or an action (to or onClick props).`);
}

SideNavigationLink.defaultProps = {
  hasAlert: false,
};
