import React from "react";

import anonymousMask from '../../assets/Layout/anonguy.png';
import { BoxComp2, TypographyComp, ContainerComp, ContainerCompLight, TypographyCompLight } from '../../styles/FooterStyle'

const  Footer  = () => {
  return (
    <>
      {
        localStorage.getItem('themeMode') === 'dark' ?
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
      :
      <ContainerCompLight>
      <BoxComp2>
        <div>
          <img className="fit-picture" src={anonymousMask} alt="anonLogo"></img>
        </div>
        <TypographyCompLight variant="caption" color="initial">
          Webster © 2023 Anonymous team. All rights reserved
        </TypographyCompLight>
      </BoxComp2>
    </ContainerCompLight>
      }
    </>
  );
}

export default Footer;
