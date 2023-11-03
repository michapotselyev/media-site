const headerStyle = {
    header: {
        width: '100%',
        padding: '1.2rem 2rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        zIndex: 10001
    },
    logoBox: {
        zIndex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

        '& > [id=logo]': {
            width: '100px',
            height: '100px',
            transition: 'transform ease-in-out 0.2s',

            '&:hover': {
                transform: 'scale(1.1)'
            }
        },

        '& > [id=logo-text]': {
            width: '135px',
            height: '80px',
            objectFit: 'cover',
        }
    },
    nav: {
        position: 'absolute',
        top: '1.2rem',
        bottom: '1.2rem',
        right: '2rem',
        left: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    propDiv: {
        height: 'calc(100% - 2.8rem - 60px)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '1rem',
        
        list: {
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            gap: '2rem',

            '& > li > a': {
                textDecoration: 'none',
                color: 'white',

                '&:hover': {
                    textDecoration: 'underline'
                }
            },

            '& > li > a > p': {
                fontSize: '1.2rem',
                fontWeight: '500',
                textAlign: 'center',
                color: 'white'
            },

            button: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '13vw',

                '& > p': {
                    fontSize: '1.2rem',
                    fontWeight: '500',
                    textAlign: 'center',
                    color: 'white'
                },

                '& > svg': {
                    width: '35px',
                    height: '35px',
                    color: 'white'
                },

                '&:hover': {
                    borderBottom: '2px solid white'
                }
            },

            collapseItem: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'start',
                alignItems: 'center',
                gap: '0.5rem',
                borderBottom: '0.5px solid white',
                margin: '1rem 0',

                '& > p': {
                    fontSize: '1.2rem',
                    fontWeight: '500',
                    textAlign: 'center',
                    color: 'white'
                },

                '& > img': {
                    width: '30px',
                    height: '30px'
                },

                '&:hover': {
                    transform: 'scaleX(1.05)'
                }
            }
        },

        signButtons: {
            height: '20%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            
            '& > div > p': {
                fontSize: '1.2rem',
                fontWeight: '600',
                textAlign: 'center'
            },

            signUp: {
                color: 'white',
                background: 'insert',
                borderRadius: '20px',
                padding: '0.5rem 0.75rem',
                border: '1px solid white',
                boxShadow: '0px 0px 5px 1px rgb(255,255,255)',
                transition: 'all 0.2s ease-in-out',

                '&:hover': {
                    transform: 'scale(1.07)'
                },
                
                '&:active': {
                    transform: 'scale(0.8)'
                }
            }
        }
    }
}

export default headerStyle;
