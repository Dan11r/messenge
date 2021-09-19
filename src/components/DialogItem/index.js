import React from 'react';
import {Button as ButtonMui} from '@material-ui/core'
import classNames from "classnames";
import './DialogItem.scss'
import {ReadedIcon, Time} from "../index";

const DialogItem = ({isOnline, fullName, lastMessage, isReaded, newMessageCount, date}) => {
    return (
        <div className={classNames('dialogs__items', {
            "dialogs__items--isOnline": isOnline
        })}>
            <div className={classNames("dialogs__items-avatar")}>
                <img src="https://source.unsplash.com/random" alt={'avatar'}/>
            </div>
            <div className="dialogs__items-info">
                <div className="dialogs__items-info-top">
                    <b>{fullName}</b>
                    <span>
                        {/*<Time date={'Wed Sep 15 2021 14:50:42 GMT+0300 (Москва, стандартное время)'}/>*/}13:32
                    </span>
                </div>
                <div className="dialogs__items-info-bottom">
                    <p>{lastMessage}</p>
                    {!newMessageCount && <ReadedIcon className={'dialogs__items-info-bottom-img'} isReaded={isReaded} isMe={true}/>}
                    {newMessageCount > 0 && <span className={'dialogs__items-info-bottom-count'}>1</span>}
                </div>
            </div>
        </div>
    );
};

export default DialogItem;
