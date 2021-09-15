import React from 'react';
import {Form, Input} from "antd";
import {InfoCircleOutlined, LockOutlined, MailOutlined, UserOutlined} from "@ant-design/icons";
import {Block, Button} from "../index";
import {Link} from "react-router-dom";

const RegisterForm = () => {
    const success = false
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <>
            <Block>
                <div className="auth__top">
                    <h2>Регистрация</h2>
                    <p>Для входа вам нужно зарегистрироваться</p>
                </div>
                <div className="auth__content">
                    {!success ? <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{remember: true}}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                validateStatus="success"
                                hasFeedback
                                name="email"
                            >
                                <Input type={'mail'} size={'large'} prefix={<MailOutlined className="site-form-item-icon"/>}
                                       placeholder="email"/>
                            </Form.Item>
                            <Form.Item
                                validateStatus="success"
                                hasFeedback
                                name="password"
                            >
                                <Input type="password"
                                       size={'large'}
                                       prefix={<LockOutlined className="site-form-item-icon"/>} placeholder="пороль"/>
                            </Form.Item>
                            <Form.Item
                                validateStatus="success"
                                hasFeedback
                                name="repeatPassword"
                            >
                                <Input type="password"
                                       size={'large'}
                                       prefix={<LockOutlined className="site-form-item-icon"/>}
                                       placeholder="Повторите пороль"/>
                            </Form.Item>
                            <Form.Item
                                name="userName"
                            >
                                <Input
                                    size={'large'}
                                    prefix={<UserOutlined className="site-form-item-icon"/>}
                                    type="text"
                                    placeholder="user name"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button size={'large'} type="primary" htmlType="submit" className="login-form-button">
                                    Регистрация
                                </Button>
                            </Form.Item>
                            <Link to={'/Login'} className={'auth__register-link'}>Войти</Link>
                        </Form> :
                        <div className={'auth__success'}>
                            <InfoCircleOutlined style={{'fontSize': '50px'}}/>
                            <h3>Подтвердите свой аккаунт</h3>
                            <p>На вашу почту отправлено письмо с ссылкой на подтверждение аккаунта</p>
                        </div>}
                </div>
            </Block>
        </>
    );
};
export default RegisterForm;
