const homeMainHeaderStyle = {
    header: {
        width: '100%',
        height: '100vh',
        position: 'relative',

        '& > img': {
            zIndex: '-1',
            position: 'absolute',
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            objectPosition: '58% 50%'
        }
    },
    wrapper: {
        position: 'absolute',
        width: '100%',
        height: '100vh',
        backgroundColor: 'black',
        zIndex: 1,
        opacity: 0.5
    },
    textDiv: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
        padding: '2rem',
        color: 'white',

        '& > h1': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
            zIndex: 1,
            background: 'linear-gradient(92deg, #F33 -1.87%, #000 234.98%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '4.8rem',
            fontWeight: '700'
        },

        '& > p': {
            zIndex: 1,
            fontSize: '2rem',
            fontWeight: '500',
            paddingLeft: '0.3rem'
        }
    }
}

export default homeMainHeaderStyle;
