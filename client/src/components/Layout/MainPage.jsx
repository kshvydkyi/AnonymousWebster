import React, { FC, ReactElement } from "react";
import mainPageElement from '../../assets/header_and_mainPage/mainPageElementAnon.jpg';
import websterLogo from '../../assets/header_and_mainPage/Logo.png'
import {Container, TextBlock, TextDiv, ButtonDiv, StartButton} from './MainPageStyle';

function MainPage() {
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