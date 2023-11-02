const service = {
    container: {
        minHeight: '120vh'
    },
    wrapper: {
        width: '100%',
        minHeight: '120vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageWrapper: {
        width: '50%',
        paddingLeft: '2rem',
        zIndex: 1,

        '& > img': {
            '-webkit-box-shadow': '0px 0px 6px 3px rgb(17,15,138)',
            '-moz-box-shadow': '0px 0px 6px 3px rgb(17,15,138)',
            boxShadow: '0px 0px 6px 3px rgb(17,15,138)',
        }
    },
    textWrapper: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: '70vh',
        zIndex: 1
    },
    title: {
        color: 'white',
        fontSize: '2rem',
        fontWeight: '600',
        marginBottom: '2rem',
        textShadow: '0px 0px 5px black',
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
            textShadow: '0px 0px 5px black',

            marker: {
                fontSize: '2rem',
                marginRight: '1rem'
            }
        }
    },

}

export default service;
