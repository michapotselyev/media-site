const homeMainOurClientStyle = {
    section: {
        padding: 0,
        margin: 0,
        width: '100%',
    },
    infoDiv: {
        backgroundImage: 'url(assets/Cover-client.jpeg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',

        '& > p': {
            textAlign: 'center',
            color: 'white'
        },

        title: {
            padding: '1.5rem 2rem',
            fontSize: '1.5rem',
            background: 'rgba(0,0,0,0.7)',
            fontWeight: '600'
        },
        description: {
            fontSize: '2.1rem',
            padding: '0 1.5rem',
            background: 'rgba(0,0,0,0.7)'
        },
        author: {
            background: 'rgba(0,0,0,0.7)',
            fontSize: '1.2rem',
            fontWeight: '700',
            padding: '1.5rem 2rem',
        }
    }
}

export default homeMainOurClientStyle;
