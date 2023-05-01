import {Toolbar, Typography, IconButton, MenuItem, Link, Avatar, CircularProgress} from '@mui/material';
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import menuIcon from '../../assets/Layout/menuIcon.png';
import WebsterLogo from '../../assets/Layout/Logo.png'
import logoutLogo from '../../assets/logout.png';
import {MainHeader, MenuButton, MainButtons, ToolbarStyled, LogOutBtn, UserInfo, DrawerEl} from '../../styles/HeaderStyles'
import useAuth from '../../hooks/useAuth';
import axios from '../../api/axios';
import { useNavigate } from "react-router-dom";
import route from '../../api/route';

const headersData = [
  {
    label: "Sign In",
    href: "/login",
  },
  {
    label: "Sign Up",
    href: "/register",
  },
];

export default function Header() {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;
  const { auth, setAuth } = useAuth();
  const currentUser = JSON.parse(localStorage.getItem('autorized'));
  const [userAvatar, setUserAvatar] = useState();
  const navigate = useNavigate(); 
  const [isLoading, setLoading] = useState(false);

      useEffect(() => {
        if (currentUser?.currentUser !== 'guest') {
          if (auth) {
            // checkToken(currentUser.accessToken, setAuth);
            if (currentUser) {
              setAuth({ ...currentUser });
            } else {
              setAuth(false);
            }
          }
        }
      }, []);

      const getUserInfo = async () => {
        try {
          if (currentUser?.currentUser !== 'guest') {
          const response = await axios.get(`/api/users/${currentUser.userId}`);
          // console.log('userAvatar', response);
          setUserAvatar(response.data.values.values.profile_pic);
          }
        }
        catch (e) {
          console.log(e)
          navigate('/500');
        }
      }
      useEffect(() => {
        if (currentUser?.currentUser !== 'guest') {
          getUserInfo();
        }
      }, []);
    
      async function toLogOut() {
          localStorage.removeItem('autorized');
          setLoading(true);
          navigate('/');
          document.location.reload();
      }
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <ToolbarStyled>
        {femmecubatorLogo}
        <MainButtons>{getMenuButtons()}</MainButtons>
      </ToolbarStyled>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >

          <img className="fit-picture" src={menuIcon} alt="menuIcon" height={30} width={30} ></img>
        </IconButton>

        <DrawerEl
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div>{getDrawerChoices()}</div>
        </DrawerEl>

        <div>{femmecubatorLogo}</div>
      </Toolbar>
    );
  };

 const getDrawerChoices = () => {
        if(currentUser?.currentUser === 'guest') {
        return headersData.map(({ label, href }) => {
          return (
            <Link 
              {...{
                component: RouterLink,
                to: href,
                color: "inherit",
                style: { textDecoration: "none" },
                key: label,
              }}
            >
              <MenuItem >{label}</MenuItem>
            </Link>
          );
        });
      }
      else {
        return (
          <UserInfo>
          <p>{currentUser?.login}</p>
          <Avatar src={userAvatar && userAvatar !== 'undefined' && userAvatar !== undefined ? `${route.serverURL}/avatars/${userAvatar}` : `${route.serverURL}/avatars/default_avatar.png`} width={20} height={20} alt='avatar' />
          <LogOutBtn title="Log Out" onClick={() => toLogOut()}>
            {
            isLoading ? <CircularProgress size={24}/> :
            <img className="fit-picture" src={logoutLogo} alt="logoutLogo" width={20} height={20}></img> 
            }
        </LogOutBtn>
        </UserInfo>
        )
      }
      };

  const femmecubatorLogo = (
    <Typography variant="h6" component="a" href='/'>
      <img className="fit-picture" src={WebsterLogo} alt="websterLogo" width={165} height={50}></img>
    </Typography>
  );

      const getMenuButtons = () => {
        if(currentUser?.currentUser === 'guest') {
        return headersData.map(({ label, href }) => {
          return (
            <MenuButton
              {...{
                key: label,
                color: "inherit",
                to: href,
                component: RouterLink,
              }}
            >
              {label}
            </MenuButton>
          );
        });
        }
        else {
          return (
            <UserInfo>
          <p>{currentUser?.login}</p>
          <Avatar src={userAvatar && userAvatar !== 'undefined' && userAvatar !== undefined ? `${route.serverURL}/avatars/${userAvatar}` : `${route.serverURL}/avatars/default_avatar.png`} width={20} height={20} alt='avatar' />
          <LogOutBtn title="Log Out" onClick={() => toLogOut()}>
            {
            isLoading ? <CircularProgress size={24}/> :
            <img className="fit-picture" src={logoutLogo} alt="logoutLogo" width={20} height={20}></img> 
            }
        </LogOutBtn>
        </UserInfo>
          )
        }
      };

  return (
    <div className="wrapper-navbar">
      <MainHeader>
        {mobileView ? displayMobile() : displayDesktop()}
      </MainHeader>
    </div>
  );
}

