import React from 'react';
import {Block, Button} from "../index";
import {Link} from "react-router-dom";
import {TextField} from "@material-ui/core";
import {useFormik} from "formik";
import  './loginForm.scss'

const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            Username: '',
            password: '',
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <>
            <Block>
                <div className="auth__content">
                    <div className="auth__top">
                        <h2>Войти в аккаунт</h2>
                        <p>Пожалуйста, войдете в аккаунт</p>
                    </div>
                    <form
                        onSubmit={formik.handleSubmit}
                        name="normal_login"
                        className="login-form"
                    >

                            <TextField id="Username"
                                       name="Username"
                                       size={'small'}
                                       label="Username"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                       variant="outlined"
                        className="login-form__Username"/>



                            <TextField
                                id="password"
                                name="password"
                                label="password"
                                variant="outlined"
                                size={'small'}
                                type={'password'}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                className={'login-form__password'}
                            />
                            <Button variant="contained" color={'primary'} type="submit" className="login-form__button">
                                Войти в аккаунт
                            </Button>
                        <Link to={'/register'} className={'auth__register-link'}>Зарегистрироваться</Link>
                    </form>
                </div>
            </Block>
        </>
    );
};

export default LoginForm;
