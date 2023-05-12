import {styled} from '@mui/system'
import { Box, Typography } from "@mui/material";

const BoxComp = styled(Box)({
    justifyContent: "center",
    display: "flex",
    alignItems: 'center'
});

const ContainerComp = styled('div')({
    display: 'flex',
    justifyContent: "center",
    width: "100%",
    height: "40px",
    flex: "0 0 auto",
    backgroundColor: "#101010"
})

const ContainerCompLight = styled('div')({
    display: 'flex',
    justifyContent: "center",
    width: "100%",
    height: "40px",
    flex: "0 0 auto",
    backgroundColor: "#f2f3f4",
    color: 'black'
})

const BoxComp2 = styled(Box)({
    justifyContent: "center",
    display: "flex",
    width: "100%",
    alignItems: 'center',
    marginTop: "7px"
});

const TypographyComp = styled(Typography)({
    marginLeft: "10px",
    color: 'white'
});

const TypographyCompLight = styled(Typography)({
    marginLeft: "10px",
    color: 'black'
});



export {BoxComp, BoxComp2, TypographyComp, ContainerComp, ContainerCompLight, TypographyCompLight}
