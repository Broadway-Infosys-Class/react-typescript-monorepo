import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    "headerWrapper": {
    height: 50,
    background: "#e6e6e6"
    },
    "headerText" :{
        margin: 0
    }
})

const Header = () => {
    
    const classes = useStyles();

    return (
        <div className={classes.headerWrapper}>
            <h2 className={classes.headerText}>This is header</h2>
        </div>
    )
}

export default Header
