import styled from "styled-components";

export const DrawerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  position: fixed;
  border-right: 1px solid #8e9195;
  top: 0%;
  bottom: 0%;
  width: 200px;
  z-index: 300;
  animation: moveInAnimation ease 0.6s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @keyframes moveInAnimation {
    0% {
      transform: translateX(-60%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;
export const DrawerMenuList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
`;
export const CloseDrawer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: row;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid #8e9195;
  .drawer-image {
    height: 70px;
    width: 80px;
    border-radius: 7px;
    margin-left: 25px;
  }
  .close-drawer-icon {
    padding: 4px 5px 3px 5px;
    font-size: 17px;
    &:hover {
      cursor: pointer;
    }
  }
`;
export const DrawerOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  pointer-events: all;
`;
export const DrawerLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  width: 100%;
  padding: 11px 0px 11px 0px;
  &:hover {
    cursor: pointer;
    background-color: #f2f2f2;
    border-radius: 10px;
  }
`;
export const DrawerLink = styled.div`
  font-size: 14px;
  margin-left: 5px;
`;
export const DrawerMenuIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 5px;
  margin-left: 10px;
`;
