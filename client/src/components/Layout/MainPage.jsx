import React, { FC, ReactElement } from "react";
import mainPageElement from '../../assets/Layout/mainPageElementAnon.jpg';
import websterLogo from '../../assets/Layout/Logo.png'
import {Container, TextBlock, TextDiv, ButtonDiv, StartButton} from '../../styles/MainPageStyle';

export const  MainPage  = () => {
    return (
        <Container size="lg">
            <TextBlock>
              <img className="fit-picture" src={websterLogo} alt='websterLogo' width={350}></img>
            </TextBlock>
            <img className="fit-picture" src={mainPageElement} alt="mainPageWallPaper" height=""></img>
            <ButtonDiv>
                <StartButton
                color="error"
                variant="outlined"
                >Start</StartButton>
            </ButtonDiv>

        </Container>
    );
  }

export default MainPage;