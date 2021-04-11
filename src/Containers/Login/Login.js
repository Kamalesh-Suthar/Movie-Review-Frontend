import React from "react";
import classes from './Login.module.css'



import LoginForm from "../../Components/LoginForm/LoginForm";


const Login = (props) => {
    return(
        <div className={classes.MainContainer}>
            <LoginForm {...props}/>
        </div>
    )
}

export default Login