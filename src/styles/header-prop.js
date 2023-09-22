const headerProp =  {
    toolBar: {
        height: '100%',
        justifyContent: 'space-between',
        margin: '0 2.88rem 0 2.88rem',
    },
    logos: {
        width: '45%',
        display: 'flex'
    },
    iconButton: {
        margin: 0,
        padding: '0.33rem 0 0.33rem 0',
        transition: 'transform 0.2s ease-in-out',

        '&:hover': {
            transform: 'scale(1.4)',
            cursor: 'pointer'
        }
    },
    button: {
        border: '2px solid #2c9ff2',
        borderRadius: 100,
        textTransform: 'none',
        fontSize: '0.95rem',
        color: '#2c9ff2',
        fontFamily: '\'Plain-Bold\', sans-serif',
        padding: 'inherit 2rem inherit 2rem',

        '&:hover': {
            border: '2px solid #2c9ff2',
            backgroundColor: '#2c9ff2',
            color: 'white'
        }
    },
    nav: {
        width: '55%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        link: {
            color: 'white',
            textDecoration: 'none',

            '&:hover': {
                color: '#2c9ff2'
            }
        }
    }
}

export default headerProp;
