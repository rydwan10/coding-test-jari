import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
        '&:nth-of-type(odd)': {
            backgroundColor: 'white',
        },
        '&:nth-of-type(even)': {
            backgroundColor: 'white'
        }
    },
    tableHead: {
        backgroundColor: '#00031F'
    },
    tableCell: {
        color: 'black',
        fontSize: '1rem',
    },
    menuItem: {
        fontWeight: 'bold',
    },


    greenText: {
        color: "#08F387",
    },
    redText: {
        color: 'red',
    },
    yellowText: {
        color: 'yellow',
    }
}))
