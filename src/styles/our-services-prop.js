const ourServices = {
    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1
    },
    slider: {
        width: '100%',
        height: '70%',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        marginTop: '2rem',
        position: 'relative',
        flexShrink: 0,

        item: {
            width: '50%',
            height: '100%',
            flexShrink: 0,
            padding: '0.5rem',
            border: '1px solid black',

            img: {
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                
                wrapperText: {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.65)'
                }
            }
        },
        buttonWrapper: {
            marginTop: '1rem',
            width: '300px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',

            button: {
                backgroundColor: '#909090',
                flexGrow: 1,
                height: '4px',
                margin: '0 6px 0 6px'
            }
        }
    }
}

export default ourServices;
