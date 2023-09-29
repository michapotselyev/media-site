const aboutUs = {
    container: {
        height: '130vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1
    },
    background: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
    },
    backgroundShadow: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'black',
        width: '320px',
        height: '320px',
        zIndex: '-1',
        borderRadius: '50%',
        opacity: '0.55',
        WebkitBoxShadow: '0px 0px 82px 55px rgba(0,0,0,0.75)',
        MozBoxShadow: '0px 0px 82px 55px rgba(0,0,0,0.75)',
        boxShadow: '0px 0px 82px 55px rgba(0,0,0,0.75)'
    },
    section: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    title: {
        fontSize: '2rem',
        color: 'white',
        transition: 'all 0.5s ease-in-out'
    },
    description: {
        color: '#2C9FF2',
        width: '51%',
        fontSize: '1.3rem',
        textAlign: 'center',
        paddingTop: '1.5rem',
        transition: 'all 0.5s ease-in-out'
    },
    ourDiff: {
        marginTop: '5rem',
        fontSize: '2rem',
        color: 'white',
        transition: 'all 0.5s ease-in-out'
    },
    slider: {
        width: '100%',
        height: 'calc(1280px/4)',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        marginTop: '2rem',
        position: 'relative',
        flexShrink: 0,

        item: {
            height: '100%',
            flexShrink: 0,
            padding: '0.5rem',

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
            position: 'absolute',
            top: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center'
        }
    },
    bottomImage: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'end',
        borderBottom: '1px solid #2C9FF2',
        padding: '0 30% 0 30%',
        transition: 'all 0.5s ease-in-out',
    }
}

export default aboutUs;
