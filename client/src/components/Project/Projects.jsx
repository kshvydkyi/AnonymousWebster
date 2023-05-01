import React, { FC, ReactElement } from 'react';
import { Container, CustomBox, CustomCardCreate, ElementsContainer, CardMediaCustomCreate, TextBlock, CardMediaCustom } from './ProjectsStyle';
import { List, Card, CardActionArea, CardMedia, CardContent, Typography, Chip, Grid, Box, useMediaQuery} from '@mui/material';
import newProjectIcon from '../../assets/ProjectPage/newProgectIcon.png'
function ShowProjects() {
    const matches = useMediaQuery('(min-width:1024px)');
    const projects = [
        { id: 1, title: "1", description: "description test", json_file: "test_file.json", date_upd: "1" },
        { id: 2, title: "1", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },
        { id: 3, title: "test", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },
        { id: 4, title: "test", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },
        { id: 5, title: "test", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },
        { id: 6, title: "test", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },
        { id: 7, title: "test", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },
        { id: 9, title: "test", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },
        { id: 10, title: "test", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },
        { id: 11, title: "test", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },
        { id: 12, title: "test", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },
        { id: 13, title: "test", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },
        { id: 14, title: "test", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },
    ]

    return (
        <Container>
            <TextBlock>
                Recent projects
            </TextBlock>
            <ElementsContainer>
                    <Grid
                        container
                        spacing={3}>
                        {/* <Grid item md={2} sx={{border: '1px solid white'}}>
                                <CustomCardCreate raised={true}>
                                    <CardMediaCustomCreate
                                        component="img"
                                        image={newProjectIcon}
                                        alt="projectPic"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            New project
                                        </Typography>
                                        <Typography>
                                        aboba
                                        </Typography>
                                    </CardContent>
                                </CustomCardCreate>
                        </Grid> */}
                        {projects ? projects.map((item) => {
                            return (
                                <React.Fragment key={item.id + ''}>
                                    <Grid item xs={ matches ? 2 : 4 } >
                                        <CustomBox >
                                            <img src="/test/image2.png" alt=""/>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {item.title.length < 13 ? item.title : `${item.title.slice(0, 13)}...`}
                                                </Typography>
                                                <Typography>
                                                    {item.date_upd}
                                                </Typography>
                                            </CardContent>
                                        </CustomBox>
                                    </Grid>
                                </React.Fragment>
                            )
                        }) : <></>}
                    </Grid>
            </ElementsContainer>
        </Container>
    );
};

export default ShowProjects;