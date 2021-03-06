
const styles = theme => ({
    formControl: {
        marginBottom: theme.spacing(2),
        width: '100%',

    },
    imageInput: {
        backgroundColor: 'orange',
        borderRadius: '7px',
    },
    formButton: {
        marginTop: theme.spacing(2),
    },
    formToggle: {
        background: 'none',
        border: 'none',
        textDecoration: 'underline',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    shareForm: {
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '400px'
        },
        fontWeight: 800,
        fontSize: '22px'

    },
    shareButton: {
        width: '30%',
        height: '7%',
        marginTop: '10px'
    },
    errorMessage: {
        color: 'firebrick'
    },
    heading: {
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(0),
        marginTop: 0
    },
    required: {
        color: 'red',
        fontSize: 15
    }
});

export default styles;
