import {styled} from '@mui/system'
import {Button} from '@mui/material';

const MainHeader = styled('div')({
    color: 'white',
    backgroundColor: '#1E1E1E',
    padding: 8,
    borderRadius: 4,
    position: 'relative',
    text: 'right'
});

const MenuButton = styled(Button)({
    padding: '20px',
});

const MainButtons = styled('div')({
    position: 'relative',
    left: 'calc(100% - 276px)'
});


const Logo = styled('span')({
    position:'absolute',
    marginLeft: '10px'
});

export {MainHeader, MenuButton, MainButtons, Logo}
