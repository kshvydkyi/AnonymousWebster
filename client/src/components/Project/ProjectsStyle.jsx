import { styled, textAlign } from '@mui/system';
import { Button, Box, CardActionArea, CardMedia, Chip, Paper } from '@mui/material';

const Container = styled('div')({
    paddingLeft: '7%',
    paddingRight: '7%',
    paddingTop: '2%',
    height: '100%',
    backgroundColor: '#171717'
});

const TextBlock = styled('div')({
    borderLeft: '6px solid white',
    color: 'white',
    fontSize: '30px',
    paddingLeft: '1.5%'
});

const ElementsContainer = styled('div')({
    paddingTop: '2%',
    paddingBottom: '2%',
    color: 'white'
});

// const PaperComponent = styled(Paper)({
//     height: "75%",
//     overflow: 'auto',
//     boxShadow: 'none',
//     backgroundColor: "inherit",
//     "&::-webkit-scrollbar": {
//         width: 5
//     },
//     "&::-webkit-scrollbar-track": {
//         backgroundColor: "#222222"
//     },
//     "&::-webkit-scrollbar-thumb": {
//         backgroundColor: "#850000",
//         borderRadius: 10
//     }
// })

// const DateChip = styled(Chip)({
//     // color: "white",
//     // border: "none",
//     // marginLeft: -2
// })

const CustomBox = styled(Box)({
    background: '#272727',
    color: 'white',
    display: 'flex',
    border: '1px solid white',
    padding: '1vw',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    height: "91%"
})

const CustomCardCreate = styled(CardActionArea)({
    background: '#272727',
    color: 'white',
    textAlign: 'center'
})

const CardMediaCustom = styled(CardMedia)({
    display: 'flex',
    padding: "2em 2em 0em 1.9em", 
    width: "80%",
    height: "80%"
})

const CardMediaCustomCreate = styled(CardMedia)({
    padding: "2em 2em 0em 1.9em",
    width: "80%",
    height: "80%",
})
export { Container, CustomCardCreate, CardMediaCustom, CardMediaCustomCreate, CustomBox, ElementsContainer, TextBlock }