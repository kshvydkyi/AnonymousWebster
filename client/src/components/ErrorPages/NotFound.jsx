import React from 'react'
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ErrorBox, ErrorButton } from './ErrorPagesStyles';
export const NotFound = () => {
    const navigate = useNavigate();
    return (
        <ErrorBox>
            <Typography variant="h1" color="white">
                404
            </Typography>
            <Typography variant="h6" color="white">
                The page you’re looking for doesn’t exist.
            </Typography>
            <ErrorButton variant="contained" onClick={() => navigate(-1)}>Go back</ErrorButton>

        </ErrorBox>
    )
}
