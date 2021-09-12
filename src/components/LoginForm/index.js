import React from 'react';
import {Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Block, Button} from "../index";
import {Link} from "react-router-dom";

const LoginForm = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <>
            <Block>
                <div className="auth__content">
                    <div className="auth__top">
                        <h2>Войти в аккаунт</h2>
                        <p>Пожалуйста, войдете в аккаунт</p>
                    </div>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{remember: true}}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            validateStatus="success"
                            hasFeedback
                            name="username"
                        >
                            <Input size={'large'} prefix={<UserOutlined className="site-form-item-icon"/>}
                                   placeholder="Username"/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                        >
                            <Input
                                size={'large'}
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button size={'large'} type="primary" htmlType="submit" className="login-form-button">
                                Войти в аккаунт
                            </Button>
                        </Form.Item>
                        <Link to={'/register'} className={'auth__register-link'}>Зарегистрироваться</Link>
                    </Form>
                </div>
            </Block>
        </>
    );
};

export default LoginForm;
