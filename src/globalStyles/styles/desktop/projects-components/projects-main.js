const projectMain = {
    main: {
        paddingTop: 'calc(3.6rem + 100px)',
        paddingBottom: '2rem',
        paddingRight: '4rem',
        paddingLeft: '4rem',
        width: '100%',
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1))',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'relative',
        zIndex: 0
    },

    nav: {
        paddingLeft: '2rem',
        paddingBottom: '1rem',
        
        link: {
            fontSize: '1.2rem',
            fontWeight: '500',
            textAlign: 'center',
            color: 'white!important',
            textDecoration: 'none',

            '&:hover': {
                textDecoration: 'underline'
            }
        }
    },

    section: {
        width: '100%',
        zIndex: 1,
        padding: '2rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '2rem',
        borderTop: '1px solid white'
    },

    img: {
        width: '48%',
        height: '60vh',
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
            padding: '1rem',
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
            transition: 'all 0.3s ease-in-out',

            '&:hover': {
                backgroundColor: 'white',
                color: 'black!important',
                '& > svg': {
                    color: 'black',
                }
            }
        },
        arrow: {
            fontSize: '2.3rem'
        }
    }
}

export default projectMain;
