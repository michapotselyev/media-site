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
        height: '68%',
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

            img: {
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'column',
                alignItems: 'end',
                
                wrapperText: {
                    backgroundColor: 'white',
                    width: '100%',
                    height: '30%',
                    margin: '1.2rem 1.5rem 1.2rem 1.5rem',
                    borderRadius: '5px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 2rem 0 2rem',

                    arrowContainer: {
                        backgroundColor: '#2b099c',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                    }
                }
            }
        },
        buttonWrapper: {
            width: '100%',
            height: '3rem',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',

            layout: {
                width: '50px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                cursor: 'pointer',
                margin: '0 6px 0 6px'
            },

            button: {
                backgroundColor: '#909090',
                height: '4px',
                width: '100%'
            }
        }
    }
}

export default ourServices;
