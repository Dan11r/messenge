import React from 'react';
import './message.scss'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ruLocale from 'date-fns/locale/ru'
import classNames from "classnames";
import readedSvg from '../../assets/img/readed.svg'
import {ReadedIcon, Time} from "../index";

const Message = ({avatar, text, date, isMe, isReaded, attached, typing, img}) => {
    return (
        <div className={classNames('message', {
            'message--isme':isMe,
            'message--istyping':typing,
            'message--image': img
        })}>
            <div className={classNames('message__avatar',{
                'message__avatar--isme':isMe
            })}>
                <img src={avatar} alt="user avatar"/>
            </div>
            <div className={classNames('message__content',{
                'message__content--isme':isMe
            })}>
                {!img && <div className={classNames('message__bubble', {
                    'message__bubble--isme': isMe,
                    'message__bubble--istyping': typing
                })}>
                    {text && <p className={classNames('message__text', {
                        'message__text--isme': isMe
                    })}>
                        {text}
                    </p>}
                    {typing && <div className="message__typing">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>}
                </div>}
                <div className={classNames('message__attached')}>
                    {attached && attached.map((u, i) => <div key={u.url+i} className={classNames( {
                        'message__attached-items':!img,
                        'message__attached-img': img
                    })}>
                        <img src={u.url}
                             alt="прикрепленная картинка"/>
                    </div>)}
                </div>
                {date && <span className={classNames('message__date', {
                    'message__date--isme': isMe
                })}>
                    <Time date={date}/>
                </span>}
            </div>
            {!typing && <ReadedIcon className={classNames('message__readed', {
                'message__readed--isme': isMe
            })} isReaded={isReaded} isMe={isMe}/>}
        </div>
    );
};

export default Message;

