import React from 'react';
import classNames from "classnames";
import './ReadedIcon.scss'
import readedSvg from "../../assets/img/readed.svg";

const ReadedIcon = ({isReaded, isMe, className}) => {
    return (
        <>
            {isReaded ?
            <img className={className} src={readedSvg} alt="readed"/>
                : <div className={'unreaded'}></div>
            }
        </>


    );
};

export default ReadedIcon;
