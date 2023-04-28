import { Button, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ButtonDiv } from '../Layout/MainPageStyle';
import { ErrorBox, ErrorButton } from './ErrorPagesStyles';

export const ServerError = () => {
    const navigate = useNavigate();
    return (
        <ErrorBox>
            <Typography variant="h1" color="#850000">
                500
            </Typography>
            <Typography variant="h6" color="white">
                Internal Server Error. If this error occurs again, contact support.
            </Typography>
            <ButtonDiv>
                <ErrorButton variant="contained" onClick={() => navigate(-1)}>Go back</ErrorButton>
                <ErrorButton variant="contained" href='https://t.me/kossyaak'>Contact Support</ErrorButton>
            </ButtonDiv>
        </ErrorBox>
    )
}
