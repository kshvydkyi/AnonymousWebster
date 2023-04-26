import React from "react";
import { Container } from "@mui/material";
import anonLogo from '../../../assets/header_and_mainPage/anonguy.png';

import { BoxComp2, TypographyComp, ContainerComp } from './FooterStyle'

function Footer() {
  return (
  
      <ContainerComp>
        <BoxComp2>
          <div>
            <img className="fit-picture" src={anonLogo} alt="anonLogo"></img>
          </div>
          <TypographyComp variant="caption" color="initial">
            Webster © 2023 Anonymous team. All rights reserved
          </TypographyComp>
        </BoxComp2>
      </ContainerComp>
  );
}

export default Footer;
