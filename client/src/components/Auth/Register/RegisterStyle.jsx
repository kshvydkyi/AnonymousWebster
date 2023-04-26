import {styled} from '@mui/system'
import {Box, TextField, Button} from '@mui/material';

const Body = styled('body')({
    backgroundColor: '#373C3D',
    color: 'white',
    padding: '3px'
});

const BoxEl = styled(Box)({
    padding: '30px',
    '& .MuiTextField-root': { m: 1, width: '25ch' },
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
});

const TextFieldEl = styled(TextField)({
    input: { color: 'white', margin: '3px' },
});

const ButtonEl = styled(Button)({
    backgroundColor: 'grey',
    margin: '15px'
});

const ErrWarning = styled('p')({
    color: 'red',
    padding: '15px'
});

export {Body, BoxEl,TextFieldEl, ButtonEl, ErrWarning}

