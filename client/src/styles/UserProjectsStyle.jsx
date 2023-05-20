import { styled } from '@mui/system';
import { Typography, Box } from '@mui/material';

const Container = styled('div')({
    position: 'relative',
    paddingLeft: '7%',
    paddingRight: '7%',
    paddingTop: '2%',
    height: '100%',
    backgroundColor: '#171717'
});

const TextBlock = styled('div')({
    position: 'absolute',
    borderLeft: '6px solid white',
    color: 'white',
    fontSize: '30px',
    paddingLeft: '1.5%',
});

const CreateBlock = styled('div')({
    position: 'absolute',
    display: 'flex',
    justifyContent: 'flex-end',
    color: 'white',
    fontSize: '30px',
    paddingRight: '7%',
    right: '0'
});

const ElementsContainer = styled('div')({
    marginTop: '50px',
    paddingTop: '2%',
    paddingBottom: '2%',
    color: 'white'
});

const BoxText = styled(Box)({
    background: '#272727',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    height: "91%"
})

const CustomBox = styled(Box)({
    background: '#272727',
    color: 'white',
    display: 'flex',
    padding: '1vw 1vw 0vw 1vw',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: '5px',
})

const TypographyName = styled(Typography)({
    wordWrap:'break-word',
    paddingTop: '0.25vw',
    fontSize: '20px',
    fontWeight: 'bold',
    background: '#272727',
})

const TypographyData = styled(Typography)({
    wordWrap:'break-word',
    paddingBottom: '0.2vw',
    color: '#808080',
    fontSize: '14px',
    fontWeight: 'bold'
})

const Image = styled('img')({
    height: '200px'
})

export { CreateBlock, Image, TypographyData, Container, BoxText, TypographyName, CustomBox, ElementsContainer, TextBlock }