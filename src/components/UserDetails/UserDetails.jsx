import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";

import * as styled from "./UserDetailsStyles";
import { secondaryThemeColor } from "../../Css/Variables";
import { AppContext } from "../../Context/AppContext";

const UserDetails = ({ isMobileView }) => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const userEmail = useSelector((state) => state.user.value.emailAddress);
  const userName = useSelector((state) => state.user.value.firstName);
  const userTheme = useSelector((state) => state.user.value.userTheme);
  const { accessToken, setAccessToken } = useContext(AppContext);
  const navigate = useNavigate();
  const handleLogin = () => {
    setAccessToken("token");
    setOpenDropDown(false);
    navigate("/login");
  };
  const handleLogout = () => {
    setAccessToken(null);
    setOpenDropDown(false);
  };
  console.log("token",accessToken)
  return (
    <styled.UserCardWrapper isMobileView={isMobileView} isLoggedIn={accessToken?true:false}>
      {accessToken ? (
        <>
          <styled.UserCardDetailsWrapper isMobileView={isMobileView}>
            <styled.UserCardAbbrev backgroundColor={userTheme}>
              <styled.UserCardAbbrevText>
                {userName.slice(0, 1)}
              </styled.UserCardAbbrevText>
            </styled.UserCardAbbrev>
            {!isMobileView && (
              <styled.UserCardDetails>
                <styled.UserCardDetailsNameText>
                  {userName}
                </styled.UserCardDetailsNameText>
                <styled.UserCardDetailsEmailText>
                  {userEmail}
                </styled.UserCardDetailsEmailText>
              </styled.UserCardDetails>
            )}
          </styled.UserCardDetailsWrapper>
          <styled.UserIconWrapper isMobileView={isMobileView}>
            {openDropDown ? (
              <IoIosArrowUp
                fontSize={19}
                color={secondaryThemeColor}
                onClick={() => setOpenDropDown(!openDropDown)}
              />
            ) : (
              <IoIosArrowDown
                color={secondaryThemeColor}
                fontSize={19}
                onClick={() => setOpenDropDown(!openDropDown)}
              />
            )}
          </styled.UserIconWrapper>
        </>
      ) : (
        <styled.LogInOrOutWrapper onClick={handleLogin}>
          {/* {!isMobileView && <BiLogIn size={22} />} */}
          <styled.LogInOrOutText>Login</styled.LogInOrOutText>
        </styled.LogInOrOutWrapper>
      )}
      {openDropDown && (
        <styled.dropdown onClick={handleLogout}>
          {!isMobileView && <BiLogOut size={22} />}
          <styled.dropDownText isMobileView={isMobileView}>
            Logout
          </styled.dropDownText>
        </styled.dropdown>
      )}
    </styled.UserCardWrapper>
  );
};

export default UserDetails;
