const service = {
    container: {
        height: '120vh'
    },
    wrapper: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageWrapper: {
        width: '50%',
        paddingLeft: '2rem'
    },
    textWrapper: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '70vh'
    },
    title: {
        color: 'white',
        fontSize: '2rem',
        fontWeight: '600',
        marginBottom: '2rem'
    },
    description: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        
        paragraph: {
            width: '70%',
            color: 'white',
            alignText: 'center',
            display: 'flex',
            flexDirection: 'row',
            fontSize: '1rem',

            marker: {
                fontSize: '2rem',
                marginRight: '1rem'
            }
        }
    },

}

export default service;
