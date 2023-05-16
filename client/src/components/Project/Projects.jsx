import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import {Box, Grid, useMediaQuery, Button} from '@mui/material';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import { CreateBlock, Image, TypographyData, TextBlock, Container, CustomBox, ElementsContainer, TypographyName, BoxText} from './ProjectsStyle';

function ShowProjects() {
    const navigate = useNavigate()

    const matches = useMediaQuery('(min-width:1024px)');
    const projects = [
        { id: 1, title: "Aboba", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },
        { id: 2, title: "aaaaaaaaaaaaaaaaaaaaa", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },
        { id: 3, title: "test", description: "description test", json_file: "test_file.json", date_upd: "2023-10-27T10:01:32+0000" },
        { id: 4, title: "test", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },
        { id: 5, title: "test", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },
        { id: 6, title: "test", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },
        { id: 7, title: "test", description: "description test", json_file: "test_file.json", date_upd: "2023-10-27T10:01:32+0000" },
        { id: 9, title: "test", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },
        { id: 10, title: "test", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },
        { id: 11, title: "test", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },
        { id: 12, title: "test", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },
        { id: 13, title: "test", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },
        { id: 14, title: "test", description: "description test", json_file: "test_file.json", date_upd: "2023-04-27T10:01:32+0000" },
    ]

    function DateFunc(date){
        return moment(date).format('DD.MM.YYYY HH:mm');
    }
      
    return (
        <Container>
            <TextBlock>
                Recent projects
            </TextBlock>
            <CreateBlock>
                <Button onClick={() => navigate('/create-project')}>
                    <NoteAddOutlinedIcon/>
                    New project
                </Button>
            </CreateBlock>
            <ElementsContainer>
                    <Grid
                        container
                        spacing={3}>
                        {projects ? projects.map((item) => {
                            return (
                                <React.Fragment key={item.id + ''}>
                                    <Grid item xs={ matches ? 2 : 4 } >
                                        <Box>
                                            <CustomBox>
                                                <Image src="/test/image2.png" alt=""/>
                                                    <TypographyName gutterBottom variant="h5" component="div">
                                                            {item.title.length < 7 ? item.title : `${item.title.slice(0, 7)}...`}
                                                    </TypographyName>
                                                    <BoxText >
                                                        <TypographyData>
                                                                {DateFunc(item.date_upd)}
                                                        </TypographyData>
                                                    </BoxText>
                                            </CustomBox>
                                        </Box>
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