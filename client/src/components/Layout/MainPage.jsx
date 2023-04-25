import React, { FC, ReactElement } from "react";
import mainPageWallPaper from '../../assets/mainPageWallPaper.png';
import {Container, TextBlock, TextDiv, ButtonDiv, StartButton} from './MainPageStyle';

function MainPage() {
    return (
        <Container>
            <img className="fit-picture" src={mainPageWallPaper} alt="mainPageWallPaper" width = '100%' height = '100%'></img>
            <TextBlock>
                <TextDiv>
                Ласкаво просимо до Anonymous Webster - ідеального веб-додатку для всіх, хто хоче редагувати свої фотографії з легкістю та ефективністю. З нашими потужними інструментами для редагування, ви зможете створювати красиві фото, які дійсно будуть виділятися.
                </TextDiv>
                <TextDiv>
                Наш додаток містить широкий спектр функцій, включаючи кропіння та розміщення, налаштування кольору та тону, видалення дефектів та додавання тексту та малюнків. Навіть якщо ви новачок у фотографії, наш інтуїтивно зрозумілий інтерфейс зробить процес редагування простим та приємним.
                </TextDiv>
                <TextDiv>
                Збереження та завантаження фотографій з Anonymous Webster дуже легке, що дозволяє швидко ділитися своїми редагованими фото з друзями та родиною. Наш додаток також доступний на будь-якому пристрої з Інтернет-підключенням, що дозволяє вам редагувати фото коли завгодно та де завгодно.
                </TextDiv>
                <TextDiv>
                Не чекайте більше! Приєднуйтесь до Anonymous Webster прямо зараз та почніть редагувати свої фотографії в інноваційний та ефективний спосіб!
                </TextDiv>
            </TextBlock>

            <ButtonDiv>
                <StartButton
                color="secondary"
                variant="outlined"
                >Start</StartButton>
            </ButtonDiv>

        </Container>
    );
  }

export default MainPage;