import React from 'react';
import {Button as ButtonMui} from '@material-ui/core'
import classNames from "classnames";
import './Button.scss'

const Button = ({onClick, children, ...props}) => {
    return (
        <ButtonMui onClick={onClick} {...props} className={classNames('button', props.className, {'button--large':props.size === 'large'})}>
            {children}
        </ButtonMui>
    );
};

export default Button;
