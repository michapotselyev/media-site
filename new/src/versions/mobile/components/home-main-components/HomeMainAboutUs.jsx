import React from 'react';
import { Box, Typography } from '@mui/material';
import homeMainAboutUsStyle from '../../../../globalStyles/styles/mobile/components/home-main-abous-us-prop';

function HomeMainAboutUs() {
    return (
        <Box component={'section'} sx={ homeMainAboutUsStyle.section }>
            <Box sx={ homeMainAboutUsStyle.section.infoDiv }>
                <Typography sx={ homeMainAboutUsStyle.section.infoDiv.description }>
                    Команда ОВБК МЕДІА працює з 2017 року. За цей час були успішно реалізовані проекти для компаній з банківського та фінансового секторів, паливного та металургійного бізнесів, в сфері освіти
                </Typography>

                <Box sx={ homeMainAboutUsStyle.section.infoDiv.works }>

                </Box>
            </Box>
        </Box>
    );
}

export default HomeMainAboutUs;
