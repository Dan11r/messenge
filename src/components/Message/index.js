import React from 'react';
import './message.scss'

const Message = ({avatar, text, date}) => {
    return (
        <div className={'message'}>
            <div className={'message__avatar'}>
                <img src={avatar} alt="user avatar"/>
            </div>
            <div className={'message__content'}>
                <div className={'message__bubble'}>
                    <p className={'message__text'}>
                        {text}
                    </p>
                </div>
                <span>{date}</span>
            </div>
        </div>
    );
};

export default Message;

