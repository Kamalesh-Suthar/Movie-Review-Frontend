import React from "react";
import classes from './SignUp.module.css'


import SignUpForm from "../../Components/SignUpForm/SignUpForm";


const SignUp = (props) => {
    return(
        <div className={classes.MainContainer}>
            <SignUpForm {...props}/>
        </div>
    )
}

export default SignUp