import {Container, styled} from '@mui/system'
import { Box, Typography, Paper } from "@mui/material";

const PaperComp = styled(Paper)({
    marginTop: 'calc(10% + 60px)',
    backgroundColor: '#1E1E1E',
    position: 'fixed',
    width: '100%',
    bottom: 0,
});

const BoxComp = styled(Box)({
    justifyContent: "center",
    display: "flex",
    alignItems: 'center'
    
});

const ContainerComp = styled(Container)({
    display: 'flex'
})

const BoxComp2 = styled(Box)({
    flexGrow: 1,
    justifyContent: "center",
    display: "flex",
    alignItems: 'center'
});

const TypographyComp = styled(Typography)({
    color: 'white'
});



export {PaperComp, BoxComp, BoxComp2, TypographyComp, ContainerComp}
