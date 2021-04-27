import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    "footerWrapper": {
        height: 50,
    background: "#e6e6e6"
    },
    "footerText": {
        margin: 0
    }
})

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footerWrapper}>
            <h2 className={classes.footerText}>This is Footer</h2>
            
        </div>
    )
}

export default Footer
