import React from 'react'
import classes from './Header.module.css'
import ButtonGenerator from "../../Components/ButtonGenerator/ButtonGenerator";

import { connect } from "react-redux";

const Header = (props) => {

    const displayUserName = () => {
        if(props.User.data) {
            return props.User.data.name
        }
    }

    return(

        <div className={classes.MainContainer}>
            <nav className={classes.LeftSection}>
                <span className={classes.Logo}>
                    <span className={classes.FirstName}>
                        Mo
                    </span>
                    -
                    <span className={classes.LastName}>
                        View
                    </span>
                </span>
                <span className={`classes.MenuContainer ${ props.User.data ? '' : classes.Hide}`}>
                    <span className={classes.MenuItems}>
                        My Movies
                    </span>
                </span>
            </nav>
            <nav className={classes.RightSection}>
                <span className={classes.UserName}>
                    {displayUserName()}
                </span>
                <span className={`classes.LogoutButtonContainer ${ props.User.data ? '' : classes.Hide}`}>
                    <ButtonGenerator BtnTitle={'LOGOUT'}/>
                </span>
                <span className={`classes.LogoutButtonContainer ${ props.User.data ? classes.Hide : ''}`}>
                    <ButtonGenerator BtnTitle={'LOGIN'}/>
                </span>
            </nav>
        </div>
    )
}

const fetchDataFromGlobalStore = (globalStore) => {
    return {
        User: globalStore.User
    }
}


export default connect(fetchDataFromGlobalStore)(Header)