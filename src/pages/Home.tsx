import React from 'react'
import { createUseStyles } from 'react-jss'
const useStyles = createUseStyles({
    "mainWrapper": {
        height: "77vh"
    }
})



const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainWrapper}>
            <h1>Welcome to home page</h1>
        </div>
    )
}

export default Home
