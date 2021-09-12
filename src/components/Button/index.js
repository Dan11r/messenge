import React from 'react';
import {Button as MainButton} from 'antd'
import classNames from "classnames";
import './Button.scss'

const Button = ({children, ...props}) => {
    return (
        <MainButton {...props} className={classNames('button', props.className, {'button--large':props.size === 'large'})}>
            {children}
        </MainButton>
    );
};

export default Button;
