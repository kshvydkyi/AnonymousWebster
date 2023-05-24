import moment from 'moment';
import {GET_BY_USER_ID, GET_PROJECT_URL} from '../../api/routes'
import axios from '../../api/axios';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import {Box, Grid, useMediaQuery, Button} from '@mui/material';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import { CreateBlock, Image, TypographyData, TextBlock, Container, CustomBox, ElementsContainer, TypographyName, BoxText} from '../../styles/UserProjectsStyle';

export const UserProjects = () => {
    const navigate = useNavigate();
    const matches = useMediaQuery('(min-width:1024px)');

    const [isLoading, setLoading] = useState(false);
    const [projects, setProjects] = useState([]);
    const currentUser = JSON.parse(localStorage.getItem('autorized'));

    const fetchGet = async () => {
        setLoading(true);
        try {
            const response = await axios.get(GET_BY_USER_ID + currentUser.userId, {withCredentials: true});
            setProjects(response?.data?.values?.values)
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false)
        };
    }

    useEffect(() => {
        fetchGet();
    }, []);

    function DateFunc(date){
        return moment(date).format('DD.MM.YYYY HH:mm');
    }

      
    return isLoading ? <></> : (
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
                        {projects ? Object.values(projects).map((item) => {
                            return (
                                 <React.Fragment key={item.id + ''}> 
                                    <Grid item xs={ matches ? 2 : 4 } >
                                        <Box>
                                            <CustomBox onClick={() => navigate(`/project/${item.id}`)}>
                                                {/* <Image src="/test/image2.png" alt=""/> */}
                                                    <TypographyName gutterBottom variant="h5" component="div">
                                                            {item.title.length < 7 ? item.title : `${item.title.slice(0, 7)}...`}
                                                    </TypographyName>
                                                    <BoxText >
                                                        <TypographyData>
                                                                {DateFunc(projects.date_upd)}
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