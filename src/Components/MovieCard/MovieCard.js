import React from "react";
import classes from './MovieCard.module.css'
import {getData} from "../../Utilities/CommonMethods";
import {BACKEND_API} from "../../Utilities/ApiEndpoints";
import { connect } from "react-redux";
import axios from "axios";


const MovieCard = (props) => {

    const handleMovieClick = (e) => {
        getData(`${BACKEND_API}movie/${props._id}`)
            .then(response => {
                props.updateSelectedMovie(response)
                props.handleMovieCardClick()
            })
        axios.get(`${BACKEND_API}reviews/${props._id}`)
            .then(response => {
                props.updateReviews(response)
            })
    }

    return(
        <div onClick={e => handleMovieClick(e)} className={classes.MainContainer}>
            <div className={classes.ImageContainer}>
                <img className={classes.Images} src={props.image} alt={props.title}/>
            </div>
            <div className={classes.DetailsContainer}>
                    <span className={classes.Title}>
                        {props.title}
                    </span>
                <span className={classes.Duration}>
                        {props.duration} minutes
                </span>
            </div>
        </div>
    )
}

const updateGlobalStoreData = dispatch => {
    return {
        updateSelectedMovie: data => dispatch({ type: 'UPDATE_SELECTED_MOVIE', data: data}),
        updateReviews: data => dispatch({ type: 'UPDATE_REVIEWS', data: data})
    }
}

export default connect('', updateGlobalStoreData)(MovieCard)