import { Card, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import {styled} from '@mui/system'

const CreateBox = styled('div')({
    paddingLeft: '7%',
    paddingRight: '7%',
    paddingTop: '2%',
    height: '100%',
    backgroundColor: '#171717'
});
const Settings = styled('div')({
    display: "flex"
});
const TypographyBox = styled('div')({
    borderLeft: '6px solid white',
    color: 'white',
    fontSize: '30px',
    paddingLeft: '1.5%'
});
const CustomToggleButtonGroup = styled(ToggleButtonGroup)({
    marginTop: '30px',
    zIndex: "1",
    marginBottom: "30px"
})
const CustomToggleButton = styled(ToggleButton)({
    color: "white",
    paddingLeft: "10px",
    paddingRight: "10px",
    "& .Mui-selected": {
        color: "white",
        backgroundColor:"gray"
    }

})

const FormatCard = styled(Card)({
    minWidth: "200px",
    maxWidth: "340px",
    backgroundColor: "#101010",
    color: "white",
    padding: "15px",
    textAlign: "center",
    transition:  "0.4s ease-in-out",
    ":hover": {
        border: "1px solid white",
        transition:  "0.4s ease-in-out"
    }
})

const FormatTitle = styled(Typography)({
    paddingTop: "30px",
    paddingBottom: "30px"
})
export {CreateBox, TypographyBox, CustomToggleButton, CustomToggleButtonGroup, FormatCard, FormatTitle, Settings}