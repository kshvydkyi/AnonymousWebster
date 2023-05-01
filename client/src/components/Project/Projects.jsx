import React, { FC, ReactElement } from 'react';
import { Container, CustomBox, ElementsContainer, CustomBoxCreate, TextBlock, TypographyName} from './ProjectsStyle';
import {Box, Typography, Grid, useMediaQuery} from '@mui/material';
import newProjectIcon from '../../assets/ProjectPage/newProgectIcon.png'
import { padding } from '@mui/system';
function ShowProjects() {
    const matches = useMediaQuery('(min-width:1024px)');
    const projects = [
        { id: 1, title: "aaaaaaaaaaaaaaaaaaaaa", description: "description test", json_file: "test_file.json", date_upd: "1" },
        { id: 2, title: "aaaaaaaaaaaaaaaaaaaaa", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },
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
                                <Grid item xs={ matches ? 2 : 4 } >
                                    <CustomBoxCreate>
                                        <img src="/test/image2.png" alt=""/>

                                        <TypographyName gutterBottom variant="h5" component="div" style={{whiteSpace:'pre-wrap'}}>
                                            New project
                                        </TypographyName>
                                    </CustomBoxCreate>
                                   
                                </Grid>
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
                                            <Box style={{border: '1px solid white'}}>
                                                <TypographyName gutterBottom variant="h5" component="div" style={{wordWrap:'break-word'}}>
                                                        {item.title.length < 13 ? item.title : `${item.title.slice(0, 13)}...`}
                                                </TypographyName>
                                                <Typography style={{wordWrap:'break-word'}}>
                                                        {item.date_upd}
                                                </Typography>
                                            </Box>
                                            
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