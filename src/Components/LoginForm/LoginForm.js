import React from "react";
import classes from './LoginForm.module.css'
import axios from "axios";
import {connect} from "react-redux";


import ButtonGenerator from "../ButtonGenerator/ButtonGenerator";
import {Link} from "react-router-dom";
import {BACKEND_API} from "../../Utilities/ApiEndpoints";
import {getData} from "../../Utilities/CommonMethods";

const LoginForm = (props) => {

    console.log(props)

    let email = ''
    let password = ''

    const handleChange = (event) => {
        let data = event.target.value
        switch(event.target.name) {
            case 'email':
                email = data
                break
            case 'password':
                password = data
                break
            default:
                return
        }
    }

    const handleLogin = () => {

        const userData = {
            email: email,
            password: password
        }


        axios.post(`${BACKEND_API}user`, userData)
            .then(res => {
                if(res.data.isValid) {
                    const User = res.data.user
                    props.updateUser(User)
                    props.history.push('/Movies')
                } else {
                    alert('Wrong credentials')
                }
            })
    }

    return(
        <div className={classes.MainContainer}>
            <form className={classes.FormContainer}>
                <label className={classes.FieldLabels}>E-mail</label>
                <input className={classes.FieldInputs} onChange={(e) => handleChange(e)} type={"email"} name={"email"} placeholder={"Please Enter Your E-mail"}/>
                <label className={classes.FieldLabels}>Password</label>
                <input className={classes.FieldInputs} onChange={(e) => handleChange(e)} type={"password"} name={"password"} placeholder={"Please Enter Your Password"}/>
                <ButtonGenerator {...props} handleLogin={handleLogin} BtnTitle={"LOGIN"} BtnType={"LOGIN"}/>
                <br/>
                <Link to={'/signup'}>
                    <ButtonGenerator BtnTitle={"SignUp"} BtnType={'None'} />
                </Link>
            </form>
        </div>
    )
}

const updateGlobalStoreData = dispatch => {
    return {
        updateUser: (data) => {
            dispatch({ type: 'UPDATE_USER', data: data })
        }
    }
}

export default connect('', updateGlobalStoreData)(LoginForm)