import React from 'react';
import { Translate } from 'react-jhipster';

import MenuItem from 'app/shared/layout/menus/menu-item';

const EntitiesMenu = () => {
  return (
    <>
      {/* prettier-ignore */}
      <MenuItem icon="asterisk" to="/bank-account">
        <Translate contentKey="global.menu.entities.bankAccount" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/transaction">
        <Translate contentKey="global.menu.entities.transaction" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/branch">
        <Translate contentKey="global.menu.entities.branch" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/customer">
        <Translate contentKey="global.menu.entities.customer" />
      </MenuItem>
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu;
