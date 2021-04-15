import React from "react";
import classes from './Review.module.css'


const Review = (props) => {

    return(
        <div className={classes.MainContainer}>
            <div className={classes.LeftSection}>
                <span className={classes.ReviewTitle}>
                    {props.title}
                </span>
                <span className={classes.ReviewDescription}>
                    {props.description}
                </span>
            </div>
            <div className={classes.RightSection}>
                <span className={classes.Reviewer}>
                    {props.userName}
                </span>
                <span className={classes.CreatedOn}>
                    {props.createdOn}
                </span>
            </div>
        </div>
    )
}



export default Review