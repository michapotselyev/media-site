const portfolio = {
    container: {
        height: '200vh'
    },
    grid: {
        width: '100%',
        height: '100%',

        wrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },

        item: {
            width: '80vh',
            height: '80vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
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
