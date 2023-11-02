const headerStyle = {
    header: {
        width: '100%',
        padding: '0.7rem 0.7rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        zIndex: 999
    },
    logoBox: {
        '& > img': {
            width: '70px',
            height: '70px'
        }
    },
    nav: {
        position: 'absolute',
        top: '0.7rem',
        bottom: '0.7rem',
        right: '0.7rem',
        left: '0.7rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',

        '& > svg': {
            width: '60px',
            height: '60px',
            color: 'white'
        }
    }
}

export default headerStyle;
