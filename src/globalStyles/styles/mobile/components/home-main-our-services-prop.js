const homeMainOurServicesStyle = {
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
    gridItem: {
        border: '1px solid black',
        borderRadius: '20px',
        padding: '1rem',
        margin: '2rem 0',

        '& > img': {
            marginBottom: '1rem'
        },

        title: {
            fontSize: '1.5rem',
            fontWeight: '600',
        },

        moreButton: {
            marginTop: '2.4rem',
            display: 'inline-block',
            border: '2px solid black',
            borderRadius: '20px',
            textAlign: 'start',

            '& > p': {
                fontSize: '1.2rem',
                fontWeight: '500',
                margin: '1rem'
            }
        },

        moreText: {
            fontSize: '1rem',
            fontWeight: '500',
            margin: '1rem 0'
        }
    }
}

export default homeMainOurServicesStyle;
