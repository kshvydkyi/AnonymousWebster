import {styled} from '@mui/system'
import {Box, TextField, Button} from '@mui/material';

const Body = styled('div')({
    backgroundColor: '#131313',
    color: 'white',
    height:"100%"
});

const BodyLight = styled('div')({
    backgroundColor: 'white',
    color: 'black',
    height:"100%"
});

const BoxEl = styled(Box)({
    flexShrink: 1,
    padding: '30px',
    '& .MuiTextField-root': { m: 1, width: '35%' },
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

const TextFieldElLight = styled(TextField)({
    label: {color: 'black'},
    input: { color: 'black', margin: '3px' },
    margin: '10px'
});

const ButtonEl = styled(Button)({
    backgroundColor: '#171717',
    margin: '15px',
    color:"white"
});

const ButtonElLight = styled(Button)({
    backgroundColor: 'white',
    margin: '15px',
    color:"black"
});


const ErrWarning = styled('p')({
    color: 'red',
    padding: '15px'
});

const SpanEl = styled('span')({
    margin: '10px',
    color: 'white'
});
const SpanElLight = styled('span')({
    margin: '10px',
    color: 'black'
});

export {Body, BodyLight, TextFieldElLight, ButtonElLight, BoxEl,TextFieldEl, ButtonEl, ErrWarning, SpanEl, SpanElLight}

