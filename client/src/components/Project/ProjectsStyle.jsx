import {styled} from '@mui/system';
import {Button, Paper} from '@mui/material';

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
    fontSize: '40px',
    paddingLeft: '1.5%'
});

const ElementsContainer = styled('div')({
    paddingTop: '2%',
    color: 'white'
});

const PaperComponent = styled(Paper)({
    maxHeight: 550, 
    overflow: 'auto'
})
export {Container, ElementsContainer, TextBlock, PaperComponent}