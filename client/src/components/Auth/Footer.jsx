import React from "react";

import anonymousMask from '../../../assets/Layout/anonguy.png';
import { BoxComp2, TypographyComp, ContainerComp } from './FooterStyle'

const  Footer  = () => {
  return (
  
      <ContainerComp>
        <BoxComp2>
          <div>
            <img className="fit-picture" src={anonymousMask} alt="anonLogo"></img>
          </div>
          <TypographyComp variant="caption" color="initial">
            Webster © 2023 Anonymous team. All rights reserved
          </TypographyComp>
        </BoxComp2>
      </ContainerComp>
  );
}

export default Footer;
