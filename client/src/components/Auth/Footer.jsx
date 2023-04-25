import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import anonLogo from '../../assets/anonguy.png';

function Footer() {
    return (
      <Paper sx={{marginTop: 'calc(10% + 60px)',
      backgroundColor: '#1E1E1E',
      position: 'fixed',
      width: '100%',
      bottom: 0,
      width: '100%'
      }} component="footer" square variant="outlined">
        <Container maxWidth="lg">
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              my:1
            }}
          >
              <div>
              <img className="fit-picture" src={anonLogo} alt="anonLogo"></img> 
              </div>
          </Box>
  
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              mb: 2,
            }}
          >
            <Typography variant="caption" color="initial"
            sx={{color: 'white'}}
            >
                Webster © 2023 Anonymous team. All rights reserved
            </Typography>
          </Box>
        </Container>
      </Paper>
    );
  }

export default Footer;