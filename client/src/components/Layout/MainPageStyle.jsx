import {styled} from '@mui/system'
import {Button} from '@mui/material';

const Container = styled('div')({
    position: 'relative',
    textAlign: 'center',
    color: 'white',
});

const TextBlock = styled('div')({
    position: 'absolute',
    top: '8px',
    left: '16px',
    width: '500px'
});

const TextDiv = styled('div')({
    padding: '5px'
});

const ButtonDiv = styled('div')({
    position: 'absolute',
    top: '50%',
    left: '75%',
    transform: 'translate(-50%, -75%)',
});

const StartButton = styled(Button)({
    width: '300px',
    height: '150px',
    letterSpacing: '1.2rem',
    fontSize: '2em',
    color: 'white',
    border: '2px solid white'
});



export {Container, TextBlock, TextDiv, ButtonDiv, StartButton}
