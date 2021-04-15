import React from "react";
import classes from './Loader.module.css'

const Loader = (props) => {

    if(props.isLoaded.Movies.data === undefined) {
        return (
            <div className={classes.MainContainer}>
                <div className={classes.LoaderContainer}>
                    <div className={classes.LoaderAnimationContainer}>
                        <span className={classes.Animation}>{''}</span>
                        <span className={classes.Animation}>{''}</span>
                        <span className={classes.Animation}>{''}</span>
                    </div>
                </div>
                <h1 className={classes.LoadingText}>A moment Please...</h1>
            </div>
        )
    }
    return props.children
}

export default Loader