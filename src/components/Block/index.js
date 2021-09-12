import React from 'react';
import './Block.scss'
import classNames from "classnames";

const Block = ({children, ...props}) => {
    return (
        <div {...props} className={classNames('block', props.className)}>{children}</div>
    );
};

export default Block;
