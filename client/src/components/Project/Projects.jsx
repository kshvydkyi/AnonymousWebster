import { FC, ReactElement } from 'react';
import { Container, ElementsContainer, TextBlock, PaperComponent, ProjectCard, DateChip } from './ProjectsStyle';
import { List, Card, CardActionArea, CardMedia, CardContent, Typography, Chip, Grid } from '@mui/material';
import testPic from '../../assets/test/image 2.png'
import newProjectIcon from '../../assets/ProjectPage/newProgectIcon.png'
function ShowProjects() {
    const projects = [
        { id: 1, title: "test nfvkdslvnmdskl nfkdslnfkdslfndsklfnkdslfn dsml fsdlnfdsklfndskls", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },
        { id: 2, title: "test", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },
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


    //fdsfdsfdfdsfds
    return (
        <Container>
            <TextBlock>
                Recent projects
            </TextBlock>
            <ElementsContainer>
                <PaperComponent className='project-paper'>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={2}>


                        <Grid item xs={12} sm={8} md={6} lg={4} xl={2}>
                            <ProjectCard >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="182"
                                        image={newProjectIcon}
                                        alt="projectPic"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        New project
                                        </Typography>
                                        <Typography variant="subtitle1" color="white" >

                                        </Typography>

                                    </CardContent>
                                </CardActionArea>
                            </ProjectCard>
                        </Grid>
                        {projects ? projects.map((item) => {
                            return (
                                <Grid item xs={12} sm={8} md={6} lg={4} xl={2}>
                                    <ProjectCard >
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="150"
                                                image={testPic}
                                                alt="projectPic"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {item.title.length < 13 ? item.title : `${item.title.slice(0, 13)}...`}
                                                </Typography>
                                                <DateChip label={item.date_upd} variant="outlined" />
                                            </CardContent>
                                        </CardActionArea>
                                    </ProjectCard>
                                </Grid>
                            )
                        }) : <></>}

                    </Grid>
                </PaperComponent>
            </ElementsContainer>
        </Container>
    );
};

export default ShowProjects;