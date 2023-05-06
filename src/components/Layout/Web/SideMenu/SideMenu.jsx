import React from "react";

import MenuList from "../../MenuList/MenuList";
import * as styled from "./SideMenuStyles";

const SideMenu = () => {
  return (
    <styled.SideMenuWrapper>
      <MenuList />
    </styled.SideMenuWrapper>
  );
};

export default SideMenu;
