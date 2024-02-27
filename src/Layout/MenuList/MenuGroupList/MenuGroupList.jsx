import React from "react";
import { useNavigate } from "react-router-dom";

import * as styled from "./MenuGroupListStyles";

const MenuGroupList = ({ menuGroupList, clickedMenuListItem, isClosed }) => {
  const navigate = useNavigate();
  return (
    <styled.Container isClosed={isClosed}>
      {menuGroupList.map((item) => (
        <styled.MenuGroupItem
          key={item.name}
          onClick={() => navigate(item.path)}
          isClosed={isClosed}
        >
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
