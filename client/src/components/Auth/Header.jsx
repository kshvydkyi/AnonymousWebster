import { Toolbar, Typography, IconButton, MenuItem, Link, Avatar, CircularProgress } from '@mui/material';
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import WebsterLogo from '../../assets/Layout/Logo.png'
import { MainHeader, MenuButton, MainButtons, ToolbarStyled, UserInfo, DrawerEl, LogOutBtn, ManageAccountButton } from '../../styles/HeaderStyles'
import useAuth from '../../hooks/useAuth';
import axios from '../../api/axios';
import { useNavigate } from "react-router-dom";
import route from '../../api/route';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import { BoxEl } from '../../styles/RegisterStyle';
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
    settingsOpen: false
  });

  const handleSettingsClose = () =>
    setState((prevState) => ({ ...prevState, settingsOpen: false }));
  const handleSettingsOpen = () =>
    setState((prevState) => ({ ...prevState, settingsOpen: true }));
  const handleDrawerOpen = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: true }));
  const handleDrawerClose = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: false }));

  const { mobileView, drawerOpen, settingsOpen } = state;
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
        <DrawerEl {...{
          anchor: "right",
          open: settingsOpen,
          onClose: handleSettingsClose,
        }}>
          <BoxEl>
          <LogOutBtn href='update-profile'>Update Profile</LogOutBtn>
          <IconButton {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: toLogOut,
          }}>
            {
              isLoading ? <CircularProgress size={24} color="inherit" /> :
                <>
                  <LogOutBtn>
                    Logout
                    <ExitToAppOutlinedIcon />
                  </LogOutBtn>
                </>
            }
          </IconButton>
          
         
          </BoxEl>
        </DrawerEl>
        <MainButtons>{getMenuButtons()}</MainButtons>
      </ToolbarStyled>
    );
  };

  const displayMobile = () => {
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

          <MenuOutlinedIcon color="white" fontSize="large" />
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

        <DrawerEl {...{
          anchor: "right",
          open: settingsOpen,
          onClose: handleSettingsClose,
        }}>
          <LogOutBtn href='update-profile'>Update Profile</LogOutBtn>
          <IconButton {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: toLogOut,
          }}>
            {
              isLoading ? <CircularProgress size={24} color="inherit" /> :
                <>
                  <LogOutBtn>
                    Logout
                    <ExitToAppOutlinedIcon />
                  </LogOutBtn>
                </>
            }
          </IconButton>
        </DrawerEl>
        <div>{femmecubatorLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    if (currentUser?.currentUser === 'guest') {
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
          <Typography>{currentUser?.login}</Typography>
          <Avatar src={userAvatar && userAvatar !== 'undefined' && userAvatar !== undefined ? `${route.serverURL}/avatars/${userAvatar}` : `${route.serverURL}/avatars/default_avatar.png`} width={20} height={20} alt='avatar' />
          <ManageAccountButton {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleSettingsOpen,
          }}>
            <ManageAccountsOutlinedIcon />
          </ManageAccountButton>
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

    if (currentUser?.currentUser === 'guest') {
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
          <ManageAccountButton {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleSettingsOpen,
          }}>
            <ManageAccountsOutlinedIcon />
          </ManageAccountButton>
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

