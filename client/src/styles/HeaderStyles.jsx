import {styled} from '@mui/system'
import {Button, Toolbar, Drawer} from '@mui/material';

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

const LogOutBtn = styled(Button)({
    outline: 'none',
    border: '0px black',
    margin: 0,
    color: "white",

});

const UserInfo = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '5px',
});

const DrawerEl = styled(Drawer)({
    '& .MuiDrawer-paper': {   
        backgroundColor: "#131313",
        color: "white", 
        padding: '10px'
    },
});

export {MainHeader, MenuButton, MainButtons, Logo, ToolbarStyled, LogOutBtn, UserInfo, DrawerEl}