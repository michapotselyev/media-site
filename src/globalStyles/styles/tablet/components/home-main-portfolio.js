const homeMainPortfolioStyle = {
    section: {
        position: 'relative',
        padding: '2rem',
        width: '100%',
        backgroundColor: '#F2F2F2',
        zIndex: 1000
    },
    title: {
        fontSize: '2.1rem',
        fontWeight: '600',
        paddingBottom: '0.5rem',
        marginBottom: '1rem',
        borderBottom: '3px solid black'
    },
    slider: {
        width: '100%',
        height: '70vh',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        marginTop: '2rem',
        position: 'relative',
        flexShrink: 0,

        item: {
            height: '100%',
            flexShrink: 0,
            padding: '0.5rem',

            img: {
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                WebkitBoxShadow: '0px 0px 4px 2px rgb(0,0,0)',
                MozBoxShadow: '0px 0px 4px 2px rgb(0,0,0)',
                boxShadow: '0px 0px 4px 2px rgb(0,0,0)',
                
                wrapperText: {
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.8)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'end',
                    padding: '2rem'
                },

                text: {
                    width: '100%',
                    color: 'white!important',
                    fontSize: '2.3rem',
                    textAlign: 'start',
                    textDecoration: 'none',
                    border: '1px solid white',
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',

                    '&:hover': {
                        backgroundColor: 'white!important',
                        color: 'black',
                        '& > svg': {
                            color: 'black',
                        }
                    }
                },
                arrow: {
                    fontSize: '2.3rem'
                }
            }
        },
        buttonWrapper: {
            width: '100%',
            height: '3rem',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',

            layout: {
                width: '50px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                cursor: 'pointer',
                margin: '0 6px 0 6px'
            },

            button: {
                backgroundColor: '#909090',
                height: '4px',
                width: '100%'
            }
        }
    }
}

export default homeMainPortfolioStyle;
