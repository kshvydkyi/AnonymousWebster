import moment from 'moment';
import { CREATE_PROJECT_URL, GET_BY_USER_ID, GET_PROJECT_URL } from '../../api/routes'
import axios from '../../api/axios';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Box, Grid, useMediaQuery, Button, Popover, IconButton } from '@mui/material';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import { CreateBlock, Image, TypographyData, TextBlock, Container, CustomBox, ElementsContainer, TypographyName, BoxText, PopoverBox } from '../../styles/UserProjectsStyle';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
export const UserProjects = () => {
	const navigate = useNavigate();
	const matches = useMediaQuery('(min-width:1024px)');

	const [isLoading, setLoading] = useState(false);
	const [projects, setProjects] = useState([]);
	const currentUser = JSON.parse(localStorage.getItem('autorized'));

	const fetchGet = async () => {
		setLoading(true);
		try {
			const response = await axios.get(GET_BY_USER_ID + currentUser.userId, { withCredentials: true });
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

	function DateFunc(date) {
		return moment(date).format('DD.MM.YYYY HH:mm');
	}
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
	const deleteProject = async(projectID) => {
		try {
			const response = await axios.delete(`${CREATE_PROJECT_URL}${projectID}/${currentUser.accessToken}`)
			console.log(response)
		} catch (error) {
			console.log(error)
		}
}
	return isLoading ? <></> : (
		<Container>
			<TextBlock>
				Recent projects
			</TextBlock>
			<CreateBlock>
				<Button onClick={() => navigate('/create-project')}>
					<NoteAddOutlinedIcon />
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
								<Grid item xs={matches ? 2 : 4} >
									<Box>
										
										<CustomBox >
											<PopoverBox>
											<IconButton aria-describedby={id} variant="contained" onClick={handleClick}>
												<MoreVertOutlinedIcon/>
											</IconButton>
											
											<Popover
												id={id}
												open={open}
												anchorEl={anchorEl}
												onClose={handleClose}
												anchorOrigin={{
													vertical: 'bottom',
													horizontal: 'left',
												}}
											>
												<Button onClick={() => deleteProject(item.id)}>Delete</Button>
											</Popover>
											</PopoverBox>
											{/* <Image src="/test/image2.png" alt=""/> */}
											<TypographyName gutterBottom variant="h5" component="div" onClick={() => navigate(`/project/${item.id}`)}>
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