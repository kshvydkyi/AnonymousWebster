import { Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ButtonDiv } from '../Layout/MainPageStyle';
import { ErrorBox, ErrorButton } from './ErrorPagesStyles'

export const AccesDenied = () => {
    const navigate = useNavigate();

    return (
        <ErrorBox>
        <Typography variant="h1" color="#850000">
            403
        </Typography>
        <Typography variant="h6" color="white">
        Access denied. It looks like you are trying to perform an action without the appropriate access. 
        Contact support if this is an error.
        </Typography>
        <ButtonDiv>
            <ErrorButton variant="contained" onClick={() => navigate(-1)}>Go back</ErrorButton>
            <ErrorButton variant="contained" href='https://t.me/kossyaak'>Contact Support</ErrorButton>
        </ButtonDiv>
    </ErrorBox>
    )
}
