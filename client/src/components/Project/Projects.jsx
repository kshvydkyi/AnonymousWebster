import { FC, ReactElement } from 'react';
import { Container, CustomCard, CustomCardCreate, ElementsContainer, CardMediaCustomCreate, TextBlock, PaperComponent, DateChip, CardMediaCustom } from './ProjectsStyle';
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

    return (
        <Container>
            <TextBlock>
                Recent projects
            </TextBlock>
            <ElementsContainer>
                <PaperComponent className='project-paper'>
                    <Grid
                        container
                        // direction="row"
                        // justifyContent="flex-start"
                        // alignItems="flex-start"
                        // // columns={16}
                        spacing={2}>
                        <Grid item md={2} >
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
                        </Grid>
                        {projects ? projects.map((item) => {
                            return (
                                <Grid item md={2}>
                                        <CustomCard raised={true}>
                                            <CardMediaCustom 
                                                component="img"
                                                image={testPic}
                                                alt="projectPic"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {item.title.length < 13 ? item.title : `${item.title.slice(0, 13)}...`}
                                                </Typography>
                                                <Typography>
                                                    {item.date_upd}
                                                </Typography>
                                            </CardContent>
                                        </CustomCard>
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