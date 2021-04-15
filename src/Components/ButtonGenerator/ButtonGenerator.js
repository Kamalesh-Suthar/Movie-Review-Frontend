import React from 'react'
import classes from './ButtonGenerator.module.css'

const ButtonGenerator = (props) => {
    const handleClick = (event) => {
        if(props.BtnTitle == 'LOGOUT') {
            props.handleLogout()
            props.history.push('/')
        } else if(props.BtnTitle == 'LOGIN') {
            props.history.push('/')
        }

        if(props.BtnType == 'SIGN_UP') {
            event.preventDefault()

            props.handleSignUp()
        }

        if(props.BtnType == 'LOGIN') {
            event.preventDefault()

            props.handleLogin()
        }

        if(props.BtnType == 'Add Movie') {
            event.preventDefault()

            props.handleAddMovie()
        }
    }

    return <button onClick={(e) => handleClick(e)} className={`${classes.BtnContainer}`} value={props.BtnTitle}>{props.BtnTitle}</button>
}

export default ButtonGenerator