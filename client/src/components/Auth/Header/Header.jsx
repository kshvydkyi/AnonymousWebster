import {Toolbar, AppBar, Typography, Button, IconButton, MenuItem, Drawer, Link} from '@mui/material';
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import menuIcon from '../../../assets/menuIcon.png';
import websterLogo from '../../../assets/websterLogo.png';
import '../../../App.css'
import {MainHeader, MenuButton, MainButtons, Logo} from './HeaderStyles'


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
          <Toolbar>
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
                
                <img className="fit-picture" src={menuIcon} alt="menuIcon" height = {30} width = {30} ></img>
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
        <Typography variant="h6" component="h1">
          <img className="fit-picture" src={websterLogo} alt="websterLogo" width={115} height={40}></img> 
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