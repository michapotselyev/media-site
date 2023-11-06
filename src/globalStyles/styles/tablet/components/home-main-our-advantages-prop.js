const homeMainOurAdvantagesStyle = {
    section: {
        padding: '2rem',
        width: '100%',
        position: 'relative',
        zIndex: 1000,
    },

    gridItem: {
        height: 'calc(50vw - 4rem)',
        padding: '1rem'
    },

    img: {
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        WebkitBoxShadow: '0px 0px 6px 3px rgb(0,0,0)',
        MozBoxShadow: '0px 0px 6px 3px rgb(0,0,0)',
        boxShadow: '0px 0px 6px 3px rgb(0,0,0)',
        
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
}

export default homeMainOurAdvantagesStyle;
