const footerStyle = {
    container: {
        height: '80vh',
        padding: '8% 10% 8% 10% !important'
    },
    wrapper: {
        height: '100%',
        width: '100%',
    },
    grid: {
        width: '100%',
        height: '100%',

        item: {
            title: {
                fontSize: '2.6rem',
                color: 'white',
                fontWeight: '600'
            },

            contactInfo: {
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',

                title: {
                    fontSize: '1.5rem',
                    color: '#909090',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '40%',
                },

                contacts: {
                    color: '#666262',
                    height: '60%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    transform: 'translate(-3%)',

                    wrapper: {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        fontSize: '1.3rem',
                        marginBottom: '0.5rem',
                    },

                    link: {
                        textDecoration: 'none',
                        cursor: 'pointer',
                        '&:hover': {
                            color: '#2c9ff2'
                        }
                    }
                }
            },
            
            officeInfo: {
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',

                title: {
                    fontSize: '1.5rem',
                    color: '#909090',
                    height: '40%',
                    width: '75%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                },

                contacts: {
                    color: '#666262',
                    height: '60%',
                    width: '75%',
                    transform: 'translateX(-1%)',

                    wrapper: {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'start',
                        fontSize: '1.3rem',
                        marginBottom: '0.5rem'
                    },

                    link: {
                        color: '#666262',
                        textDecoration: 'none',
                        lineHeight: 1.5,
                        transform: 'translateY(-2.5%)'
                    }
                }
            },
            copyright: {
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'end',
                height: '100%',
            },
            wrapperBotomSection: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'end',
                height: '100%',
                marginRight: '2rem'
            },
            socialMedia: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'end',
                height: '100%',

                item: {
                    width: '18.75%'
                }
            }
        }
    }
}

export default footerStyle;
