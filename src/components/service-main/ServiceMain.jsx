import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import service from '../../styles/service-prop';
import TEXT_CONSTANTS from '../../text-constants';

const serviceData = localStorage.getItem('lung') === 'uk' ?
                        TEXT_CONSTANTS.UK.SERVICE_DATA
                    :
                        TEXT_CONSTANTS.ENG.SERVICE_DATA;

function ServiceMain() {
    const { id } = useParams();
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    if (isNaN(id) || id <= 0 || id > 5) {
        window.location.assign('/error');
        return null;
    }

    const currentService = serviceData[id];
    
    // eslint-disable-next-line
    useEffect(() => { document.title = currentService.title }, []);

    return (
        <main style={{ background: 'linear-gradient(170deg, #0c0b63 64%, #110f8a 30%)' }}>
            <Container maxWidth='xl' sx={ service.container }>
                <Box sx={[ service.wrapper, { flexDirection: isSmallScreen ? 'column' : 'row' } ]}>
                    <Box sx={[ service.imageWrapper, { width: isSmallScreen ? '100%' : '50%', paddingLeft: isSmallScreen ? 0 : '2rem' } ]}>
                        <img src={ currentService.url } alt="service-preview" />
                    </Box>

                    <Box sx={[ service.textWrapper, { width: isSmallScreen ? '100%' : '50%' } ]}>
                        <Typography sx={[ service.title, { textAlign: isSmallScreen ? 'center' : 'initital', marginTop: isSmallScreen ? '1rem' : 0 } ]}>
                            { currentService.title }
                        </Typography>

                        <Box sx={ service.description }>
                            <Box sx={ service.description.paragraph }>
                                <span style={ service.description.paragraph.marker }>&#9737;</span>
                                <Typography>
                                    { currentService.description.p1 }
                                </Typography>
                            </Box>

                            <Box sx={ service.description.paragraph }>
                                <span style={ service.description.paragraph.marker }>&#9737;</span>
                                <Typography>
                                    { currentService.description.p2 }
                                </Typography>
                            </Box>

                            <Box sx={ service.description.paragraph }>
                                <span style={ service.description.paragraph.marker }>&#9737;</span>
                                <Typography>
                                    { currentService.description.p3 }
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </main>
    );
}

export default ServiceMain;
