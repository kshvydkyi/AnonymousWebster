import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
export const NotFound = () => {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >

            <Typography variant="h1" color="white">
                404
            </Typography>
            <Typography variant="h6" color="white">
                The page you’re looking for doesn’t exist.
            </Typography>
            <Button variant="contained" onClick={() => navigate(-1)}>Go back</Button>

        </Box>
    )
}
