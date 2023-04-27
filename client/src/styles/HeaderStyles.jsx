import {styled} from '@mui/system'
import {Button, Toolbar} from '@mui/material';

const MainHeader = styled('div')({
    color: 'white',
    backgroundColor: '#101010',
    padding: 3,
    width: "100%",
    position: 'fixed',
    overflow: "hidden",
    text: 'right'
    
});

const MenuButton = styled(Button)({
    padding: '10px',
});

const MainButtons = styled('div')({
    // position: 'relative',
    // left: 'calc(100% - 276px)'
});

const ToolbarStyled = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"

})

const Logo = styled('span')({
    position:'absolute',
    marginLeft: '10px'
});

export {MainHeader, MenuButton, MainButtons, Logo, ToolbarStyled}
