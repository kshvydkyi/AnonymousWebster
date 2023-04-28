import { styled } from '@mui/system';
import { Box, Button } from '@mui/material';

const ErrorBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
})

const ErrorButton = styled(Button)({
    backgroundColor: '#171717',
    margin: '15px'
}) 

export {ErrorBox, ErrorButton}