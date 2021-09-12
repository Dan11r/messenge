import React from 'react';
import {LoginForm, RegisterForm} from "../../components";
import './Auth.scss'
import {Redirect, Route, Switch} from 'react-router-dom'

const Auth = () => {
    return (
        <section className='auth'>
            <Switch>
                <Route path={'/login'} exact component={LoginForm}/>
                <Route path={'/register'} exact component={RegisterForm}/>
                <Redirect to={'/login'}/>
            </Switch>
        </section>
    );
};

export default Auth;
