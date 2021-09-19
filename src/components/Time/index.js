import React from 'react';
import './Time.scss'
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ruLocale from "date-fns/locale/ru";

const Time = ({date}) => {
    return (
        <>
            {formatDistanceToNow(new Date(date), {addSuffix: true, locale: ruLocale})}
        </>
    );
};

export default Time;
