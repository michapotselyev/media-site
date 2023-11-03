const homeMainAboutUsStyle = {
    section: {
        padding: '2rem',
        width: '100%',
        position: 'relative',
        zIndex: 1000,

        infoDiv: {
            width: '100%',
            borderRadius: '20px',
            padding: '2rem',
            backgroundColor: '#F2F2F2',

            title: {
                fontSize: '2.3rem',
                fontWeight: '600',
                paddingBottom: '0.5rem',
                marginBottom: '1rem',
                borderBottom: '3px solid black'
            },

            description: {
                fontSize: '1.5rem',
                fontWeight: '500',
                paddingBottom: '3rem'
            },

            works: {
                width: '100%',

                'div.MuiGrid-item': {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'start',
                    textAlign: 'center',
                    padding: '1rem 0',

                    '& > p': {
                        marginTop: '1rem',
                        fontWeight: '700',
                        width: '90%',
                        fontSize: '1.2rem'
                    }
                }
            }
        }
    }
}

export default homeMainAboutUsStyle;
