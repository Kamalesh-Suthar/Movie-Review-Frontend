import React from 'react'
import classes from './SignUpForm.module.css'
import { connect } from "react-redux";

import ButtonGenerator from "../../Components/ButtonGenerator/ButtonGenerator";
import axios from "axios";
import {BACKEND_API} from "../../Utilities/ApiEndpoints";

const SignUpForm = (props) => {

    const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const PasswordValidator = /(?=^.{8,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/;

    const handleChange = (event) => {
        let data = event.target.value
        switch(event.target.name) {
            case 'e-mail':
                props.updateEmail(data)
                let emailField = document.getElementById('email')
                if(data.match(emailValidator)) {
                    props.updateEmailValid(true)
                    emailField.style.borderColor = '#90EE90'
                } else if(data === '') {
                    props.updateEmailValid(false)
                    emailField.style.borderColor = '#fff'
                } else {
                    props.updateEmailValid(false)
                    emailField.style.borderColor = '#f00'
                }
                break
            case 'password':
                props.updatePassword(data)
                let PasswordField = document.getElementById('password')
                if(data.match(PasswordValidator)) {
                    PasswordField.style.borderColor = '#90EE90'
                }
                break
            case 'confirm-password':
                props.updateConfirmPassword(data)
                let confirmPasswordField = document.getElementById('confirm-password')
                if(data.match(PasswordValidator)) {
                    if(props.confirmPassword === props.password)
                        props.updatePasswordValid(true)
                        confirmPasswordField.style.borderColor = '#90EE90'
                } else if(props.confirmPassword === '') {
                    confirmPasswordField.style.borderColor = '#fff'
                    props.updatePasswordValid(false)
                } else {
                    confirmPasswordField.style.borderColor = '#f00'
                    props.updatePasswordValid(false)
                }
                break
            case 'name':
                props.updateUserName(data)
            default:
                break
        }
    }

    const handleReset = (event) => {
        event.preventDefault()

        const form = document.getElementById('SignUpForm')
        let elements = form.querySelectorAll('[name]')
        elements.forEach((e) => {
            e.value = ''
        })

    }

    const handleSignUp = () => {
        if(props.SignUpDetails.confirmPassword !== props.SignUpDetails.password) {
            alert('Please Check the details!')
            return
        }

        const userData = {
            name: props.SignUpDetails.name,
            email: props.SignUpDetails.email,
            password: props.SignUpDetails.password
        }

        axios.post(`${BACKEND_API}signup`, userData)
            .then(res => {
                props.history.push('/')
            })

    }

    return(
        <div className={classes.MainContainer}>
            <form id={'SignUpForm'} className={classes.FormContainer}>
                <label className={classes.FieldLabels}>Name</label>
                <input id={'name'} onChange={e => handleChange(e)} className={classes.FieldInputs} type={"text"} name={"name"} placeholder={"Please Enter Your" +
                " Name"} required={true}/>
                <label className={classes.FieldLabels}>E-mail</label>
                <input id={'email'} onChange={e => handleChange(e)} className={classes.FieldInputs} type={"email"} name={"e-mail"} placeholder={"Please Enter Your" +
                " E-mail"} required={true}/>
                <label className={classes.FieldLabels}>Password</label>
                <input id={'password'} onChange={e => handleChange(e)} className={classes.FieldInputs} type={"password"} name={"password"} placeholder={"Please Enter" +
                " Your Password"} required={true}/>
                <label className={classes.FieldLabels}>Confirm Password</label>
                <input id={'confirm-password'} onChange={e => handleChange(e)} className={classes.FieldInputs} type={"password"} name={"confirm-password"} placeholder={"Please Enter Your" +
                " Password Again"} required={true}/>
                <ButtonGenerator {...props} handleSignUp={handleSignUp} BtnTitle={"SIGNUP"} BtnType={"SIGN_UP"}/>
                <br />
                <div onClick={e => handleReset(e)} className={classes.ResetButtonContainer}>
                    <ButtonGenerator BtnTitle={"RESET"} BtnType={'None'}/>
                </div>
            </form>
        </div>
    )
}

const fetchDataFromGlobalStore = globalStore => {
    return {
        SignUpDetails : globalStore.SignUp
    }
}

const updateGlobalStore = dispatch => {
    return {
        updateUserName: data => dispatch({ type: 'UPDATE_NAME', data: data }),
        updateEmailValid: data => dispatch({ type: 'EMAIL_VALID', data: data}),
        updatePasswordValid: data => dispatch({ type: 'PASSWORD_VALID', data: data}),
        updateEmail: data => dispatch({ type: 'UPDATE_EMAIL', data: data}),
        updatePassword: data => dispatch({ type: 'UPDATE_PASSWORD', data: data}),
        updateConfirmPassword: data => dispatch({ type: 'CONFIRM_PASSWORD', data: data})
    }
}

export default connect(fetchDataFromGlobalStore, updateGlobalStore)(SignUpForm)