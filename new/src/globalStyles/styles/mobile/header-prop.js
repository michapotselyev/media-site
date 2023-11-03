const headerStyle = {
    header: {
        width: '100%',
        padding: '0.7rem 0.7rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        zIndex: 999
    },
    logoBox: {
        zIndex: 1,

        '& > img': {
            width: '70px',
            height: '70px'
        }
    },
    nav: {
        position: 'absolute',
        top: '0.7rem',
        bottom: '0.7rem',
        right: '0.7rem',
        left: '0.7rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',

        '& > svg': {
            width: '60px',
            height: '60px',
            color: 'white'
        }
    },
    menuProp: {
        backgroundColor: '#F2F2F2',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        transition: 'all 0.3s ease-out',
        overflow: 'hidden',
        zIndex: '999',

        header: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '0.7rem 0.7rem',

            closeIco: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-end',

                '& > svg': {
                    width: '60px',
                    height: '60px',
                    color: 'black'
                }
            },

            logoDiv: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',

                '& > img': {
                    width: '70px',
                    height: '70px',
                    marginRight: '1rem'
                }
            }
        },
        propDiv: {
            height: 'calc(100% - 2.8rem - 60px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
            list: {
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',

                '& > li > a': {
                    textDecoration: 'none',
                    color: 'inherit',

                    '&:hover': {
                        textDecoration: 'underline'
                    }
                },

                '& > li > a > p': {
                    fontSize: '2rem',
                    fontWeight: '500',
                    textAlign: 'center'
                },

                button: {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '53vw',

                    '& > p': {
                        fontSize: '2rem',
                        fontWeight: '500',
                        textAlign: 'center'
                    },

                    '& > svg': {
                        width: '35px',
                        height: '35px',
                    },
                },

                collapseItem: {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'start',
                    alignItems: 'center',
                    gap: '0.5rem',
                    borderBottom: '0.5px solid black',
                    margin: '1rem 0',

                    '& > p': {
                        fontSize: '1.8rem',
                        fontWeight: '500',
                        textAlign: 'center'
                    },

                    '& > img': {
                        width: '30px',
                        height: '30px'
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
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    textAlign: 'center'
                },

                signUp: {
                    color: 'black',
                    background: 'insert',
                    borderRadius: '20px',
                    padding: '1rem 1.5rem',
                    border: '1px solid black',
                    boxShadow: '0px 0px 5px 1px #000',
                    transition: 'all 0.7s ease-in-out',
                    
                    '&:active': {
                        transform: 'scale(0.8)'
                    }
                }
            }
        }
    }
}

export default headerStyle;
