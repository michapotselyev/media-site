const portfolio = {
    title: {
        position: 'relative',
        fontSize: '2rem',
        color: 'white',
        transition: 'all 0.5s ease-in-out',
        width: '100%',
        textAlign: 'center',
        textShadow: '0px 0px 10px black',
        zIndex: 1
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1
    },
    grid: {
        width: '100%',
        height: '100%',

        wrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh',
        },

        item: {
            width: '37vw',
            height: '80vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: '1px solid rgb(17,15,138)',
            '-webkit-box-shadow': '0px 0px 20px 3px rgb(17,15,138)',
            '-moz-box-shadow': '0px 0px 20px 3px rgb(17,15,138)',
            boxShadow: '0px 0px 20px 3px rgb(17,15,138)',
            borderRadius: '5px',

            textWrapper: {
                backgroundColor: 'rgba(0, 0, 0, 0.65)',
                height: '100%',
                borderRadius: '5px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            },

            title: {
                color: 'white',
                fontSize: '2rem',
                height: '30%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
            },

            desription: {
                width: '80%',
                height: '70%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyContent: 'space-around',
            }
        }
    }
}

export default portfolio;
