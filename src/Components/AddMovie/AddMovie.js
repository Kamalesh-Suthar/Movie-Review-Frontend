import React from "react";
import classes from './AddMovie.module.css'
import { connect } from "react-redux";


import ButtonGenerator from "../ButtonGenerator/ButtonGenerator";
import axios from "axios";
import {BACKEND_API} from "../../Utilities/ApiEndpoints";


const AddMovie = (props) => {

    console.log(props)

    let title = ''
    let description = ''
    let url = ''
    let yearOfRelease = ''
    let duration = ''
    let type = ''

    const handleOnChange = (e) => {
        let data = e.target.value
        switch(e.target.name) {
            case 'title':
                title = data
                break
            case 'description':
                description = data
                break
            case 'type':
                type = data
                break
            case 'url':
                url = data
                break
            case 'duration':
                duration = data
                break
            case 'Year Of Release':
                yearOfRelease = data
                break
            default:
                return
        }
    }

    const handleAddMovie = () => {
        let data = {
            title: title,
            description: description,
            image: url,
            yearOfRelease: yearOfRelease,
            type: type,
            duration: duration,
            userId: props.userId
        }

        axios.post(`${BACKEND_API}add-movie`, data)
            .then(res => {
                console.log(res)
            })
    }

    return(

        <div className={classes.MainContainer}>
            <form className={classes.FormContainer}>
                <label className={classes.FieldLabels}>Title</label>
                <input onChange={e => handleOnChange(e)} className={classes.FieldInputs} type={'text'} name={'title'} required={true}/>
                <label className={classes.FieldLabels}>Description</label>
                <textarea onChange={e => handleOnChange(e)} className={classes.FieldInputs} rows={5} name={'description'} required={true}/>
                <label className={classes.FieldLabels}>ImageLink</label>
                <input onChange={e => handleOnChange(e)} className={classes.FieldInputs} type={'url'} name={'url'} required={true}/>
                <label className={classes.FieldLabels}>Year Of Release</label>
                <input onChange={e => handleOnChange(e)} className={classes.FieldInputs} type={'number'} maxLength={2021} min={1900} name={'Year Of Release'} required={true}/>
                <label className={classes.FieldLabels}>Duration</label>
                <input onChange={e => handleOnChange(e)} className={classes.FieldInputs} type={'number'} name={'duration'} min={30} max={360} placeholder={'Please' +
                ' Enter' +
                ' duration in' +
                ' minutes.'} required={true}/>
                <label className={classes.FieldLabels}>Type</label>
                <label className={classes.RadioEncloser}>
                    <input onChange={e => handleOnChange(e)} className={classes.RadioInputs} type={'radio'} name={'type'} value={'private'} required={true}/> Private
                </label>
                <label className={classes.RadioEncloser}>
                    <input onChange={e => handleOnChange(e)} className={classes.RadioInputs} type={'radio'} name={'type'} value={'public'} required={true}/> Public
                </label>
                <br />
                <ButtonGenerator handleAddMovie={handleAddMovie} BtnTitle={'Add Movie'} BtnType={'Add Movie'} />
            </form>
        </div>
    )
}

const fetchDataFromGlobalStore = globalStore => {
    return {
        userId : globalStore.User.data._id
    }
}

export default connect(fetchDataFromGlobalStore)(AddMovie)