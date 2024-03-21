import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as styled from "./MenuCardStyles";
import { menuCardRoutelist } from "Utils/Constants";

const MenuCard = () => {
  const [routeIndex, setRouteIndex] = useState(0);
  const [flip, setFlip] = useState(false);
  const navigate = useNavigate();
  const routeListLength = menuCardRoutelist.length;
  let flipInterval;
  const flipAnimationTime = 300;
  const nextCardRoute = () => {
    if (routeIndex === routeListLength - 1) {
      setFlip((value) => !value);
      setTimeout(() => {
        setFlip((value) => !value);
        setRouteIndex(0);
      }, [flipAnimationTime]);
    } else {
      setFlip((value) => !value);
      setTimeout(() => {
        setFlip((value) => !value);
        setRouteIndex((value) => value + 1);
      }, [flipAnimationTime]);
    }
  };
  const autoFlip = () => {
    flipInterval = setInterval(nextCardRoute, 4000);
  };
  useEffect(() => {
    autoFlip();
    return () => clearInterval(flipInterval);
  }, [routeIndex]);
  return (
    <styled.Container flip={flip}>
      <styled.Row>
        {menuCardRoutelist[routeIndex].icon}
        <styled.Header>{menuCardRoutelist[routeIndex].name}</styled.Header>
      </styled.Row>
      <styled.Text>{menuCardRoutelist[routeIndex].text}</styled.Text>
      <styled.LinkButton
        onClick={() => navigate(menuCardRoutelist[routeIndex].path)}
      >
        {menuCardRoutelist[routeIndex].btnText}
      </styled.LinkButton>
    </styled.Container>
  );
};

export default MenuCard;
