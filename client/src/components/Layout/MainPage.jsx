import React from "react";
import mainPageElement from '../../assets/Layout/mainPageElementAnon.png';
import mainPageElementLight from '../../assets/Layout/mainPageElementAnonLight.png';
import websterLogoLight from '../../assets/Layout/LogoLight.png'
import websterLogoDark from '../../assets/Layout/LogoDark.png'
import {Container, TextBlock, ButtonDiv, StartButton} from '../../styles/MainPageStyle';

export const  MainPage  = () => {
    return (
           <Container>
            <TextBlock>
              {
                localStorage.getItem('themeMode') === 'dark' ?
                <img className="fit-picture" src={websterLogoDark} alt="websterLogo" width={350}></img>
                :
                <img className="fit-picture" src={websterLogoLight} alt="websterLogo" width={350}></img>
              }
            </TextBlock>
            {
              localStorage.getItem('themeMode') === 'dark' ?
              <img className="fit-picture" src={mainPageElement} alt="mainPageWallPaper"></img>
              :
              <img className="fit-picture" src={mainPageElementLight} alt="mainPageWallPaper"></img>
            }
            <ButtonDiv>
                <StartButton
                className={localStorage.getItem('themeMode') === 'dark' ? "Dark" : "Light"}
                variant="outlined"
                >Start</StartButton>
            </ButtonDiv>
             </Container>
    );
  }

export default MainPage;