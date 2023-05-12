import React from "react";
import mainPageElement from '../../assets/Layout/mainPageElementAnon.jpg';
import mainPageElementLight from '../../assets/Layout/mainPageElementAnonLight.png';
import websterLogoLight from '../../assets/Layout/LogoLight.png'
import websterLogoDark from '../../assets/Layout/LogoDark.png'
import {ContainerDark, ContainerLight, TextBlock, ButtonDiv, StartButton, StartButtonLight} from '../../styles/MainPageStyle';

export const  MainPage  = () => {
  console.log(localStorage.getItem('themeMode'))
    return (
          <div>
          {
          localStorage.getItem('themeMode') === 'dark' ?
           <ContainerDark>
            <TextBlock>
              <img className="fit-picture" src={websterLogoDark} alt="websterLogo" width={340} height={130}></img>
            </TextBlock>
            <img className="fit-picture" src={mainPageElement} alt="mainPageWallPaper" height=""></img>
            <ButtonDiv>
                <StartButton
                color="error"
                variant="outlined"
                >Start</StartButton>
            </ButtonDiv>
             </ContainerDark>
             :
             <ContainerLight>
             <TextBlock>
               <img className="fit-picture" src={websterLogoLight} alt="websterLogo" width={340} height={130}></img>
             </TextBlock>
             <img className="fit-picture" src={mainPageElementLight} alt="mainPageWallPaper" height=""></img>
             <ButtonDiv>
                 <StartButtonLight
                 color="error"
                 variant="outlined"
                 >Start</StartButtonLight>
             </ButtonDiv>
              </ContainerLight>
            }
        </div>
    );
  }

export default MainPage;