import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useRouteError } from 'react-router-dom';

function ErrorMainTablet() {
    const error = useRouteError();

    useEffect(() => {
        if (window.location.pathname !== '/error') {
            window.location.assign('/error');
        }
    }, []);

    return (
        <Box
            component={'main'}
            sx={{
                height: '100vh',
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2))',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Typography sx={{ fontSize: '4rem', textAlign: 'center' }}>
                { error.status }
            </Typography>

            <Typography sx={{ fontSize: '1.5rem', textAlign: 'center' }}>
                { 
                    error.status === 404 ?
                    'The page you\'re looking for doesn\'t exist.'
                    :
                    'Something went wrong...'
                }
            </Typography>
        </Box>
    );
}

export default ErrorMainTablet;
