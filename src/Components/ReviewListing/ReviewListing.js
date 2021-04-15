import React from "react";
import classes from './ReviewListing.module.css'
import { connect } from "react-redux";
import {BACKEND_API} from "../../Utilities/ApiEndpoints";
import axios from "axios";
import Review from "../Review/Review";

const ReviewListing = (props) => {

    let title = ''
    let description = ''

    const handleReviewChange = (e) => {
        let data = e.target.value
        switch (e.target.name) {
            case 'title':
                title = data
                break
            case 'review':
                description = data
                break
            default:
                return
        }
    }

    const resetOfReviewField = () => {
        let title = document.getElementById("title")
        let description = document.getElementById("description")

        title.value = ''
        description.value = ''
    }

    const postReviewHandler = () => {

        if(title != '' && description != '') {
            if(props.type == 'private') {
                if(props.userId == props.userData._id) {
                    const data = {
                        name: props.userData.name,
                        title: title,
                        description: description,
                        movieId: props._id,
                        userId: props.userId,
                    }

                    axios.post(`${BACKEND_API}post-review`, data)
                        .then(response => {
                            resetOfReviewField()
                        })
                } else {
                    alert('Your are not authorized to Review this movie.')
                }
            } else {
                const data = {
                    name: props.userData.name,
                    title: title,
                    description: description,
                    movieId: props._id,
                    userId: props.userId,
                }

                axios.post(`${BACKEND_API}post-review`, data)
                    .then(response => {
                        props.updateVisibility(!props.isVisible)
                        resetOfReviewField()
                    })
            }
        } else {
            alert('Please Enter all the Fields')
        }
    }



    return(

        <div className={classes.MainContainer}>
            <div className={classes.ReviewContainer}>
                {
                    props.reviews.data.map(review => <Review {...review} />)
                }
            </div>
            <div className={classes.AddReviewContainer}>
                <div className={classes.ReviewFieldContainer}>
                    <input id={'title'} onChange={e => handleReviewChange(e)} className={classes.TitleField} type={'text'} name={'title'} placeholder={'Add A Title'}/>
                    <input id={'description'} onChange={e => handleReviewChange(e)} className={classes.ReviewField} type={'text'} name={'review'} placeholder={'Add A' +
                    ' Review'}/>
                    <button onClick={e => postReviewHandler()} value={'Post'} className={classes.AddReviewBtn} type={'none'}>Post</button>
                </div>
            </div>
        </div>
    )
}

const fetchDataFromGlobalStore = globalStore => {
    return {
        userData: globalStore.User.data,
        reviews: globalStore.Reviews.reviews,
        isVisible: globalStore.Movies.isVisible
    }
}

const updateGlobalStoreData = dispatch => {
    return {
        updateVisibility: data => dispatch({ type: 'UPDATE_DETAILS_VISIBILITY', data: data})
    }
}

export default connect(fetchDataFromGlobalStore, updateGlobalStoreData)(ReviewListing)