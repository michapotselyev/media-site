import React from 'react';
import { Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import headerStyle from '../../../globalStyles/styles/mobile/header-prop';

function HeaderMobile() {
    return (
        <Box component={'header'} sx={ headerStyle.header }>
            <Box sx={ headerStyle.logoBox }>
                <Box component={'img'} src={'/assets/logo.png'} alt='logo' />
            </Box>

            <Box component={'section'} sx={ headerStyle.nav }>
                <MenuIcon />
            </Box>
        </Box>
    );
}

export default HeaderMobile;
