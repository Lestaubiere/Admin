import React from 'react';

import { SideNavigation, SideNavigationGroup, SideNavigationLink } from '../../../Blocks';
import { Handshake, Home } from '../../../Icons';

import './PrimaryNavigation.css';

function PrimaryNavigation() {
  return (
    <SideNavigation>
      <SideNavigationGroup>
        <SideNavigationLink
          label="Accueil"
          to="/"
          exact
          icon={<Home color="var(--color-primary)" />}
        />
      </SideNavigationGroup>
      <SideNavigationGroup>
        <SideNavigationLink
          label="Gestion clientèle"
          to="/gestion-clients"
          icon={<Handshake color="var(--color-primary)" />}
        />
        {/* <SideNavigationLink
            label="Gestion locations"
            to="/gestion-locations"
            icon={<Wallet color="var(--color-primary)" />}
          /> */}
      </SideNavigationGroup>
    </SideNavigation>
  );
}

export default PrimaryNavigation;
