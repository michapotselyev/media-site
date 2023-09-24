import { AppBar, Box, Button, Container, IconButton, Link, Toolbar } from '@mui/material';
import React from 'react';
import headerProp from '../styles/header-prop';

function Header() {
    return (
        <AppBar position="static" sx={{ background: 'linear-gradient(45deg, #0c0b63 0%, #110f8a 70%, #0e0e30 100%)' }}>
            <Container maxWidth='xl' sx={{ padding: '1.5rem' }}>
                <Toolbar sx={ headerProp.toolBar }>
                    <Box sx={ headerProp.logos }>
                        <Link edge="start" aria-label="logo" sx={[ headerProp.iconButton, { marginRight: '2rem' } ]}>
                            <img src='logo.png' alt="Логотип" width="70" height="70" />
                        </Link>

                        <Link edge="start" aria-label="logo" sx={ headerProp.iconButton }>
                            <img src="logo-text.png" alt="Підтримка України" width="130" height="130" />
                        </Link>
                    </Box>
                    
                    <Box component='nav' sx={ headerProp.nav }>
                        <Link href='#about-us' sx={ headerProp.nav.link }>Про нас</Link>
                        <Link sx={ headerProp.nav.link }>Наші послуги</Link>
                        <Link sx={ headerProp.nav.link }>Реалізовані проекти</Link>

                        <Button
                            disableRipple
                            disableElevation
                            disableFocusRipple
                            disableTouchRipple
                            variant='outlined'
                            sx={ headerProp.button }
                        >
                            Зв'язатися з нами
                        </Button>

                        <IconButton disableRipple sx={{ border: '1px solid #2c9ff2' }}>
                            <img src="ukraine_flag_flags_18063.png" alt="Ukr Flag" />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
