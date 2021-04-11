import React from "react";
import classes from './MovieDetails.module.css'
import { connect } from "react-redux";
import ReviewListing from "../ReviewListing/ReviewListing";


const MovieDetails = (props) => {

    const handleClose = e => {
        props.updateVisibility(false)
    }

    return(
        <div className={`${classes.MainContainer} ${props.isVisible ? '' : classes.Hide}`}>
            <div className={classes.ExitIconContainer}>
                <i onClick={e => handleClose(e)} className={"fas fa-times"}></i>
            </div>
            <div className={classes.TopContainer}>
                <div className={classes.LeftContainer}>
                    <div className={classes.ImageContainer}>
                        <img className={classes.Images} src={props.image} alt={props.title}/>
                    </div>
                </div>
                <div className={classes.RightContainer}>
                    <span className={`${classes.MovieDetails} ${classes.Title}`}>
                        {props.title}
                    </span>
                    <span className={`${classes.MovieDetails} ${classes.Description}`}>
                        Description: <br />
                        {`\t ${props.description}`}
                    </span>
                    <span className={classes.MovieDetails}>
                        Duration: {props.duration} minutes
                    </span>
                    <span className={classes.MovieDetails}>
                        Release: {props.yearOfRelease}
                    </span>
                </div>
            </div>
            <div className={classes.BottomContainer}>
                <ReviewListing {...props}/>
            </div>
        </div>
    )
}

const fetchDataFromGlobalStore = globalStore => {
    return {
        ...globalStore.Movies.selected,
        isVisible: globalStore.Movies.isVisible
    }
}

const updateGlobalStoreData = dispatch => {
    return {
        updateVisibility: data => dispatch({ type: 'UPDATE_DETAILS_VISIBILITY', data: data})
    }
}

export default connect(fetchDataFromGlobalStore, updateGlobalStoreData)(MovieDetails)