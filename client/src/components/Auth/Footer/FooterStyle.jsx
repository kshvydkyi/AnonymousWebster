import {styled} from '@mui/system'
import { Box, Typography, Paper } from "@mui/material";

const PaperComp = styled(Paper)({
    marginTop: 'calc(10% + 60px)',
    backgroundColor: '#1E1E1E',
    position: 'fixed',
    width: '100%',
    bottom: 0,
});

const BoxComp = styled(Box)({
    flexGrow: 1,
    justifyContent: "center",
    display: "flex",
    my:1
});

const BoxComp2 = styled(Box)({
    flexGrow: 1,
    justifyContent: "center",
    display: "flex",
    mb: 2,
});

const TypographyComp = styled(Typography)({
    color: 'white'
});



export {PaperComp, BoxComp, BoxComp2, TypographyComp}
