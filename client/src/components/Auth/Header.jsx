import {Toolbar, AppBar, Typography, Button, IconButton, MenuItem, Drawer, Link} from '@mui/material';
import {styled} from '@mui/system'
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import logoAnon from '../../assets/anonguy.png';
import menuIcon from '../../assets/menuIcon.png';
import '../../App.css'

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

const useStyles = styled(() => ({
    header: {
      backgroundColor: "#1E1E1E",
      paddingRight: "79px",
      paddingLeft: "118px",
      "@media (max-width: 900px)": {
        paddingLeft: 0,
      },
    },
    logo: {
      fontFamily: "Work Sans, sans-serif",
      fontWeight: 600,
      color: "#FFFEFE",
      textAlign: "left",
    },
    menuButton: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      size: "18px",
      marginLeft: "38px",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    drawerContainer: {
      padding: "20px 30px",
    },
  }));


                           
export default function Header() {
    const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

    const MainHeader = styled('div')({
        color: 'white',
        backgroundColor: '#1E1E1E',
        padding: 8,
        borderRadius: 4,
        position: 'relative',
        text: 'right'
    });

    const MenuButton = styled(Button)({
        padding: '20px',
    });

    const MainButtons = styled('div')({
        position: 'relative',
        left: 'calc(100% - 276px)'
    });


    const Logo = styled('span')({
        position:'absolute',
        marginLeft: '10px'
    });

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
      });
    
      const { mobileView, drawerOpen } = state;
    
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
          <Toolbar className={toolbar}>
            {femmecubatorLogo}
            <MainButtons>{getMenuButtons()}</MainButtons>
          </Toolbar>
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
                
                <img class="fit-picture" src={menuIcon} alt="menuIcon" height = {30} width = {30} ></img>
            </IconButton>
    
            <Drawer
              {...{
                anchor: "left",
                open: drawerOpen,
                onClose: handleDrawerClose,
              }}
            >
              <div className={drawerContainer}>{getDrawerChoices()}</div>
            </Drawer>
    
            <div>{femmecubatorLogo}</div>
          </Toolbar>
        );
      };
    
      const getDrawerChoices = () => {
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
      };
    
      const femmecubatorLogo = (
        <Typography variant="h6" component="h1" className={logo}>
          Webster
          <Logo><img class="fit-picture" src={logoAnon} alt="anonLogo"  ></img></Logo>
        </Typography>
      );
    
      const getMenuButtons = () => {
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
      };
    
      return (
          <MainHeader>
            {mobileView ? displayMobile() : displayDesktop()}
          </MainHeader>
      );
    }