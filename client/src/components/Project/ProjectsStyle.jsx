import { styled } from '@mui/system';
import { Button, Card, Chip, Paper } from '@mui/material';

const Container = styled('div')({
    paddingLeft: '7%',
    paddingRight: '7%',
    paddingTop: '2%',
    height: '100%',
    backgroundColor: '#131313'
});

const TextBlock = styled('div')({
    borderLeft: '6px solid white',
    color: 'white',
    fontSize: '30px',
    paddingLeft: '1.5%'
});

const ElementsContainer = styled('div')({
    paddingTop: '2%',
    paddingBottom: '2%',
    color: 'white'
});

const ProjectCard = styled(Card)({
    maxWidth: "340px",
    backgroundColor: "#101010",
    color: "white",
})
const PaperComponent = styled(Paper)({
    maxHeight: 550,
    overflow: 'auto',
    padding: "2%",
    backgroundColor: "inherit",
    "&::-webkit-scrollbar": {
        width: 5
    },
    "&::-webkit-scrollbar-track": {
        backgroundColor: "#222222"
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#850000",
        borderRadius: 10
    }
})

const DateChip = styled(Chip)({
    color: "white",
    border: "none",
    padding: 0,
    margin: 0
})
export { Container, ElementsContainer, TextBlock, PaperComponent, ProjectCard, DateChip }