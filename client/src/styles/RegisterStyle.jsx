import {styled} from '@mui/system'
import {Box, TextField, Button} from '@mui/material';

const Body = styled('body')({
    backgroundColor: '#131313',
    color: 'white',
    padding: '3px',
});

const BoxEl = styled(Box)({
    flexShrink: 1,
    padding: '30px',
    '& .MuiTextField-root': { m: 1, width: '25%' },
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
});

const TextFieldEl = styled(TextField)({
    label: {color: 'white'},
    input: { color: 'white', margin: '3px' },
    margin: '10px'
});

const ButtonEl = styled(Button)({
    backgroundColor: '#171717',
    margin: '15px'
});

const ErrWarning = styled('p')({
    color: 'red',
    padding: '15px'
});

const SpanEl = styled('span')({
    margin: '10px'
});

export {Body, BoxEl,TextFieldEl, ButtonEl, ErrWarning, SpanEl}

