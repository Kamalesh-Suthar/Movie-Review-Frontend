import React from "react";
import classes from './Movies.module.css'
import { connect } from "react-redux";

import MovieCard from "../../Components/MovieCard/MovieCard";
import ButtonGenerator from "../../Components/ButtonGenerator/ButtonGenerator";
import MovieDetails from "../../Components/MovieDetails/MovieDetails";


const Movies = (props) => {

    const handleAddMovie = () => {
        props.history.push('/AddMovie')
    }

    const handleMovieCardClick = () => {
        props.updateVisibility(!props.isVisible)
    }

    if(props.movies) {
        return(
            <div className={classes.EnclosingContainer}>
                <div className={classes.MainContainer}>
                    {
                        props.movies.map((movie) => {
                            return <MovieCard handleMovieCardClick={handleMovieCardClick} {...movie}/>
                        })
                    }
                </div>
                <div className={classes.AddMovieButtonContainer}>
                    <ButtonGenerator handleAddMovie={handleAddMovie} BtnTitle={'Add Movie'} BtnType={'Add Movie'} />
                </div>
                <MovieDetails />
            </div>
        )
    }
    return (
        <div className={classes.MainContainer}>

        </div>
    )
}

const fetchDataFromGlobalStore = globalStore => {
    return {
        movies : globalStore.Movies.data,
        isVisible: globalStore.Movies.isVisible
    }
}

const updateGlobalStoreData = dispatch =>{
    return {
        updateVisibility: data => dispatch({ type: 'UPDATE_DETAILS_VISIBILITY', data: data})
    }
}

export default connect(fetchDataFromGlobalStore, updateGlobalStoreData)(Movies)