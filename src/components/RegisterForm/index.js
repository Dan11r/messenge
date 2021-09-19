import React from 'react';
import {Block, Button} from "../index";
import {Link} from "react-router-dom";
import {useFormik} from "formik";
import {TextField} from "@material-ui/core";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import './register.scss'
import classNames from "classnames";

const validate = values => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};
const RegisterForm = () => {
    const formik = useFormik({
        initialValues: {
            userName: '',
            password1: '',
            password2: '',
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    const success = false
    return (
        <>
            <Block>
                <div className="auth__top">
                    <h2>Регистрация</h2>
                    <p>Для входа вам нужно зарегистрироваться</p>
                </div>
                <div className="auth__content">
                    {!success ? <form className={"auth__form"} onSubmit={formik.handleSubmit}>

                                <TextField
                                    className={classNames('auth__input', 'auth__input--email')}
                                           id="email"
                                           name="email"
                                    size={'small'}
                                           label="Email"
                                           variant={'outlined'}
                                       onChange={formik.handleChange}
                                       onBlur={formik.handleBlur}
                                       value={formik.values.email}/>

                                <TextField
                                    className={classNames('auth__input', 'auth__input--password1')}
                                    type="password"
                                       id="password1"
                                           variant={'outlined'}
                                       onChange={formik.handleChange}
                                       onBlur={formik.handleBlur}
                                    size={'small'}
                                       value={formik.values.password1}
                                       name="password1"
                                    label="пороль"/>

                                <TextField
                                    className={classNames('auth__input', 'auth__input--password2')}
                                    type="password"
                                       onChange={formik.handleChange}
                                       onBlur={formik.handleBlur}
                                       value={formik.values.password2}
                                           variant={'outlined'}
                                       id="password2"
                                       name="password2"
                                    size={'small'}
                                    label="Повторите пороль"/>


                                <TextField
                                    size={'small'}
                                    className={classNames('auth__input', 'auth__input--userName')}
                                    type="text"
                                    id="userName"
                                    variant={'outlined'}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.userName}
                                    name="userName"
                                    label='user name'
                                />

                                <Button onClick={formik.handleSubmit}
                                        color={'primary'}
                                        variant="contained"
                                        size={'large'}
                                        type="submit" className="auth__button">
                                    Регистрация
                                </Button>



                            <Link to={'/login'} className={'auth__register-link'}>Войти</Link>
                        </form> :
                        <div className={'auth__success'}>
                            <ErrorOutlineIcon fontSize={'large'}/>
                            <h3>Подтвердите свой аккаунт</h3>
                            <p>На вашу почту отправлено письмо с ссылкой на подтверждение аккаунта</p>
                        </div>}
                </div>
            </Block>
        </>
    );
};
export default RegisterForm;
