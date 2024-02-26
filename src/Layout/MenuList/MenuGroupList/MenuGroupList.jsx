import React from "react";
import * as styled from "./MenuGroupListStyles";
import { useNavigate } from "react-router-dom";

const MenuGroupList = ({ menuGroupList, clickedMenuListItem }) => {
  const navigate = useNavigate();
  return (
    <styled.Container>
      {menuGroupList.map((item) => (
        <styled.MenuGroupItem key={item.name} onClick={() => navigate(item.path)}>
          <styled.MenuGroupItemText
            clicked={item.path === clickedMenuListItem ? true : false}
          >
            <div className="menu-icon">{item.icon}</div>
            <p>{item.name}</p>
          </styled.MenuGroupItemText>
        </styled.MenuGroupItem>
      ))}
    </styled.Container>
  );
};

export default MenuGroupList;
