import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import { connect } from "react-redux";


import Header from "./CommonComponents/Header/Header";
import Footer from "./CommonComponents/Footer/Footer";

import Loader from "./HOC/Loader/Loader";


import Login from "./Containers/Login/Login";
import SignUp from "./Containers/SignUp/SignUp";
import Movies from "./Containers/Movies/Movies";
import AddMovie from "./Components/AddMovie/AddMovie";
import {getData} from "./Utilities/CommonMethods";
import {BACKEND_API} from "./Utilities/ApiEndpoints";


function App(props) {

    getData(`${BACKEND_API}movies`)
        .then(response => {
            props.updateMovieList(response)
        }).catch(err => console.log(err))

return (
    <BrowserRouter>
        <Route path={'/'} component={Header}/>
            <div className="App">
                <Route exact path={'/'} render={(props) => <Login {...props} updateMovieList={props.updateMovieList}/>} />
                {/*<Loader {...props}>*/}
                    <Route exact path={'/signup'} render={(props) => <SignUp {...props} />} />
                    <Route exact path={'/movies'} render={(props) => <Movies {...props}/> } />
                    <Route exact path={'/AddMovie'} render={(props) =>  <AddMovie {...props} /> } />
                {/*</Loader>*/}
            </div>
        {/*<Route path={'/'} component={Footer}/>*/}
    </BrowserRouter>
  );
}

const updateGlobalStoreData = dispatch => {
    return {
        updateMovieList: data => {
            return dispatch({ type: "UPDATE_LIST", data: data })
        }
    }
}

export default connect((''), updateGlobalStoreData)(App);
