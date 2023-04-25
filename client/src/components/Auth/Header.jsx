import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import React from "react";

export default function Header() {
    const displayDesktop = () => {
      return <Toolbar>Hi From Desktop Header</Toolbar>;
    };
    
    return (
      <header>
        <AppBar>{displayDesktop()}</AppBar>
      </header>
    );
  }