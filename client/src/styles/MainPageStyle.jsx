import {styled} from '@mui/system'
import {Button} from '@mui/material';


const ContainerDark = styled('div')({
    // position: 'relative',
    textAlign: 'center',
    color: 'white',
    display: "flex",
    alignItems: "center",
    justifyContent:"space-around",
    backgroundColor: "black"
});

const ContainerLight = styled('div')({
    // position: 'relative',
    textAlign: 'center',
    color: 'black',
    display: "flex",
    alignItems: "center",
    justifyContent:"space-around",
    backgroundColor: "white"
});

const TextBlock = styled('div')({
    // position: 'absolute',
    // top: '8px',
    // left: '16px',
    width: '300px'
});

const TextDiv = styled('div')({
    // padding: '5px'
});

const ButtonDiv = styled('div')({
    // position: 'absolute',
    // top: '50%',
    // left: '75%',
    // transform: 'translate(-50%, -75%)',
});

const StartButton = styled(Button)({
    width: '300px',
    height: '50px',
    letterSpacing: '1.2rem',
    fontSize: '2em',
    color: 'white',
    border: '2px solid white'
});

const StartButtonLight = styled(Button)({
    width: '300px',
    height: '50px',
    letterSpacing: '1.2rem',
    fontSize: '2em',
    color: 'black',
    border: '2px solid black'
});



export {ContainerDark, ContainerLight, StartButtonLight, TextBlock, TextDiv, ButtonDiv, StartButton}
