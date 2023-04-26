import {Container, styled} from '@mui/system'
import { Box, Typography, Paper } from "@mui/material";

const BoxComp = styled(Box)({
    justifyContent: "center",
    display: "flex",
    alignItems: 'center'
    
});

const ContainerComp = styled(Container)({
    display: 'flex'
})

const BoxComp2 = styled(Box)({
    justifyContent: "center",
    display: "flex",
    alignItems: 'center'
});

const TypographyComp = styled(Typography)({
    color: 'white'
});



export {BoxComp, BoxComp2, TypographyComp, ContainerComp}
