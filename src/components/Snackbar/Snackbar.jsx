import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import reactDom from "react-dom";
import { MdErrorOutline } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";

import * as styled from "./SnackbarStyles";
import { addSpotifyAccessToken } from "../../Redux/Slices/Content/Music/Token/SpotifyAccessToken";
import Spinner from "../Spinner/Spinner";
import { client_id, client_secret } from "Utils/utils";

const Snackbar = forwardRef((props, ref) => {
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [spotifyAccessTokenError, setSpotifyAccessTokenError] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [accessTokenSuccess, setAccessTokenSuccess] = useState(null);
  const dispatch = useDispatch();
  const getSpotifyAccessToken = () => {
    setIsloading(true);
    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      body:
        "grant_type=client_credentials&client_id=" +
        client_id +
        "&client_secret=" +
        client_secret,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        dispatch(addSpotifyAccessToken(response.access_token));
        setAccessTokenSuccess("Session successfully renewed");
        setIsloading(false);
      })
      .catch((e) => {
        setSpotifyAccessTokenError("error occurred");
        setIsloading(false);
      });
  };
  const onClose = () => {
    if (props.handleClose) {
      props.handleClose();
    }
    setShowSnackBar((value) => !value);
  };
  useImperativeHandle(ref, () => ({
    showPopup() {
      setShowSnackBar((value) => !value);
      if (props.type !== "getSpotifyAccessToken") {
        setTimeout(() => {
          setShowSnackBar((value) => !value);
        }, 3500);
      }
    },
  }));
  useEffect(() => {
    if (spotifyAccessTokenError) {
      setTimeout(() => {
        setSpotifyAccessTokenError(null);
      }, 3500);
    }
    if (accessTokenSuccess) {
      setTimeout(() => {
        setShowSnackBar((value) => !value);
      }, 3500);
    }
  }, [spotifyAccessTokenError, accessTokenSuccess]);
  return reactDom.createPortal(
    <styled.Container type={props.type} show={showSnackBar}>
      <styled.messageContainer>
        {props.type === "success" && (
          <FaRegCheckCircle size={18} className="snackbar-icon" />
        )}
        {props.type === "failed" && (
          <MdErrorOutline size={18} className="snackbar-icon" />
        )}
        <styled.text type={props.type}>
          {spotifyAccessTokenError
            ? spotifyAccessTokenError
            : accessTokenSuccess
            ? accessTokenSuccess
            : props.message}
        </styled.text>
      </styled.messageContainer>
      {props.type === "getSpotifyAccessToken" && (
        <styled.btnGroup>
          <styled.btn onClick={getSpotifyAccessToken} type={"token"}>
            {isloading ? <Spinner /> : "renew"}
          </styled.btn>
          <styled.btn onClick={onClose} type="close">
            close
          </styled.btn>
        </styled.btnGroup>
      )}
    </styled.Container>,
    document.getElementById("snackbar")
  );
});

export default Snackbar;
