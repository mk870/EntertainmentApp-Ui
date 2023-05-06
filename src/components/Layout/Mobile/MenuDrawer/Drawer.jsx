import React from 'react'
import reactDom from "react-dom";

import MenuList from '../../MenuList/MenuList';
import { DrawerContainer, DrawerOverlay } from './DrawerStyles';

const Drawer = ({openMobileMenu, setOpenMobileMenu}) => {
  return reactDom.createPortal(
    <>
      <DrawerOverlay onClick={() => setOpenMobileMenu(!openMobileMenu)} />
      <DrawerContainer>
        <MenuList/>
      </DrawerContainer>
    </>,
    document.getElementById("drawer")
  );
}

export default Drawer