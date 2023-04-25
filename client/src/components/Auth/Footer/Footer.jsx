import React from "react";
import {Container} from "@mui/material";
import anonLogo from '../../../assets/anonguy.png';

import {PaperComp, BoxComp, BoxComp2, TypographyComp} from './FooterStyle'

function Footer() {
    return (
      <PaperComp component="footer" square variant="outlined">
        <Container maxWidth="lg">
          <BoxComp>
              <div>
              <img className="fit-picture" src={anonLogo} alt="anonLogo"></img> 
              </div>
          </BoxComp> 
          <BoxComp2>
            <TypographyComp variant="caption" color="initial">
                Webster © 2023 Anonymous team. All rights reserved
            </TypographyComp>
          </BoxComp2>
        </Container>
      </PaperComp>
    );
  }

export default Footer;
