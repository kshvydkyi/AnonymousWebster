import { Toolbar, AppBar, Typography, Button, IconButton, MenuItem, Drawer, Link } from '@mui/material';
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import menuIcon from '../../../assets/Layout/menuIcon.png';
import Logo from '../../../assets/Layout/Logo.png'
import '../../../App.css'
import { MainHeader, MenuButton, MainButtons, ToolbarStyled } from './HeaderStyles'
import useAuth from '../../hooks/useAuth';
import axios from '../../api/axios';
import { useNavigate } from "react-router-dom";


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
          if (currentUser.currentUser !== 'guest') {
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
          // setAuth(false);
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

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div>{getDrawerChoices()}</div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
      </Toolbar>
    );
  };

 const getDrawerChoices = () => {
        if(currentUser.currentUser === 'guest') {
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
              <MenuItem>{label}</MenuItem>
            </Link>
          );
        });
      }
      else {
        return (
        <p>{currentUser.login}</p>
        )
      }
      };

  const femmecubatorLogo = (
    <Typography variant="h6" component="a" href='/'>
      <img className="fit-picture" src={Logo} alt="websterLogo" width={165} height={50}></img>
    </Typography>
  );

      const getMenuButtons = () => {
        if(currentUser.currentUser === 'guest') {
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
            <div>
          <p>{currentUser.login}</p>
          <button title="Log Out" onClick={() => toLogOut()} className='p-1 mb-1 bg-dark text-white' style={{ outline: 'none', border: '0px black' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
            <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
          </svg>
        </button>
        </div>
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

