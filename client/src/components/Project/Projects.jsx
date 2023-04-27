import { FC, ReactElement } from 'react';
import { Container, ElementsContainer, TextBlock, PaperComponent } from './ProjectsStyle';
import { List, Card,CardActionArea, CardMedia, CardContent, Typography} from '@mui/material';

function ShowProjects() {
    const projects = [
        { title: "test", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },
        { title: "test", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },
        { title: "test", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },
        { title: "test", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },
        { title: "test", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },
        { title: "test", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },
        { title: "test", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },
        { title: "test", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },


    ]



    return (
        <Container>
            <TextBlock>
                Recent projects
            </TextBlock>
            <ElementsContainer>
                <PaperComponent>
                    <List>
                        {projects ? projects.map((item) => {
                            return (
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="/static/images/cards/contemplative-reptile.jpg"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            )
                        }) : <></>}
                    </List>
                </PaperComponent>
            </ElementsContainer>
        </Container>
    );
};

export default ShowProjects;